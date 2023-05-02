import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Hello from "./01/Hello";
import MyClock from "./02/MyClock";
import Box from "./03/Box";
import MyDiv from "./04/MyDiv";
import "./App.css";
import Dust from "./05/Dust";
import Taccident from "./06/Taccident";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="hello" element={<Hello />}></Route>
          <Route path="myclock" element={<MyClock />}></Route>
          <Route path="box" element={<Box />}></Route>
          <Route path="mydiv" element={<MyDiv />}></Route>
          <Route path="dust" element={<Dust />}></Route>
          <Route path="taccident" element={<Taccident />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
