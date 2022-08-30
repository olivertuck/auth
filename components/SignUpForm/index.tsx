import Input from '../Input';
import { SignUpValues } from '../../types';
import { signUpSchema } from '../../schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const SignUpForm = () => {
  const { control, handleSubmit } = useForm<SignUpValues>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      username: '',
    },
    resolver: zodResolver(signUpSchema),
  });
  const signUp = () => {};

  return (
    <form onSubmit={handleSubmit(signUp)}>
      <Input<SignUpValues>
        control={control}
        id="name"
        label="Name"
        name="name"
      />
      <Input<SignUpValues>
        control={control}
        id="email"
        label="Email"
        name="email"
        type="email"
      />
      <Input<SignUpValues>
        control={control}
        id="username"
        label="Username"
        name="username"
      />
      <Input<SignUpValues>
        control={control}
        id="password"
        label="Password"
        name="password"
        type="password"
      />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUpForm;
