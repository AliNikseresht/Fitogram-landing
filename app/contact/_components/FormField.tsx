import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
  error?: string;
  isTextArea?: boolean;
  type?: string;
  placeholder?: string;
};

const FormField: React.FC<Props> = ({
  label,
  id,
  register,
  error,
  isTextArea = false,
  type = "text",
  placeholder,
}) => (
  <div>
    <label htmlFor={id} className="block mb-1 font-medium">
      {label}
    </label>
    {isTextArea ? (
      <textarea
        id={id}
        {...register}
        rows={5}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-[#bababa] rounded-md"
      />
    ) : (
      <input
        id={id}
        type={type}
        {...register}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-[#bababa] rounded-md"
      />
    )}
    {error && <span className="text-sm text-red-500">{error}</span>}
  </div>
);

export default FormField;
