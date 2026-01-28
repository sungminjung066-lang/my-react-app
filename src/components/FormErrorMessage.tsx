import type { FieldError } from 'react-hook-form';

interface FormErrorMessageProps {
  fieldError?: FieldError;
}

export default function FormErrorMessage({ fieldError }: FormErrorMessageProps) {
  return (
    <>{fieldError && <p className="text-left font-bold text-red-800">{fieldError.message}</p>}</>
  );
}
