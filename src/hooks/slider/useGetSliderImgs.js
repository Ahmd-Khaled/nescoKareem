import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliderImgs } from "../../redux/thunkActions/sliderActions";


const useGetSliderImgs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getSliderImgs());
    }

    run();
  }, []);

  

  const { sliderImgs, isLoading, error } = useSelector(state => state.SliderSlice);

  let sliderImgsData = [];


  if (sliderImgs) {
    if (sliderImgs.status && sliderImgs.data) {
      sliderImgsData = sliderImgs.data;
    }
  }
  
  return [sliderImgsData, isLoading, error];
}

export default useGetSliderImgs;