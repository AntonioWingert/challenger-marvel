import { Route, Routes } from "react-router-dom";
import { Description, Home } from "./Pages";


export default function RouteContainer() {
  return (
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/description/:id" element={<Description />} />
   </Routes>
  );
}