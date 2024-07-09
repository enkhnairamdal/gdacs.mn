import Stars from "../stars/star";
import "./module.css";
import { Link } from "react-router-dom";
export default function Financial (){
 
    return(
 <div>
          
<div className="main-container">
<h1>ҮЙЛ АЖИЛЛАГАА,<br /> САНХҮҮГИЙН ТАЙЛАН</h1>
    <Link className="card " to="/санхүүгийн-тайлан" style={{ textDecoration:"inherit" , color:"inherit" , }} > 
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <h2>Санхүүгийн тайлан</h2>
        <img className="imageBox" src="./image/next.png" alt="" />  
        <img className="imageHover"  src="./image/next-white.png" alt="" />  
    </Link>
    <div className="card " >
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <h2>Компанийн үйл ажиллагааны тайлан</h2>
        <img className="imageBox" src="./image/next.png" alt="" />  
        <img className="imageHover"  src="./image/next-white.png" alt="" />  
   
    </div>
    <div className="card " >
         <div id='stars'></div>
         <div id='stars2'></div>
         <div id='stars3'></div>
        <h2>Хувьцаа эзэмшигчдийн хурал</h2>
        <img className="imageBox" src="./image/next.png" alt="" />  
        <img className="imageHover"  src="./image/next-white.png" alt="" />  
   
    </div>
    <div className="card  border" >
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <h2>ТУЗ Ээлжит хурал</h2>
        <img className="imageBox" src="./image/next.png" alt="" />  
        <img className="imageHover"  src="./image/next-white.png" alt="" />  
   
    </div>
        <div className="card  border" >
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <h2>ТУЗ Ээлжит бус хурал</h2>
        <img className="imageBox" src="./image/next.png" alt="" />  
        <img className="imageHover"  src="./image/next-white.png" alt="" />  
   
    </div>
    <div className="card " >
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <h2>Компанийн засаглалын гэрчилгээ</h2>
        <img className="imageBox" src="./image/next.png" alt="" />  
        <img className="imageHover" src="./image/next-white.png" alt="" />  
   
    </div>
    <div className="card" >
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <h2>Компанийн засаглалын кодексийн үнэлгээний тайлан.</h2>
        <img className="imageBox" src="./image/next.png" alt="" />  
        <img className="imageHover" src="./image/next-white.png" alt="" />  
   
    </div>
</div>
 </div>
    )
}