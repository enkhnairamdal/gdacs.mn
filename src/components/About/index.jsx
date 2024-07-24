import styles from "./styles.module.css";
export default function About() {
  return (
    <>
      <div className={styles.about}  id="бидний-тухай">
        <h1 className={styles.title}>БИДНИЙ ТУХАЙ</h1>
      </div>
      <section className={styles.container}>
        <div className={styles.about1}>
          <p className={styles.p}>
            “Жидакс” хувьцаат компани нь 1992 онд анх “Уужим хангай” ХК
            нэртэйгээр хөдөө аж ахуйн төслүүдэд хөрөнгө оруулалт хийж, хөдөө аж
            ахуйн цогц үйлдвэрлэл, үйлчилгээ бүхий үндэсний тэргүүлэгч компани
            болохыг эрхэм зорилгоо болгон байгуулагдсан бөгөөд 2013 онд
            “Стандарт Агрикалчер групп” ХК үйл ажиллагааны чиглэл нь гадаад
            худалдаа, бизнес төлөвлөгөө, газар тариалан, фермерийн аж ахуй
            эрхлэх болгон өөрчилж явуулж ирсэн байдаг.
          </p>
        </div>
        <div className={styles.about2}>
          <img src="../image/heroBG.webp" alt="" />
          <p className={styles.p}> 
            2021 онд “Стандарт Агрикалчер групп” ХК-ийн 99,06 хувийн хувьцааг
            БНСУ-ын хөрөнгө оруулалттай “ Эм Ди Кэй Ай ” ХХК худалдан авснаар
            нэрээ “Жидакс” ХК болгон, программ хангамж, мэдээлэл технологиийн
            үйл ажиллагаа, вэб сайтын үйлчилгээ, төсөл хөтөлбөр хэрэгжүүлэх,
            онлайн худалдаа, автомашинаар ачаа тээвэрлэхийг үйл ажиллагааны
            үндсэн чиглэлээ болгон БНСУ-ын дэвшилтэд технологийг Монгол улсад
            нутагшуулах төслийг хэрэгжүүлэн ажиллаж байна.
          </p>
        </div>
        <div className={styles.about3}>
          <p className={styles.p}>
            2020 онд дэлхий нийтийг хамарсан цар тахал “Ковид-19”-ийг илрүүлгийг
            түргэн шуурхай болгож, Монгол улсын эдийн засгийн эргэлт, хүн амын
            доторх өвчлөлийг эрт илрүүлэх зорилгоор БНСУ-ын “Genesystem” ХХК-ийн
            сүүлийн үеийн ПГУ-ын (45 минутад хариу гардаг) шинжилгээний тоног
            төхөөрөмж, технологийг нутагшуулах “Covid-19 шинжилгээний
            лабораторийн цогц шийдэл” төслийг 2021 оноос хөрөнгө оруулалт хийн
            ажиллаж байна.
          </p>
          <img src="../image/sv_m_bg4.jpg" alt="" />
        </div>
        <div className={styles.about4}>
          <img src="../image/Alpha.jpg" alt="" />
          <p className={styles.p}>
            Төслийн хүрээнд “Жидакс” ХК-ийн 100%-ийн хөрөнгө оруулалтаар эм,
            эмнэлгийн тоног төхөөрөмж, урвалж импортлох тусгай зөвшөөрөлтэй
            “Альфа Доктор Мед” ХХК-ийн 51%-ийн хувьцааг эзэмшиж,“Альфа Доктор
            Мед” ХХК-нь төслийн гүйцэтгэгчээр клиник лаборатори биохими,
            иммунологи, молекул биологийн тусгай зөвшөөрөл бүхий “Их бараат”
            ХХК-ийн 100%-ийн хувьцааг эзэмшиж, үйл ажиллагааг эрхлэн, эрүүл
            мэндийн салбарт хувь нэмрээ оруулан ажиллаж байна.
          </p>
        </div>
        <div className={styles.about5}>
          <p className={styles.p}>
            Цаашид үйл ажиллагааны чиглэлдээ нийцүүлэн БНСУ-ын сүүлийн үеийн
            дэвшилтэд технологийг Монгол улсын бүтээн байгуулалт, цахим хөгжил,
            эрүүл мэндийн салбаруудад хөрөнгө оруулалтыг татан төвлөрүүлж, төсөл
            хөтөлбөрийг хэрэгжүүлэх болно. Цаашид үйл ажиллагааны чиглэлдээ
            нийцүүлэн БНСУ-ын сүүлийн үеийн дэвшилтэд технологийг Монгол улсын
            бүтээн байгуулалт, цахим хөгжил, эрүүл мэндийн салбаруудад хөрөнгө
            оруулалтыг татан төвлөрүүлж, төсөл хөтөлбөрийг хэрэгжүүлэн ажиллахыг
            зорилго болгоно.
          </p>
        </div>
        <div className={styles.about6}>
          <iframe
            src="https://mse.mn/mn/company/385"
            frameborder="0"
            width="100%"
            height="600"
            style={{ borderRadius: "40px", marginBottom: "20px" }}
          >
            iframe
          </iframe>
        </div>
      </section>
    </>
  );
}
