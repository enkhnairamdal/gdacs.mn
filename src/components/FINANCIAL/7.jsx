import Footer from "../Footer";

export default function Kzg() {
  return (
    <div
      style={{
        marginTop: "-50px",
        width: "100%",
        height: "100%",
        backgroundColor: "#ECEDF0",
        paddingBottom: "100px",
      }}
    >
      <h1 style={{ paddingTop: "70px" }}>Компанийн <br/> засаглалын  гэрчилгээ.</h1>
      <div className="main-container">
        <a
          style={{ textDecoration: "none", color: "black" }}
          className="cardS "
          href="https://drive.google.com/file/d/1UE1GjKICEATPIurGKH_aLJ1McJRMJeru/view?usp=sharing"
          target="_blank"
        >
          <h2>Гэрчилгээ</h2>
          <img className="imageBox" src="./image/next.png" alt="" />
        </a>
      </div>
      <Footer/>
    </div>
  );
}
