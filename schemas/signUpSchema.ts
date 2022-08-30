import { z } from 'zod';

const signUpSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  password: z.string().min(6),
  username: z.string().min(1),
});

export default signUpSchema;
