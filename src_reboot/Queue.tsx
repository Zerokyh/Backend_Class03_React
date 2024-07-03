import { useState } from "react";

const Queue = () => {
  const [num, setNum] = useState<number>(1);

  //microtask queue
  const click = () => {
    // 초기값을 이용
    setNum(num + 1);
    setNum(num + 1);
    setNum(num + 1);

    // 이전 값을 이용
    setNum((n) => n + 1);
    setNum((n) => n + 1);
    setNum((n) => n + 1);
  };

  return <div onClick={click}>{num}</div>;
};

export default Queue;
