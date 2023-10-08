import { ImStarFull } from "react-icons/im";
import styles from "./styles.module.scss";
import useAddReview from "../../../hooks/review/useAddReview";
import { useState } from "react";
// import RatingStars from "@/components/utils/RatingStars/RatingStars";

const AddComment = () => {
  const [reviewVal, onChangeReview, onSubmitReview] = useAddReview();
  
  return (
    <div className={styles.addComment}>
      <div className={styles.addComment__show}>
        <h3 className={styles.commRate}>4.5 من 5</h3>
        {/* <RatingStars newRateValue={4} /> */}
        <div className={styles.stars}>
          <ImStarFull className={styles.starYellow} />
          <ImStarFull className={styles.starYellow} />
          <ImStarFull className={styles.starYellow} />
          <ImStarFull className={styles.starYellow} />
          <ImStarFull className={styles.starGray} />
        </div>
        <p className={styles.commNum}>60 تقييم على المنتج</p>
      </div>
      <form onSubmit={onSubmitReview} className={styles.addComment__add}>
        <label htmlFor="addComment">أضف تعليقك</label>
        <textarea
          value={reviewVal}
          onChange={onChangeReview}
          name="commentInput"
          id="addComment"
          rows={4}
          placeholder="برجاء اضافة تعليقك .." 
        />
        <button type="submit" className={styles.shareCommentBtn}>نشر تعليقك</button>
      </form>
    </div>
  )
}

export default AddComment