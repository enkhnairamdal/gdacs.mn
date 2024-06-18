import styles from"./styles.module.css";
import Slider from "react-slick";

export default function Tuz() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
    return(
        <Slider className={styles.slider} {...settings}>
           
               <div>
               <p ><span>Ажлын туршлага:</span>  Шинкү констракшн холдингс ХХК / 2014 - 2017 / Менежер Кумо-Элиди ХХК / 2014 - 2015 / Орчуулагч</p>
                <p><span>Боловсрол:</span> МҮХИЭХүрээлэн / 1993 - 1996 / Судлаач, багш орчуулагч 45-р сургууль / 1983 - 1993 / Ерөнхий боловсрол</p>
                <img src="./image/tugsuu.jpg" alt="" />
                <h3>Т.Төгс-Од</h3>
                <p>ТУЗ-ийн дарга Иргэний харьяалал: Монгол</p>
               </div>

               <div>
               <p><span>Ажлын туршлага:</span>  Шинкү констракшн хКумо-Элиди ХХК / 2014 - 2015 / Орчуулагч</p>
                <p><span>Боловсрол:</span> МҮХИЭХүрээлэн / 1993 - 1996 / Судлаач, багш орчуулагч 45-р сургууль / 1983 - 1993 / Ерөнхий боловсрол</p>
                <img src="./image/tugsuu.jpg" alt="" />
                <h3>Т.Төгс</h3>
                <p>ТУЗ-ийн дарга Иргэний харьяалал: Монгол</p>
               </div>
               <div>
               <p><span>Ажлын туршлага:</span>  Шинкү констракшн</p>
                <p><span>Боловсрол:</span> МҮХИЭХүрээлэн / 1993 - 1996 / Судлаач, багш орчуулагч 45-р сургууль / 1983 - 1993 / Ерөнхий боловсрол</p>
                <img src="./image/tugsuu.jpg" alt="" />
                <h3>Т.</h3>
                <p>ТУЗ-ийн дарга Иргэний харьяалал: Монгол</p>
               </div>
        
        </Slider>
    )
}