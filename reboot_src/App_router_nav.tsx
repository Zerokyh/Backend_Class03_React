import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menubar from "./ddinggo/Menubar";

import Musinsa from "./musinsa/Musinsa";
import Home from "./router_nav/Home";
import Contents1 from "./router_nav/Contents1";
import Contents2 from "./router_nav/Contents2";
import Layout from "./router_nav/Layout";

function App() {
  return (
    // router
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" Component={Home} />
          <Route path="/ddinggo" Component={Menubar} />
          <Route path="/musinsa" Component={Musinsa} />
          <Route path="/content1" Component={Contents1} />
          <Route path="/content2" Component={Contents2} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
