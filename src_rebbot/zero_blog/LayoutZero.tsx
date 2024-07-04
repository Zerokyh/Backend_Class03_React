import { Outlet } from "react-router-dom";

import Sidenav from "./Sidenav";
import useThemeStore from "../store/store";

const LayoutZero = () => {
  const { theme } = useThemeStore();
  return (
    <>
      <div
        className={`flex max-w-full h-full ${
          theme === "Light" ? "bg-white text-black" : "bg-darkmode text-white"
        }`}
      >
        <Sidenav />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default LayoutZero;
