import { useFormContext } from "react-hook-form";
import { findInputError } from "../../utils/findInputError";
import { isFormInvalid } from "../../utils/isFormInvalid";

export function Input({ label, type, id, placeholder, validation }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, id);
  const isInvalid = isFormInvalid(inputError);

  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={id}>
        {label}
      </label>
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
          isInvalid ? "border-red-500 focus:border-red-500" : "focus:border-gray-500"
        }`}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, validation)}></input>
      {isInvalid && <p className="text-red-500 text-xs italic">{inputError.error.message}</p>}
    </>
  );
}
