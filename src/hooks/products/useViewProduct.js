import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createArray } from "../../utils/usefulFunctions";
import { getViewProduct } from "../../redux/thunkActions/productsActions";


const useViewProduct = (prodId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getViewProduct(prodId));
    }

    run();
  }, []);

  

  const { viewProduct, isLoading, error } = useSelector(state => state.ProductsSlice);

  let status;
  let errorNumber;
  let productData = {};
  let productDetails = {};
  let productInCart = null;

  if (viewProduct.status) {
    status = viewProduct.status;
    errorNumber = viewProduct.errorNumber;
    status = viewProduct.status;
    productData = viewProduct.data;
    productDetails = viewProduct.product_details;
    productInCart = viewProduct.product_in_cart;
  } else {
    status = viewProduct.status;
    errorNumber = viewProduct.errorNumber;
  }


  
  return [status, errorNumber, productData, productDetails, productInCart];
}
export default useViewProduct;