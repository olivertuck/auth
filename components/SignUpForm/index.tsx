import SignUpInput from '../SignUpInput';
import { SignUpValues } from '../../types';
import { signUpSchema } from '../../schemas';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const SignUpForm = () => {
  const { control, handleSubmit } = useForm<SignUpValues>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      username: '',
    },
    resolver: yupResolver(signUpSchema),
  });
  const signUp = () => {};

  return (
    <form onSubmit={handleSubmit(signUp)}>
      <SignUpInput control={control} id="name" label="Name" name="name" />
      <SignUpInput
        control={control}
        id="email"
        label="Email"
        name="email"
        type="email"
      />
      <SignUpInput
        control={control}
        id="username"
        label="Username"
        name="username"
      />
      <SignUpInput
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
