import styles from "./styles.module.css";

import { useState } from "react";
export default function Actity() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className={styles.abcontainer} id="үйл-ажиллагааны-чиглэл">
  
      <div>
        <div className={styles.sec2}>
          <h1 style={{ color: "white" }} className={styles.h1}>
            ЭРХЭМ ЗОРИЛГО,<br/> ҮЙЛ АЖИЛЛАГААНЫ ЧИГЛЭЛ
          </h1>
          <div className={styles.cards}>
            <div
              className={styles.card1}
              style={{ display: "flex", gap: "50px", justifyContent: "center" }}
            >
              <div className={styles.card}>
                <img src="./image/div1.jpg" alt="" />
                <p className={styles.p}>Программ Хангамжийн Үйлчилгээ</p>
                <span>&#8212;</span>
              </div>
              <div className={styles.card}>
                <img
                  src="./image/web-development-agency-singapore-website-development-process-medium.jpg"
                  alt=""
                />
                <p className={styles.p}>Веб Сайтын Үйлчилгээ</p>
                <span>&#8212;</span>
              </div>
              <div className={styles.card}>
                <img
                  src="./image/insights-value-of-assessing-your-it-operations.jpg"
                  alt=""
                />
                <p className={styles.p}>Мэдээлэл Технологийн Үйл Ажиллагаа</p>
                <span>&#8212;</span>
              </div>
            </div>
            <div
              className={styles.card1}
              style={{ display: "flex", gap: "50px", justifyContent: "center" }}
            >
              <div className={styles.card}>
                <img src="./image/istockphoto-1249219777-612x612.jpg" alt="" />
                <p className={styles.p} >Онлайн Худалдаа </p>
                <span>&#8212;</span>
              </div>
              <div className={styles.card}>
                <img src="./image/1.jpg" alt="" />
                <p className={styles.p}>Авто Машинаар Ачаа Тээрэрлэх</p>
                <span>&#8212;</span>
              </div>
              <div className={styles.card} style={{ marginBottom: "100px" }}>
                <img src="./image/a10.webp" alt="" />
                <p className={styles.p}> Төсөл Хөтөлбөр Хэрэгжүүлэх</p>
                <span>&#8212;</span>
              </div>
            </div>
          </div>
          {/* <logo-slider>
                <div className={styles.logos}>
                <img src="./image/mdki_logo.png" alt="" />
                <img src="./image/acata.png" alt="" />
                <img src="./image/ihbaraat.png" alt="" />
                <img src="./image/delico.png" alt="" />
                </div>
                </logo-slider> */}
        </div>
      </div>
    </div>
  );
}
