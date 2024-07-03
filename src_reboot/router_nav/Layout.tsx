import { Outlet } from "react-router-dom";
import Topnav from "./Topnav";
import Undernav from "./Undernav";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col justify-center  max-w-5xl m-auto my-40 shadow-xl">
        <Topnav />
        <main>
          <Outlet />
        </main>
        <Undernav />
      </div>
    </>
  );
};

export default Layout;
