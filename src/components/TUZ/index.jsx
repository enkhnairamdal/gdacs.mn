import styles from "./styles.module.css";
import Slider from "react-slick";

export default function Tuz() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.slidercon}>
      <h1>ТУЗ</h1>
      <Slider className={styles.slider} {...settings}>
        <div>
          <p className={styles.top}>
            <span className={styles.bold}>Ажлын туршлага:</span> Шинкү
            констракшн холдингс ХХК Менежер / 2014 - 2017 / <br /> Кумо-Элиди
            ХХК Орчуулагч / 2014 - 2015 /{" "}
          </p>
          <p>
            <span className={styles.bold}>Боловсрол:</span> Ерөнхий боловсрол
            45-р сургууль / 1983 - 1993 / <br /> МҮХИЭХүрээлэн Судлаач, багш
            орчуулагч / 1993 - 1996 /{" "}
          </p>
          <img src="./image/tugsuu.jpg" alt="" />
          <h3>Т.Төгс-Од</h3>
          <p className={styles.pa}>ТУЗ-ийн дарга </p>
        </div>
        <div>
          <p className={styles.top}>
            <span className={styles.bold}>Ажлын туршлага:</span> Дунху трейд ХК
            Менежер / 1991 - 2001 / <br /> Хайэр Корэа Захирал / 2001 - 2008 /{" "}
          </p>
          <p>
            <span className={styles.bold}>Боловсрол:</span> Ерөнхий боловсрол
            Гэсон ахлах сургууль / - 1981 / <br /> Ённамын ИС Инженер / 1981 -
            1985 /{" "}
          </p>
          <img src="./image/lee.jfif" alt="" />
          <h3>Лий Жунху</h3>
          <p className={styles.pa}>
            Иргэний харьяалал: БНСУ <br /> Эм Ди Кэй Ай ХХК / Захирал
          </p>
        </div>
        <div>
          <p className={styles.top}>
            <span className={styles.bold}>Ажлын туршлага:</span> Эм Ди Кэй Ай
            ХХК Нягтлан бодогч / 2020 - /
          </p>
          <p>
            <span className={styles.bold}>Боловсрол:</span> Ерөнхий боловсрол
            Ховд, Жаргалант 1-р сургууль / 2003 - 2013 / <br /> ШУТИС-МХТС
            Сүлжээний технологийн инженер / 2014 - 2019 / <br /> Мандах Их
            Сургууль Нягтлан бодогч / 2019 - 2021 /{" "}
          </p>
          <img src="./image/Gantuul.jpg" alt="" />
          <h3>Д.Гантуул</h3>
          <p className={styles.pa}>Нягтлан бодогч</p>
        </div>
        <div>
          <p className={styles.top}>
            <span className={styles.bold}>Ажлын туршлага:</span> Солонго-од
            трейд ХХК Нягтлан бодогч / 2010 - 2012 / <br /> Бид Монгол Трейд ХХК
            Нягтлан бодогч / 2015 - 2018 / <br /> Сан степпе ХХК Нягтлан бодогч
            / 2017 - 2020 /{" "}
          </p>
          <p>
            <span className={styles.bold}>Боловсрол:</span> СЭЗДСургууль Санхүү
            менежмент / 2005 - 2007 /{" "}
          </p>
          <img src="./image/hongoroo1.jpg" alt="" />
          <h3>Г.Хонгорзул</h3>
          <p className={styles.pa}>Нягтлан бодогч</p>
        </div>
        <div>
          <p className={styles.top}>
            <span className={styles.bold}>Ажлын туршлага:</span> МИАТ ТӨХК
            Мэргэжилтэн / 2011 - /
          </p>
          <p>
            <span className={styles.bold}>Боловсрол:</span> МУИС Эрх зүйч / 1994
            - 1998 /{" "}
          </p>
          <img src="./image/ganchimeg-removebg-preview.jpg" alt="" />
          <h3>Л.Ганчимэг </h3>
          <p className={styles.pa}>МИАТ ТӨХК / Мэргэжилтэн</p>
        </div>
        <div>
          <p className={styles.top}>
            <span className={styles.bold}>Ажлын туршлага:</span> Гутлын үйлдвэр
            Оёдолчин / 1989 - 1990 / <br /> Гутлын үйлдвэр Мастер / 1994 - 1995
            /{" "}
          </p>
          <p>
            <span className={styles.bold}>Боловсрол:</span> Ерөнхий боловсрол
            Нийслэлийн тэргүүний 33-р дунд сургууль / 1977 - 1987 / <br /> Чех
            улс АҮС Оёдлын технологи Оёдлын технологич / 1990 - 1994 /{" "}
          </p>
          <img src="./image/narantuya-removebg-preview.png" alt="" />
          <h3>Б.Нарантуяа</h3>
          <p className={styles.pa}>Болор Гялбаа ХХК / Захирал</p>
        </div>

        <div>
          <p className={styles.top}>
            <span className={styles.bold}>Ажлын туршлага:</span> Солонго-од
            трейд ХХК Нягтлан бодогч / 2010 - 2012 / <br /> Бид Монгол Трейд ХХК
            Нягтлан бодогч / 2015 - 2018 / <br /> Сан степпе ХХК Нягтлан бодогч
            / 2017 - 2020 /{" "}
          </p>
          <p>
            <span className={styles.bold}>Боловсрол:</span> СЭЗДСургууль Санхүү
            менежмент / 2005 - 2007 /{" "}
          </p>
          <img src="./image/Билэгдэмбэрэл.jpg" alt="" />
          <h3>Ж.Билэгдэмбэрэл</h3>
          <p className={styles.pa}>Нягтлан бодогч</p>
        </div>
      </Slider>
    </div>
  );
}
