import { Routes, Route } from "react-router-dom";
import Stailan from "./components/FINANCIAL/1";
import Home from "./Home";
import Ktailan from "./components/FINANCIAL/2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/санхүүгийн-тайлан" exact element={<Stailan />} />
      <Route
        path="/компанийн-үйл-ажиллагааны-тайлан"
        exact
        element={<Ktailan />}
      />
    </Routes>
  );
}

export default App;
