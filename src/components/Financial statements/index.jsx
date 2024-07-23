import Stars from "../stars/star";
import "./module.css";
import { Link } from "react-router-dom";
export default function Financial() {
  return (
    <div>
      <div className="main-container">
        <h1>
          ҮЙЛ АЖИЛЛАГАА,
          <br /> САНХҮҮГИЙН ТАЙЛАН
        </h1>
        <Link
          className="card "
          to="/санхүүгийн-тайлан"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <h2>Санхүүгийн тайлан</h2>
          <img className="imageBox" src="./image/next.png" alt="" />
          <img className="imageHover" src="./image/next-white.png" alt="" />
        </Link>
        <Link
          className="card "
          to="/компанийн-үйл-ажиллагааны-тайлан"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <h2>Компанийн үйл ажиллагааны тайлан</h2>
          <img className="imageBox" src="./image/next.png" alt="" />
          <img className="imageHover" src="./image/next-white.png" alt="" />
        </Link>
        <Link
          className="card "
          to="/хувьцаа-эзэмшигчдийн-хурал"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <h2>Хувьцаа эзэмшигчдийн хурал</h2>
          <img className="imageBox" src="./image/next.png" alt="" />
          <img className="imageHover" src="./image/next-white.png" alt="" />
        </Link>
        <Link
          className="card  border"
          to="/төлөөлөн-уулзах-зөвлөл-ээлжит-хурал"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <h2>Төлөөлөн Уулзах Зөвлөл Ээлжит хурал</h2>
          <img className="imageBox" src="./image/next.png" alt="" />
          <img className="imageHover" src="./image/next-white.png" alt="" />
        </Link>
        <Link
          className="card  border"
          to="/төлөөлөн-уулзах-зөвлөл-ээлжит-бус-хурал"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <h2>Төлөөлөн Уулзах Зөвлөл Ээлжит бус хурал</h2>
          <img className="imageBox" src="./image/next.png" alt="" />
          <img className="imageHover" src="./image/next-white.png" alt="" />
        </Link>
        <Link
          className="card "
          to="/компанийн-засаглалын-гэрчилгээ"
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <h2>Компанийн засаглалын гэрчилгээ</h2>
          <img className="imageBox" src="./image/next.png" alt="" />
          <img className="imageHover" src="./image/next-white.png" alt="" />
        </Link>
        <Link
          className="card"
          style={{ textDecoration: "inherit", color: "inherit" }}
          to="/компанийн-засаглалын-кодексийн-үнэлгээний-тайлан"
        >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <h2>Компанийн засаглалын кодексийн үнэлгээний тайлан.</h2>
          <img className="imageBox" src="./image/next.png" alt="" />
          <img className="imageHover" src="./image/next-white.png" alt="" />
        </Link>
      </div>
    </div>
  );
}
