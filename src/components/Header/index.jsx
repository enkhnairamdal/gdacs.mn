
import React from 'react'
import styles from"./styles.module.css";
import Stars from '../stars/star';
export default function Header() {
  return <section className={styles.container}>
      <Stars/>
    
    <div className={styles.content}>
      <img className={styles.logo} src="../image/gdacs-logo.png" alt="" />
      
      
       <button id="myBtn" onclick="myFunction()"><span>&#xF479</span></button>
   </div>
    <div></div>
  </section>;
}
