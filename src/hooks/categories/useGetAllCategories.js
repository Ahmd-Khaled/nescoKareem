import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createArray } from "../../utils/usefulFunctions";
import { getAllCategories } from "../../redux/thunkActions/categoriesActions";


const useGetAllCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getAllCategories());
    }

    run();
  }, []);

  

  const { categories, isLoading, error } = useSelector(state => state.ProductsSlice);

  let categoriesData = [];
  let categoriesCurrentPage = 0;
  let categoriesLastPage = 0;
  let categoriesTotal = 0;
  let categoriesPagesArray = [];

  if (categories) {
    if (categories.data) {
      categoriesData = categories.data;
      categoriesCurrentPage = categories.current_page;
      categoriesLastPage = categories.last_page;
      categoriesTotal = categories.total
      categoriesPagesArray = createArray(categoriesLastPage)
    }
  }
  
  return [categoriesData, categoriesCurrentPage, categoriesPagesArray, categoriesTotal];
}
export default useGetAllCategories;