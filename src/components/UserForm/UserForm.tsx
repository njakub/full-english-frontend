import { useForm } from "react-hook-form";
import Input from "../FormElements/Input/Input";

type UserFormProps = {
  onSubmit: Function;
};

export default function UserForm({ onSubmit }: UserFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      className="w-full max-w-lg"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <Input name="firstName" register={register} errors={errors} />
      <Input name="lastName" register={register} errors={errors} />
      <Input name="username" register={register} errors={errors} />
      <Input name="phoneNumber" register={register} errors={errors} />
      <Input name="email" register={register} errors={errors} />

      <div className="flex items-center justify-between">
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
