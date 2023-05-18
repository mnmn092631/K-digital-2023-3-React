import { Route, Routes } from "react-router-dom";
import RouteHome from "./RouteHome";
import RoutePage1 from "./RoutePage1";
import RoutePage2 from "./RoutePage2";
import RouteNav from "./RouteNav";

const RouteMain = () => {
  return (
    <main className="container">
      <RouteNav />
      <Routes>
        <Route path="/" element={<RouteHome />} />
        <Route path="/page1/:item1/:item2" element={<RoutePage1 />} />
        <Route path="/page2" element={<RoutePage2 />} />
      </Routes>
    </main>
  );
};

export default RouteMain;
