import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Hello from "./01/Hello";
import MyClock from "./02/MyClock";
import Box from "./03/Box";
import MyDiv from "./04/MyDiv";
import "./App.css";
import Dust from "./05/Dust";
import Taccident from "./06/Taccident";
import MyRef from "./07/MyRef";
import Gallery from "./08/Gallery";
import Fcst from "./10/Fcst";
import RouteMain from "./09/RouteMain";
import Cnt from "./12/Cnt";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="hello" element={<Hello />} />
          <Route path="myclock" element={<MyClock />} />
          <Route path="box" element={<Box />} />
          <Route path="mydiv" element={<MyDiv />} />
          <Route path="dust" element={<Dust />} />
          <Route path="taccident" element={<Taccident />} />
          <Route path="myref" element={<MyRef />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="route/*" element={<RouteMain />} />
          <Route path="fcst/*" element={<Fcst />} />
          <Route path="cnt/*" element={<Cnt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
