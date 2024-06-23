import { useState } from "react";

const Mybutton = () => {
  // 컴포넌트에서 상태[state] 바뀐다
  // react ver-19 [1 ~ 19]
  const [num, setNum] = useState(0);
  const [isTen, setIsTen] = useState(false);

  const plusHandle = () => {
    setNum((v) => {
      if (v === 10) {
        setIsTen((prev) => true);
        return 10;
      } else {
        v === 9 ? setIsTen((v1) => true) : setIsTen((v1) => false);
        return v + 1;
      }
    });
  };

  const minusHandle = () => {
    setNum((v) => (v === 0 ? 0 : v - 1));
    setIsTen((v) => false);
  };

  return (
    <div>
      <button onClick={minusHandle}>-</button>
      <span className={isTen ? "text-red-500" : "text-sky-500"}>{num}</span>
      <button onClick={plusHandle}>+</button>
    </div>
  );
};

export default Mybutton;
