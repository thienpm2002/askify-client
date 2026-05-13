import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AppButton from '@/components/common/AppButton'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useRegister } from '@/hooks/auth'

import { setAccessToken } from "@/api/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {


  const registerSchema = z.object({
    userName: z
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(30, "Name must be at most 30 characters")
      .trim()
      .refine(d => d.includes('admin'), {
        message: 'User name must not include admin'
      }),

    email: z
      .string()
      .email('Invalid email format')
      .trim(),

    password: z
      .string()
      .min(8, 'Name must be at least 8 characters')
      .trim(),
      
    confirmPassword: z.string().trim(),
  }).refine(
    d => d.password === d.confirmPassword,
    {message: "Confirm password does not match", path: ['confirmPassword'] }
  )

  const {register, handleSubmit, setError, formState: {errors}} = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues:{
      userName:'',
      email:'',
      password:'',
      confirmPassword:''
    }
  })

  const registerMutation = useRegister();

  const navigate = useNavigate();

  const onSubmit = async (data) => {

    try {
      const res = await registerMutation.mutateAsync(data);

      setAccessToken(res.accessToken);  

      toast.success("Register successful");

      navigate("/");

    } catch (error) {
      if ( error.response?.data?.error ==="EMAIL_ALREADY_EXISTS"){
        setError('email', { message: 'Email already exists' })
      }else {
        setError('root', { message: 'Register failed' })
      }
    }
  }

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <h1 className='font-bold text-2xl'>Create account</h1>

      <form onSubmit={handleSubmit((data) => onSubmit({userName: data.userName, email: data.email, password: data.password}))} className='border border-chart-1 p-5 flex flex-col gap-8 rounded-2xl md:w-80 lg:w-100'>
        <div>
        <Label htmlFor="name" className='mb-4'>Name</Label>
          <Input id='name' className='h-10' {...register('userName')}/>
          {errors.userName && <p className="text-red-500 text-sm mt-2">{errors.userName.message}</p>}
        </div>
        
        <div>
          <Label htmlFor="email" className='mb-4'>Email</Label>
          <Input id='email' className='h-10'{...register('email')} />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
        </div>

        <div>
          <Label htmlFor="password" className='mb-4'>Password</Label>
          <Input id='password' type='password' className='h-10' {...register('password')}/>
          {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
        </div>

        <div>
          <Label htmlFor="confirm-password" className='mb-4'>Confirm Password</Label>
          <Input id='confirm-password' type='password' className='h-10' {...register('confirmPassword')}/>
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-2">{errors.confirmPassword.message}</p>}
        </div>

        {errors.root && <p className="text-red-500 text-sm mt-2">{errors.root.message}</p>}

        <AppButton type='submit' disabled={registerMutation.isPending} className="text-[12px] font-normal px-2 py-4 md:text-[14px]">{registerMutation.isPending ? 'Loading...' : 'Create account'}</AppButton>
      </form>
    </div>
  )
}

export default RegisterPage
