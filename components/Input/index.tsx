import { FieldValues, useController } from 'react-hook-form';
import InputProps from './InputProps';
import classNames from 'classnames';
import { useState } from 'react';

const Input = <TFieldValues extends FieldValues = FieldValues>({
  control,
  id,
  label,
  name,
  type = 'text',
}: InputProps<TFieldValues>) => {
  const [isFocused, setIsFocused] = useState(false);
  const {
    field,
    fieldState: { error, isDirty },
  } = useController({
    control,
    name,
  });
  const shrink = isFocused || isDirty;

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div className="space-y-2">
      <div className="relative">
        <label
          className={classNames(
            'absolute left-[0.9375rem] text-muted transition-all',
            {
              'top-4 text-sm': !shrink,
              'top-[0.4375rem] text-xs': shrink,
            }
          )}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          {...field}
          autoComplete="off"
          className={classNames(
            'relative z-10 w-full rounded-lg border bg-transparent px-[0.9375rem] pt-[1.4375rem] pb-[0.4375rem] text-sm focus:outline-none',
            {
              'border-danger': error,
              'focus:border-primary': !error,
            }
          )}
          id={id}
          onBlur={handleBlur}
          onFocus={handleFocus}
          type={type}
        />
      </div>
      {error?.message && (
        <p className="ml-4 text-xs text-danger">{error.message}</p>
      )}
    </div>
  );
};

export default Input;
