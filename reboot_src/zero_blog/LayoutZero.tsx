import { Outlet } from "react-router-dom";

import Sidenav from "./Sidenav";
import useThemeStore from "../store/store";

const LayoutZero = () => {
  const { theme } = useThemeStore();
  return (
    <>
      <div
        className={`w-svw h-svh flex ${
          theme === "Light" ? "bg-white text-black" : "bg-darkmode text-white"
        }`}
      >
        <Sidenav />
        <main className="w-full h-full flex justify-center items-center">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default LayoutZero;
