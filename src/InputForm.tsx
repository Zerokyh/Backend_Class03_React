import { ChangeEvent, useState } from "react";

const InputForm = () => {
  const [textLength, setTextLength] = useState(0);
  const [value, setValue] = useState("");
  const [limit, setLimit] = useState(15);
  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= limit) {
      setTextLength(() => e.target.value.length);
      setValue(() => e.target.value);
    }
  };
  const increse = () => setLimit((v) => v + 1);
  return (
    <div className="w-fit p-4 border border-slate-300 rounded-md flex items-center space-x-2">
      <input value={value} onChange={handle} type="text" />
      <span>{textLength}</span>
      <span className="text-gray-400">/ {limit}</span>
      <button onClick={increse} className="border border-red-400 p-1">
        +
      </button>
    </div>
  );
};

export default InputForm;
