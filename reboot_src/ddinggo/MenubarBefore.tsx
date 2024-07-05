import { useState } from "react";

const Menubar = () => {
  const [isFirst, setIsFirst] = useState<boolean>(false);

  const clickFirst = () => setIsFirst((v) => true);
  const clickSecond = () => setIsFirst((v) => false);

  const selected = "px-8 py-6 text-center border-b-2 border-black";
  const notSelected = "px-8 py-6 text-center border-b-2";

  return (
    <div className="flex justify-center">
      <div onClick={clickFirst} className={isFirst ? selected : notSelected}>
        <button>캐릭터</button>
      </div>
      <div onClick={clickSecond} className={isFirst ? notSelected : selected}>
        <button>유형</button>
      </div>
    </div>
  );
};

export default Menubar;
