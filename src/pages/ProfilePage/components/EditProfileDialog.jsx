import{ useState } from 'react'
import AppButton from '@/components/common/AppButton'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Pencil, Upload } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from 'sonner'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useUpdateAvatar, useUpdateProfile } from '@/hooks/users'

import { useAuth } from '@/contexts/AuthContext'

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const EditProfileDialog = () => {
    const { user } = useAuth();

    const [avatarPreview, setAvatarPreview] = useState(user.avatarUrl || 'https://github.com/shadcn.png');
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarError, setAvatarError] = useState("");

    const [open, setOpen] = useState(false);

    const handleChangeAvatar = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        if(file.size > MAX_FILE_SIZE){
            setAvatarError('Max size 2MB');
            return;
        }

         if(!ACCEPTED_IMAGE_TYPES.includes(file.type)){
            setAvatarError('Only supportJPG, PNG or WEBP');
            return;
        }

        setAvatarFile(file);

        if(!user.avatarUrl){
            setAvatarPreview(URL.createObjectURL(file));
        }
    };

    const editProfileSchema = z.object({
    userName: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(30, "Name must be at most 30 characters")
        .refine(d => !/admin/i.test(d), {
            message: 'User name must not include admin'
        }),

    email: z
        .string()
        .trim()
        .email("Invalid email format"),
    });

    const {register, handleSubmit, formState:{errors, dirtyFields}} = useForm({
        resolver: zodResolver(editProfileSchema),
        defaultValues: {
            userName: user.userName,
            email: user.email,
        }
    })

    const updateProfileMutation = useUpdateProfile();
    const updateAvatarMutation = useUpdateAvatar();

    const onSubmit = async (data) => {
        try {
           if(dirtyFields.email || dirtyFields.userName){
                await updateProfileMutation.mutateAsync(data);
            } 

            if(avatarFile){
                const formData = new FormData();
                formData.append("avatar", avatarFile);
                await updateAvatarMutation.mutateAsync(formData);
            }

            toast.success("Profile updated successfully");
            
            setAvatarFile(null);

            setAvatarError('');

            setOpen(false);

        } catch (error) {
            toast.error("Something went wrong");
        }
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <AppButton><Pencil /> Edit Profile</AppButton>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader className='pb-8 border-b border-border'>
               <DialogTitle className="text-[22px] font-bold">Edit Profile</DialogTitle>
            </DialogHeader>

               <h2 className='text-[16px] font-bold mt-2'>Profile Avatar</h2>
               
                <div className='flex flex-col justify-center items-center gap-4 border-b border-border pb-8 pt-2'>
                    <Avatar className='w-20 md:w-25 lg:w-30 h-20 md:h-25 lg:h-30'>
                        <AvatarImage src={user.avatarUrl ?  `${import.meta.env.VITE_API_URL}${user.avatarUrl}` : avatarPreview} />
                        <AvatarFallback>{user.userName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>

                    <p className="text-muted-foreground font-bold text-[12px]">JPG, PNG or WEBP. Max size 2 MB</p>

                    <Label onClick={() => setAvatarError('')} htmlFor="avatar" className='border border-chart-1 text-chart-3 p-2 rounded-2xl cursor-pointer'>
                            <Upload /> Change Avatar
                    </Label>
                    <Input 
                        type='file' 
                        id='avatar' 
                        className='hidden' 
                        onChange={handleChangeAvatar}  
                    />
                    {avatarError && <p className="text-red-500 text-sm mt-2">{avatarError}</p>}
                </div>

                <form onSubmit={handleSubmit((data) => onSubmit(data))} className='my-8 flex flex-col gap-8' >
                    <div>
                        <Label htmlFor='userName' className='mb-2'>Name</Label>
                        <Input id='userName' {...register('userName')}/>
                        {errors.userName && <p className="text-red-500 text-sm mt-2">{errors.userName.message}</p>}
                    </div>

                    <div className='border-b border-border pb-10'>
                        <Label htmlFor='email'>Email</Label>
                        <Input id='email' className='my-2' {...register('email')}/>
                        <p className="text-muted-foreground text-[12px]">This is the email you use to login. </p>
                        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                    </div>
                    
                    <div className='flex justify-end gap-4'>
                        <DialogClose asChild>
                           <AppButton variant="outline" className='bg-chart-1 text-black'>Cancel</AppButton>
                        </DialogClose>
                        <AppButton 
                            disabled={
                                (!dirtyFields.email && !dirtyFields.userName && !avatarFile) || 
                                updateProfileMutation.isPending || 
                                updateAvatarMutation.isPending } 
                                type='submit'
                            >
                                {(updateProfileMutation.isPending || updateAvatarMutation.isPending) ? 'Loading...' : 'Save Changes'}
                            </AppButton>
                    </div>
                    
                </form>
        </DialogContent>
    </Dialog>
  )
}

export default EditProfileDialog
