import Input from '../Input';
import SignUpInputProps from './SignUpInputProps';

const SignUpInput = ({
  control,
  id,
  label,
  name,
  type = 'text',
}: SignUpInputProps) => (
  <Input control={control} id={id} label={label} name={name} type={type} />
);

export default SignUpInput;
