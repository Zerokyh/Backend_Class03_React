import { useState } from "react";
import CategoryButton from "./CategoryButton";

const Menubar = () => {
  //   const tabList = [1, 2, 3, 4, 5];
  //   const newTabList = [
  //     {name: "tab1", isSelect: true},
  //     {name: "tab2", isSelect: false},
  //     {name: "tab3", isSelect: false},
  //     {name: "tab4", isSelect: false},
  //     {name: "tab5", isSelect: false},
  //   ]

  const [tabList, setTabList] = useState([
    {
      name: "무비",
      isSelect: true,
      categories: [
        { image: "netflix.png", title: "넷플릭스" },
        { image: "watcha.png", title: "왓차" },
      ],
    },
    {
      name: "캐릭터",
      isSelect: false,
      categories: [
        { image: "watcha.png", title: "왓차" },
        { image: "netflix.png", title: "넷플릭스" },
      ],
    },
    {
      name: "만화",
      isSelect: false,
      categories: [
        { image: "netflix.png", title: "넷플릭스" },
        { image: "watcha.png", title: "왓차" },
        { image: "netflix.png", title: "넷플릭스" },
      ],
    },
  ]);

  const click = (i: number) => {
    setTabList((prev) => {
      const newTapList = prev.map((v, index) =>
        i === index ? { ...v, isSelect: true } : { ...v, isSelect: false }
      );
      return newTapList;
    });
  };

  const selected = "px-8 py-6 text-center border-b-2 border-black";
  const notSelected = "px-8 py-6 text-center border-b-2";

  return (
    <>
      <nav className="flex justify-center">
        {tabList.map((v, i) => {
          return (
            <div
              onClick={() => click(i)}
              className={v.isSelect ? selected : notSelected}
            >
              <button className="text-black">{v.name}</button>
            </div>
          );
        })}
      </nav>
      {tabList.map((v) => {
        return (
          v.isSelect && v.categories.map((v1) => <CategoryButton {...v1} />)
        );
      })}
    </>
  );
};

export default Menubar;
