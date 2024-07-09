// import About from "./components/About";
// import Actity from "./components/Activity";
// import Header from "./components/Header";
// import Tuz from "./components/TUZ";
// import Financial  from "./components/Financial statements";
// import Footer from "./components/Footer";
// import Stailan from "./components/FINANCIAL/1";
// import { Route, Routes, Navigate } from "react-router-dom";

// function App() {
//   return (
//     <body  style={{width:"100%", height:"100%" , backgroundColor:"#ECEDF0" , paddingBottom:"100px"}}>
      
      
//       <Routes>
//       <Header/>
//       <About/>
//       {/* <Actity/> */}
//       <Tuz/>
//       <Financial />
//       <Footer/>
//       <Route path="/санхүүгийн-тайлан" exact element={<Stailan/>} />
//       </Routes>
//     </body>
//   );
// }
// export default App;
import {  Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import About from './components/About';
// import Tuz from "./components/TUZ";
// import Financial  from "./components/Financial statements";
// import Footer from './components/Footer';
import Stailan from "./components/FINANCIAL/1";
import Home from './Home';
import Ktailan from './components/FINANCIAL/2';

function App() {
  return (
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/санхүүгийн-тайлан" exact element={<Stailan />} />
          <Route path="/компанийн-үйл-ажиллагааны-тайлан" exact element={<Ktailan/>} />
       
        </Routes>
  );
}

export default App;
