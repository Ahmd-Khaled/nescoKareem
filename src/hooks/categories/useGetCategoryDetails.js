import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createArray } from "../../utils/usefulFunctions";
import { getCategoryDetails } from "../../redux/thunkActions/categoriesActions";


const useGetCategoryDetails = (categId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getCategoryDetails(categId));
    }

    run();
  }, []);

  

  const { category, isLoading, error } = useSelector(state => state.ProductsSlice);

  let categoryData = [];
  let categoryCurrentPage = 0;
  let categoryLastPage = 0;
  let categoryTotal = 0;
  let categoryPagesArray = [];

  if (category) {
    if (category.data) {
      categoryData = category.data;
      categoryCurrentPage = category.current_page;
      categoryLastPage = category.last_page;
      categoryTotal = category.total
      categoryPagesArray = createArray(categoryLastPage)
    }
  }
  
  return [categoryData, categoryCurrentPage, categoryPagesArray, categoryTotal];
}

export default useGetCategoryDetails;