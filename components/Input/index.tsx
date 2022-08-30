import { FieldValues, useController } from 'react-hook-form';
import InputProps from './InputProps';

const Input = <TFieldValues extends FieldValues = FieldValues>({
  control,
  id,
  label,
  name,
  type = 'text',
}: InputProps<TFieldValues>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input {...field} id={id} type={type} />
      {error?.message && <p>{error.message}</p>}
    </div>
  );
};

export default Input;
