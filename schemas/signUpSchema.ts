import { object, string } from 'yup';

const signUpSchema = object({
  email: string().email().required(),
  name: string().min(1),
  password: string().min(6),
  username: string().min(1),
});

export default signUpSchema;
