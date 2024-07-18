import Footer from "../Footer";

export default function Ktailan() {
  return (
    <div  style={{
        marginTop: "-50px",
        width: "100%",
        height: "100%",
        backgroundColor: "#ECEDF0",
        paddingBottom: "100px",
      }}>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
	  <h1 style={{ paddingTop: "70px"}}>Компанийн үйл <br/> ажиллагааны тайлан.</h1>
      <div className="main-container">
       
            <a
			style={{ textDecoration: "none", color: "black" }}
          className="cardS "
              href="https://drive.google.com/file/d/1_wT95mXEjT_2h7paTqXwoJO-48EOlyhy/preview"
              target="_blank"
            >
              <h2>2021 оны үйл ажиллагааны тайлан</h2>
			  <img className="imageBox" src="./image/next.png" alt="" />
            </a>
         
            <a
			style={{ textDecoration: "none", color: "black" }}
          className="cardS "
              href="https://drive.google.com/file/d/1pYf1r06WoHk7SaMOhvTNEkp_BLq_UUTB/preview"
              target="_blank"
            >
              <h2>2022 оны хагас жилийн үйл ажиллагааны тайлан</h2>
			  <img className="imageBox" src="./image/next.png" alt="" />
            </a>
        
            <a
			style={{ textDecoration: "none", color: "black" }}
          className="cardS "
              href="https://drive.google.com/file/d/1X3nCmwuJhqDmb0iT1vMYnbtdratXfv8e/preview"
              target="_blank"
            >
              <h2>2022 оны жилийн эцсийн үйл ажиллагааны тайлан</h2>
			  <img className="imageBox" src="./image/next.png" alt="" />
            </a>
         
            <a
			style={{ textDecoration: "none", color: "black" }}
          className="cardS "
              href="https://drive.google.com/file/d/1htrL9yJSEqIeR7A4BJEVFwWLgbK2CuKh/preview"
              target="_blank"
            >
              <h2>2023 оны хагас жилийн үйл ажиллагааны тайлан</h2>
			  <img className="imageBox" src="./image/next.png" alt="" />
            </a>
         
            <a
			style={{ textDecoration: "none", color: "black" }}
          className="cardS "
              href="https://drive.google.com/file/d/1R1pEt3j1OMecBX-hdSToQ5GTgJXkZ_8z/view?usp=sharing"
              target="_blank"
            >
             <h2>2023 оны жилийн үйл ажиллагааны тайлан</h2>
			 <img className="imageBox" src="./image/next.png" alt="" />
            </a>
          
       
      </div>
	  
	  <Footer />
    </div>
  );
}
