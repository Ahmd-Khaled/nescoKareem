import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../redux/thunkActions/reviewActions";
import { useState } from "react";


const useAddReview = () => {
  const dispatch = useDispatch();
  const [reviewVal, setReviewVal] = useState("");

  const onChangeReview = (e) => {
    setReviewVal(e.target.value);
  }

  const onSubmitReview = async (e) => {
    e.preventDefault();
    
    await dispatch(addReview());
  }

  const { review, isLoading, error } = useSelector(state => state.FaqsSlice);

  let reviewRes = [];

  if (review) {
    if (review.status) {
      reviewRes = review.review;
    }

  }

  return [reviewVal, onChangeReview, onSubmitReview];
}

export default useAddReview;