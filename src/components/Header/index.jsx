
import React from 'react'
import styles from"./styles.module.css";
export default function Header() {
  return <section className={styles.container}>
      <video id={styles.video} autoPlay loop muted >
      <source src="../image/background.mp4" type="video/mp4" />
     </video>
    
    <div className={styles.content}>
      <img className={styles.logo} src="../image/gdacs_logo.png" alt="" />
      
      
       <button id="myBtn" onclick="myFunction()"><span>&#xF479</span></button>
   </div>
    <div></div>
  </section>;
}
