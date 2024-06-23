import { ChangeEvent } from "react";

type InputFormProps = {
  guide?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RegisterForm = ({
  guide = "None",
  placeholder = "",
  onChange,
}: InputFormProps) => {
  return (
    <div className="w-3/4 flex flex-col gap-3 mx-auto my-0">
      <h2 className="text-slate-500">{guide}</h2>
      <input
        className="w-full bg-gray-100 border rounded-md p-3"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default RegisterForm;
