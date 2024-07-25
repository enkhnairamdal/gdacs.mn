import {  Routes , Route ,} from "react-router-dom";
import Stailan from "./components/FINANCIAL/1";
import Home from "./Home";
import Ktailan from "./components/FINANCIAL/2";
import Heh from "./components/FINANCIAL/3";
import TUZ from "./components/FINANCIAL/4";
import TuzE from "./components/FINANCIAL/5";
import Kzs from "./components/FINANCIAL/6";
import Kzg from "./components/FINANCIAL/7";
import BottomNav from "./components/bottomNav";

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
      <Route path="/хувьцаа-эзэмшигчдийн-хурал" exact element={<Heh />} />
      <Route
        path="/төлөөлөн-уулзах-зөвлөл-ээлжит-хурал"
        exact
        element={<TUZ />}
      />
      <Route
        path="/төлөөлөн-уулзах-зөвлөл-ээлжит-бус-хурал"
        exact
        element={<TuzE />}
      />
      <Route
        path="/компанийн-засаглалын-кодексийн-үнэлгээний-тайлан"
        exact
        element={<Kzs />}
      />
      <Route path="/компанийн-засаглалын-гэрчилгээ" exact element={<Kzg />} />
   
  
   </Routes>
  );
}

export default App;
