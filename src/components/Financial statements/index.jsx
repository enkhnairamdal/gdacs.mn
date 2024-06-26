import styles from"./styles.module.css";
export default function Financial (){
    return(
        <div className={styles.ficontainer}>
            <h1>ҮЙЛ АЖИЛЛАГАА,<br /> САНХҮҮГИЙН ТАЙЛАН</h1>
            <div style={{display:"flex" , flexDirection:"column" , gap:"100px"}}>
                <div style={{display:"flex", justifyContent:"space-between"}} className={styles.cardtop}>
                    <div className={styles.cardp}>
                        <h2>Санхүүгийн тайлан</h2>
                        <img src="./image/next.png" alt=""/>  
                    </div>
                    <div className={styles.cardp}>
                        <h2>Компанийн үйл ажиллагааны тайлан</h2>
                        <img src="./image/next.png" alt="" />  
                    </div>
                    <div className={styles.cardp}>
                        <h2>Хувьцаа эзэмшигчдийн хурал</h2>
                        <img src="./image/next.png" alt="" />  
                    </div>
                </div>
                <div style={{display:"flex" ,justifyContent:"space-between"}}>
                    <div className={styles.cardp}>
                        <h2>ТУЗ Ээлжит хурал</h2>
                        <img src="./image/next.png" alt="" />  
                    </div>
                    <div className={styles.cardp}>
                        <h2>ТУЗ Ээлжит бус хурал</h2>
                        <img src="./image/next.png" alt="" />  
                    </div>
                    <div className={styles.cardp}>
                        <h2>Компанийн засаглалын гэрчилгээ</h2>
                        <img src="./image/next.png" alt="" />  
                    </div>
                </div>
            </div>
        </div>
    )
}