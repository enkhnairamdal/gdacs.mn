import Footer from "../Footer";

export default function Kzs() {
  return (
    <div
    style={{
        marginTop: "-50px",
        width: "100%",
        height: "100%",
        backgroundColor: "#ECEDF0",
        paddingBottom: "100px",
      }}>
      <h1 style={{ paddingTop: "70px" }}>
        Компанийн засаглалын <br/>кодексийн <br /> үнэлгээний тайлан.
      </h1>
      <div className="main-container">
        <a
        style={{ textDecoration: "none", color: "black" }}
          className="cardS "
          href="https://drive.google.com/file/d/15d-bSDzxRtnrJrphRn8pjSY6z8dF5ull/view?usp=sharing"
          target="_blank"
        >
         <h2> 2023 оны жилийн эцсийн Компанийн засаглалын үйл ажиллагааны тайлан</h2>
         <img className="imageBox" src="./image/next.png" alt=""/>
        </a>

        <a
        style={{ textDecoration: "none", color: "black" }}
          className="cardS "
          href="https://drive.google.com/file/d/1wU8QzBnWmeTT7D4glrnvmMMw8KIjJdVa/view?usp=sharing"
          target="_blank"
        >
          <h2>2024 оны 07 сарын 01-ний өдрийн байдлаарх засаглалын үнэлгээний тайлан</h2>
          <img className="imageBox" src="./image/next.png" alt="" />
        </a>
      </div>
      <Footer/>
    </div>
  );
}
