import About from "./components/About";
import Actity from "./components/Activity";
import Header from "./components/Header";
import Tuz from "./components/TUZ";
import Financial  from "./components/Financial statements";
import Footer from "./components/Footer";

function App() {
  return (
    <body  style={{width:"100%", height:"100%" , backgroundColor:"#ECEDF0" , paddingBottom:"100px"}}>
      <Header/>
      <About/>
      <Actity/>
      <Tuz/>
      <Financial />
      <Footer/>
    </body>
  );
}
export default App;
