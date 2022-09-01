import { SignUpValues } from '../types';
import { signUpSchema } from '../schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const useSignUpForm = () =>
  useForm<SignUpValues>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      username: '',
    },
    resolver: zodResolver(signUpSchema),
  });

export default useSignUpForm;
