import Button from '../Button';
import Form from '../Form';
import SignUpInput from '../SignUpInput';
import { SignUpValues } from '../../types';
import { useSignUpForm } from '../../hooks';

const SignUpForm = () => {
  const { control, handleSubmit } = useSignUpForm();

  const signUp = (values: SignUpValues) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit(signUp)}>
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
      <Button>Sign up</Button>
    </Form>
  );
};

export default SignUpForm;
