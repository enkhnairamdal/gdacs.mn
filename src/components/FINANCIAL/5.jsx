import Footer from "../Footer";

export default function TuzE() {
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
      <h1 style={{ paddingTop: "70px" }}>
        Төлөөлөн Уулзах Зөвлөл <br /> Ээлжит бус хурал.
      </h1>
      <div className="main-container">
        <a
          style={{ textDecoration: "none", color: "black" }}
          className="cardS "
          href="https://drive.google.com/file/d/1A5SQkZ6ukvP_umKyvWP3AlJxnQeTinEh/preview"
          target="_blank"
        >
          <h2>2023он Төлөөлөн Уулзах Зөвлөл ээлжит бус хурал тогтоол</h2>
          <img className="imageBox" src="./image/next.png" alt="" />
        </a>
      </div>
      <Footer />
    </div>
  );
}
