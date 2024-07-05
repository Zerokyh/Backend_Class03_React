import { useState } from "react";

type CounterProps = {
  price: number;
};

const Counter = ({ price }: CounterProps) => {
  const [num, setNum] = useState(1);

  const minus = () => {
    setNum((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const plus = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <button
          onClick={minus}
          className="border border-slate-600 text-red-600"
        >
          -
        </button>
        <span className="text-xl">{num}</span>
        <button onClick={plus} className="border-slate-500 text-black">
          +
        </button>
      </div>
      <div>{price * num}</div>
    </>
  );
};
export default Counter;
