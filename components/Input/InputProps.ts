import { FieldValues, UseControllerProps } from 'react-hook-form';
import { InputType } from '../../types';

type InputProps<TFieldValues extends FieldValues = FieldValues> =
  UseControllerProps<TFieldValues> & {
    label: string;
    id: string;
    type?: InputType;
  };

export default InputProps;
