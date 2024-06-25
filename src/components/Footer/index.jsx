import styles from"./styles.module.css";
import React from 'react'


 

export default function Footer (){
   
    return  (
        <div className={styles.focontainer}>
            <div className={styles.footer}>
                <div>
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

                <div className={styles.map}>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.3307598155707!2d106.89492495711015!3d47.91641832941339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693de49abe545%3A0xf140db674022951b!2z0KjQuNC90Y0g0JzQvtC90LPQvtC7INCl0LDQsNC0INCT0YDSr9C_0L8!5e0!3m2!1sen!2smn!4v1638847581282!5m2!1sen!2smn" style={{border:0 , width: '30%', height: '70vh'}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
   
}