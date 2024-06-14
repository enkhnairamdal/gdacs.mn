import styles from"./styles.module.css";
import { useState } from "react";
export default function Actity(){
    const [collapse , setCollapse] = useState(false)
    return(
        <div className={styles.abcontainer}>
            <div className={styles.sec1}>
        
                <img  src="./image/a10.webp" alt=""/>
              
                <div className={styles.text}>
                    <h1>ТӨСӨЛ <br /> ХӨТӨЛБӨР  <br />ХЭРЭГЖҮҮЛЭХ</h1>
                    <p>“Альфа доктор мед” ХХК болон “Жидакс” компанийн хамтран байгуулсан “Их бараат” лаборатори нээлтээ хийлээ. <span className={styles.span}> Уг лаборатори нь корона вирусийг 15-45 минутад оношилдог. Харин бусад лабораториуд </span> </p>
                </div>
              
            </div>
            <p className={styles.span1}>
                 ачааллаасаа шалтгаалаад шинжилгээний хариуг 24-72 цагийн дотор хариу гаргадаг.
                 Манай улсад корона вирусийн PCR шинжилгээний хариу хүлээх зуур халдвар авах, вирусээр өвчилсөн тохиолдолд биеийн байдал хүндрэх, хугацаа алдах зэрэг олон талаар эрсдэл учруулдаг. Тэгвэл “Их бараат” лаборатори PCR шинжилгээний хариуг 45 минутад, түргэвчилсэн шинжилгээний хариуг арван таван минутад гаргах боломж бүрдүүлжээ.
                </p>
            <div>
            <div className={styles.sec2}>
                <h1>
                ЭРХЭМ ЗОРИЛГО, ҮЙЛ АЖИЛЛАГААНЫ ЧИГЛЭЛ
                </h1>
                <div className={styles.cards}>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                </div>
            </div>
            <div>

            </div>
            </div>
            
        </div>
    )
}