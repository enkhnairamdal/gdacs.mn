import styles from "./styles.module.css";

import { useState } from "react";
export default function Actity() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className={styles.abcontainer}>
      <div className={styles.sec1}>
        <img src="./image/a10.webp" alt="" />

        <div className={styles.text}>
          <h1>
            ТӨСӨЛ <br /> ХӨТӨЛБӨР <br />
            ХЭРЭГЖҮҮЛЭХ
          </h1>
          <p>
            “Альфа доктор мед” ХХК болон “Жидакс” компанийн хамтран байгуулсан
            “Их бараат” лаборатори нээлтээ хийлээ.{" "}
            <span className={styles.span}>
              {" "}
              Уг лаборатори нь корона вирусийг 15-45 минутад оношилдог. Харин
              бусад лабораториуд{" "}
            </span>{" "}
          </p>
        </div>
      </div>
      <p className={styles.span1}>
        ачааллаасаа шалтгаалаад шинжилгээний хариуг 24-72 цагийн дотор хариу
        гаргадаг. Манай улсад корона вирусийн PCR шинжилгээний хариу хүлээх зуур
        халдвар авах, вирусээр өвчилсөн тохиолдолд биеийн байдал хүндрэх,
        хугацаа алдах зэрэг олон талаар эрсдэл учруулдаг. Тэгвэл “Их бараат”
        лаборатори PCR шинжилгээний хариуг 45 минутад, түргэвчилсэн шинжилгээний
        хариуг арван таван минутад гаргах боломж бүрдүүлжээ.
      </p>
      <div>
        <div className={styles.sec2}>
          <h1 style={{ color: "white" }}>
            ЭРХЭМ ЗОРИЛГО, ҮЙЛ АЖИЛЛАГААНЫ ЧИГЛЭЛ
          </h1>
          <div className={styles.cards}>
            <div
              className={styles.card1}
              style={{ display: "flex", gap: "50px", justifyContent: "center" }}
            >
              <div className={styles.card}>
                <img src="./image/div1.jpg" alt="" />
                <p>Программ Хангамжийн Үйлчилгээ</p>
                <span>&#8212;</span>
              </div>
              <div className={styles.card}>
                <img
                  src="./image/web-development-agency-singapore-website-development-process-medium.jpg"
                  alt=""
                />
                <p>Веб Сайтын Үйлчилгээ</p>
                <span>&#8212;</span>
              </div>
              <div className={styles.card}>
                <img
                  src="./image/insights-value-of-assessing-your-it-operations.jpg"
                  alt=""
                />
                <p>Мэдээлэл Технологийн Үйл Ажиллагаа</p>
                <span>&#8212;</span>
              </div>
            </div>
            <div
              className={styles.card1}
              style={{ display: "flex", gap: "50px", justifyContent: "center" }}
            >
              <div className={styles.card}>
                <img src="./image/istockphoto-1249219777-612x612.jpg" alt="" />
                <p>Онлайн Худалдаа </p>
                <span>&#8212;</span>
              </div>
              <div className={styles.card}>
                <img src="./image/1.jpg" alt="" />
                <p>Авто Машинаар Ачаа Тээрэрлэх</p>
                <span>&#8212;</span>
              </div>
              <div className={styles.card} style={{ marginBottom: "100px" }}>
                <img src="./image/a10.webp" alt="" />
                <p>Төсөл Хөтөлбөр Хэрэгжүүлэх</p>
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
