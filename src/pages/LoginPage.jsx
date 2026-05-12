import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AppButton from '@/components/common/AppButton'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useLogin } from '@/hooks/auth/useLogin'

import { setAccessToken } from "@/api/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const loginSchema = z.object({
    email: z
      .string()
      .email('Invalid email format')
      .trim(),

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .trim(),
    
  })

  const {register, handleSubmit, setError, formState: {errors}} = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues:{
      email:'',
      password:'',
    }
  })

  const registerMutation = useLogin();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res  = await registerMutation.mutateAsync(data);

      setAccessToken(res.accessToken);  

      toast.success("Login successful");

      navigate("/");
    }catch(error){
      if ( error.response?.data?.error ==="INVALID_CREDENTIALS"){
        setError('root', { message: 'Email or password is incorrect' })
      }else {
        setError('root', { message: 'Login failed' })
      }
    }
  }

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <h1 className='font-bold text-2xl'>Welcom Back</h1>

      <form onSubmit={handleSubmit((data) => onSubmit(data))} className='border border-chart-1 p-5 flex flex-col gap-8 rounded-2xl md:w-80 lg:w-100'>
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

        {errors.root && <p className="text-red-500 text-sm mt-2">{errors.root.message}</p>}

        <AppButton type='submit' disabled={registerMutation.isPending} className="text-[12px] font-normal px-2 py-4 md:text-[14px]">{registerMutation.isPending ? 'Loading...' : 'Login'}</AppButton>
      </form>
    </div>
  )
}

export default LoginPage
