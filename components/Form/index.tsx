import FormProps from './FormProps';

const Form = ({ children, onSubmit }: FormProps) => (
  <form className="mx-auto max-w-sm space-y-4" onSubmit={onSubmit}>
    {children}
  </form>
);

export default Form;
