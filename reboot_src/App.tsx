import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./zero_blog/Home";
import LayoutZero from "./zero_blog/LayoutZero";
import Contact from "./zero_blog/Contact";
import Login from "./zero_blog/Login";
import Register from "./zero_blog/Register";

function App() {
  return (
    // router
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutZero />}>
          <Route path="/" Component={Home} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/Login" Component={Login} />
          <Route path="/Register" Component={Register} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
