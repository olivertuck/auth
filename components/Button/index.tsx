import ButtonProps from './ButtonProps';

const Button = ({ children }: ButtonProps) => (
  <button
    className="w-full rounded-lg bg-primary p-4 text-sm font-medium text-white"
    type="submit"
  >
    {children}
  </button>
);

export default Button;
