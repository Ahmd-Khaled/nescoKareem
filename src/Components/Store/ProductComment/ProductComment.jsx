import styles from "./styles.module.scss";
// import RatingStars from "@/components/utils/RatingStars/RatingStars";

const ProductComment = () => {
  return (
    <div className={styles.prodComment}>
      <div className={styles.prodComment__userImg}>
        <img width={50} height={50} src={process.env.PUBLIC_URL + "/images/user2.svg"} alt="" />
      </div>
      <div className={styles.prodComment__body}>
        <div className={styles.commentDetails}>
          <div className={styles.user}>
            <h3 className={styles.userName}>رضا محمد</h3>
            {/* <RatingStars newRateValue={4.5} /> */}
          </div>
          <div className={styles.date}>13/10 /2020</div>
        </div>
        <p className={styles.commentTxt}>استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً</p>
      </div>
    </div>
  )
}

export default ProductComment;