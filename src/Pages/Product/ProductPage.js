import { useState } from 'react';
import Product from '../../Components/Store/Product/Product'
import StoreUI from '../../Components/Store/StoreUI/StoreUI'

const ProductPage = () => {
  const [clickedCategory, setClickedCategory] = useState("");

  const clickCategoryHandler = (id) => {
    setClickedCategory(id);
  }

  return (
    <StoreUI clickCategoryHandler={clickCategoryHandler}>
      <Product />
    </StoreUI>
  )
}

export default ProductPage