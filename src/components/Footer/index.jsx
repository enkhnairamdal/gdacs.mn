import styles from"./styles.module.css";
import React from 'react'


 

export default function Footer (){
   
    return  (
       <div>
       <div style={{display:"flex" , width:"95%", gap:"20px" ,margin:" 50px auto auto auto"}}>
       <div className={styles.topcontainer}>
            <div className={styles.footer}>
                <div className={styles.left}>
                    <img src="./image/black-gdacs.png" alt="" />
                    <h3>УТАС</h3>
                    <p>(+976)7011 9877</p>

                    <h3>МЭЙЛ</h3>
                    <p>official@gdacs.mn</p>
                    <h3>ХАЯГ</h3>
                    <p>
                        Монгол Улс, Улаанбаатар,
                        Баянгол дүүрэг 16-р хороо,
                        Шинэ монгол хаад групп ХХК-н байр,
                        2-р давхар 201тоот
                    </p>
                </div>
            </div>
           
        </div>
        <div className={styles.mapc}>
                     <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.3307598155707!2d106.89492495711015!3d47.91641832941339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693de49abe545%3A0xf140db674022951b!2z0KjQuNC90Y0g0JzQvtC90LPQvtC7INCl0LDQsNC0INCT0YDSr9C_0L8!5e0!3m2!1sen!2smn!4v1638847581282!5m2!1sen!2smn"  allowfullscreen="" loading="lazy"></iframe>
                </div>
       </div>
        <div className={styles.bottomcontainer}>
            <div>
                <h3>ҮНДСЭН ЦЭС</h3>
                <p>Нүүр</p>
                <p>Бидний тухай</p>
                <p>Үйл ажилгааны чиглэл</p>
                <p>Төсөл</p>
            </div>
            <div>
                <h3>ТУСЛАХ ЦЭС</h3>
                <p>ТУЗ</p>
                <p>Санхүү , Тайлан</p>
                <p>Хөрөнгийн бирж</p>
                <p>Хууль , Эрх зүй</p>
                
            </div>
            <div>
                <h3>ХЭРЭГТЭЙ ХОЛБООС</h3>
                <p>"Жидакс", "Хот девелопмент", <br /> "Ариг гал"-ын ханш хамгийн их өсөв.</p>
                <p>  "Жидакс" ХК, "Хот девелопмент" ХК, <br />"Бөөний худалдаа " ХК-ны хувьцааны ханш <br />өссөн үзүүлэлттэй байна.
                </p>
            </div>
            {/* <p>COPYRIGHT© 2024 GDACS co., ltd. ALL RIGHTS REVERSED.</p>
            <p>Mongolia</p> */}
        </div>
       </div>
    )
   
}