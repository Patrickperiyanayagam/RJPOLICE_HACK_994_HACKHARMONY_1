import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Feedback from "./components/Feedback";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Feedback" element={<Feedback/>}/>
    </Routes>
  );
}
