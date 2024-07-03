// import Counter from "./musinsa/Counter";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menubar from "./ddinggo/Menubar";
// import Counter from "./musinsa/Counter";
import Musinsa from "./musinsa/Musinsa";
import Home from "./router_nav/Home";
import Product from "./Product";
import Contents1 from "./router_nav/Contents1";
import Contents2 from "./router_nav/Contents2";
import Layout from "./router_nav/Layout";
// import Effect from "./Effect";
// import Queue from "./Queue";
// import Snapshot from "./Snapshot";
// import CategoryButton from "./ddinggo/CategoryButton";
// import Menubar from "./ddinggo/Menubar";

function App() {
  return (
    // // <div className="App flex flex-col gap-20">
    //   {/* <Counter price={15000} />
    //   <Counter price={35000} />
    //   <Counter price={5800} /> */}
    //   {/* <Menubar /> */}
    //   {/* <CategoryButton image="netflix.png" title="넷플릭스" />
    //   <CategoryButton image="watcha.png" title="왓차" />
    //   <CategoryButton image="disnep.png" title="디즈니" /> */}
    //   {/* <Snapshot /> */}
    //   {/* <Queue /> */}
    //   {/* <Effect /> */}
    //   {/* </div> */}

    // router
    <BrowserRouter>
      {/* <Topnav /> */}
      <Routes>
        {/* <Route path="/" Component={Home} />
        <Route path="/ddinggo" Component={Menubar} />
        <Route path="/musinsa" Component={Musinsa} />
        <Route path="/product/:id" Component={Product} /> */}
        <Route element={<Layout />}>
          <Route path="/" Component={Home} />
          <Route path="/ddinggo" Component={Menubar} />
          <Route path="/musinsa" Component={Musinsa} />
          <Route path="/product/:id" Component={Product} />
          <Route path="/Contents1" Component={Contents1} />
          <Route path="/Contents2" Component={Contents2} />
        </Route>
      </Routes>
      {/* <Undernav
        className="flex flex-col w-14 p-2 text-2xl justify-center items-center gap-1 text-slate-500 hover:text-blue-500"
        content="마이"
      /> */}
    </BrowserRouter>
  );
}

export default App;
