import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import ListCar from "./Component/Listcar/ListCar";
import AddCar from "./Component/Addcar/AddCar";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/listcar" element={<ListCar />} />
        <Route path="/addcar" element={<AddCar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;
