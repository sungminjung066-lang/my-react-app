// import type { FieldError, FieldErrorsImpl, FieldValues, Merge } from 'react-hook-form';
// interface FormErrorMessageProps<T extends FieldValues = FieldValues> {
//   fieldError?: FieldError | Merge<FieldError, FieldErrorsImpl<T>>;
// }
// export default function FormErrorMessage({ fieldError }: FormErrorMessageProps) {
//   return (
//     <>
//       {fieldError && (
//         <p className="text-left font-bold text-red-600">{fieldError.message as string}</p>
//       )}
//     </>
//   );
// }
import type { FieldErrors } from 'react-hook-form';

interface FormErrorMessageProps {
  errors?: FieldErrors;
  name: string;
}

export default function FormErrorMessage({ errors, name }: FormErrorMessageProps) {
  return (
    <>
      {errors?.[name] && (
        <p className="text-left font-bold text-red-600">{errors?.[name].message as string}</p>
      )}
    </>
  );
}
