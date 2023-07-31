import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import startCase from "lodash/startCase";

interface InputProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  label?: string;
}

export default function Input({ name, register, errors, label }: InputProps) {
  return (
    <div className="flex flex-wrap -mx-3">
      <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
        <label
          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
          htmlFor={name}
        >
          {label ? label : startCase(name)}
        </label>
        <input
          className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 appearance-none borderrounded focus:outline-none focus:bg-white"
          id={name}
          {...register(name)}
        />
        {errors[name] && (
          <p className="text-xs italic text-red-500">
            Please fill out this field.
          </p>
        )}
      </div>
    </div>
  );
}
