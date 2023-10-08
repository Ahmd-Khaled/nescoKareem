// import { useEffect } from "react";
// import axios from "axios";

import { useState } from "react";
import useBestSellingProducts from "../../../hooks/products/useBestSellingProducts";
import useGetCategoryDetails from "../../../hooks/categories/useGetCategoryDetails";
import Header from "../../Home/Header/Header";
import Pagination from "../../Utils/Pagination/Pagination";
import ProductCard from "../ProductCard/ProductCard";
import StoreSidebar from "../StoreSidebar/StoreSidebar";
import styles from "./styles.module.scss";

const StoreContainer = () => {

  const getPage = (clickedPageNumber) => {
    console.log("Clicked Page Num:", clickedPageNumber)
  };

  return (
    <div className={styles.storeContainer}>
      <div className={styles.contentHeading}>
        <h3 className={styles.clickedTitle}>الأكثر مبيعا</h3>
      </div>
      <div className={styles.filteredProducts}>
        <ProductCard
          isFav={true}
          isInCart={false} 
          prodLink="/store/product/productID"
          imgUrl="/images/products/p1.png"
          title="قهوة اسبريسو حبوب 250 غرام"
          size="باكت"
          price="19.00 SR"
        />
        <ProductCard
          isFav={false}
          isInCart={false} 
          prodLink="/store/product/productID"
          imgUrl="/images/products/p2.png"
          title="قهوة تركي (خلطة خاصة) مطحون مع الهيل 250 غرام"
          size="باكت"
          price="19.00 SR"
        />
        <ProductCard
          isFav={true}
          isInCart={true} 
          prodLink="/store/product/productID"
          imgUrl="/images/products/p3.png"
          title="قهوة سعودية مع الهيل"
          size="250 جرام"
          price="250.00 SR"
        />
        <ProductCard
          isFav={false}
          isInCart={true} 
          prodLink="/store/product/productID"
          imgUrl="/images/products/p4.png"
          title="حافظة حرارية 320 مل -لون ازرق"
          size="NOS"
          price="68.00 SR"
        />
        <ProductCard
          isFav={false}
          isInCart={false} 
          prodLink="/store/product/productID"
          imgUrl="/images/products/p5.png"
          title="قهوة سريعة الذوبان أظرف"
          size="٣٠ ظرف"
          price="15.00 SR"
        />
        <ProductCard
          isFav={false}
          isInCart={false} 
          prodLink="/store/product/productID"
          imgUrl="/images/products/p6.png"
          title="حافظة حرارية 280 مل - لون اسود"
          size="NOS"
          price="68.00 SR"
        />
        <ProductCard
          isFav={false}
          isInCart={false} 
          prodLink="/store/product/productID"
          imgUrl="/images/products/p7.png"
          title="حافظة حرارية 280 مل - لون احمر"
          size="NOS"
          price="68.00 SR"
        />
      </div>
      <Pagination pageCount={10} onPress={getPage} />
    </div>
  )
}

export default StoreContainer



// ---------------------------------------------------------------------------------------------------
// import { useState } from "react";
// import useBestSellingProducts from "../../../hooks/products/useBestSellingProducts";
// import useGetCategoryDetails from "../../../hooks/categories/useGetCategoryDetails";
// import Header from "../../Home/Header/Header";
// import Pagination from "../../Utils/Pagination/Pagination";
// import ProductCard from "../ProductCard/ProductCard";
// import StoreSidebar from "../StoreSidebar/StoreSidebar";
// import styles from "./styles.module.scss";

// const StoreContainer = () => {
//   const [clickedCategory, setClickedCategory] = useState("");

//   const clickCategoryHandler = (id) => {
//     setClickedCategory(id);
//   }

//   const [categoryData, categoryCurrentPage, categoryPagesArray, categoryTotal] = useGetCategoryDetails(clickedCategory);

//   let pageNum = 1;
//   const [bestSellingData, bestSellingCurrentPage, bestSellingPagesArray, bestSellingTotal] = useBestSellingProducts(pageNum);
  

//   // console.log("bestSellingData:", bestSellingData);
  
//   return (
//     <div className={styles.store}>
//       <StoreSidebar clickCategoryHandler={clickCategoryHandler} />
//       <div className={styles.store__container}>
//         <Header customHeader={true} />
//         <div className={styles.content}>
//           <div className={styles.contentHeading}>
//             <h3 className={styles.clickedTitle}>الأكثر مبيعا</h3>
//           </div>
//           <div className={styles.filteredProducts}>
//             <ProductCard
//               isFav={true}
//               isInCart={false} 
//               prodLink="/store/product/productID"
//               imgUrl="/images/products/p1.png"
//               title="قهوة اسبريسو حبوب 250 غرام"
//               size="باكت"
//               price="19.00 SR"
//             />
//             <ProductCard
//               isFav={false}
//               isInCart={false} 
//               prodLink="/store/product/productID"
//               imgUrl="/images/products/p2.png"
//               title="قهوة تركي (خلطة خاصة) مطحون مع الهيل 250 غرام"
//               size="باكت"
//               price="19.00 SR"
//             />
//             <ProductCard
//               isFav={true}
//               isInCart={true} 
//               prodLink="/store/product/productID"
//               imgUrl="/images/products/p3.png"
//               title="قهوة سعودية مع الهيل"
//               size="250 جرام"
//               price="250.00 SR"
//             />
//             <ProductCard
//               isFav={false}
//               isInCart={true} 
//               prodLink="/store/product/productID"
//               imgUrl="/images/products/p4.png"
//               title="حافظة حرارية 320 مل -لون ازرق"
//               size="NOS"
//               price="68.00 SR"
//             />
//             <ProductCard
//               isFav={false}
//               isInCart={false} 
//               prodLink="/store/product/productID"
//               imgUrl="/images/products/p5.png"
//               title="قهوة سريعة الذوبان أظرف"
//               size="٣٠ ظرف"
//               price="15.00 SR"
//             />
//             <ProductCard
//               isFav={false}
//               isInCart={false} 
//               prodLink="/store/product/productID"
//               imgUrl="/images/products/p6.png"
//               title="حافظة حرارية 280 مل - لون اسود"
//               size="NOS"
//               price="68.00 SR"
//             />
//             <ProductCard
//               isFav={false}
//               isInCart={false} 
//               prodLink="/store/product/productID"
//               imgUrl="/images/products/p7.png"
//               title="حافظة حرارية 280 مل - لون احمر"
//               size="NOS"
//               price="68.00 SR"
//             />
//           </div>
//           <Pagination />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default StoreContainer






// const config = {
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     // 'Access-Control-Allow-Origin': '*, http://localhost:3000',
//     'api_password': '123456',
//     'language': 'ar',
//     'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbmVzdHJldHRvY29mZmVlLmNvbVwvZGFzaGJvYXJkXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjk0MzQ3MzQ1LCJuYmYiOjE2OTQzNDczNDUsImp0aSI6IlQzTVNPUWxMYzJSQjJnNVYiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.v7Gq54GCYnHtRxdz0hIGcGHQK7zFr7WyC3__jsljBe0'
//   }
// }

// useEffect(() => {
//   const get = async () => {
//     const response = await axios.get("https://nestrettocoffee.com/dashboard/api/categories", config);
//     console.log("====response====", response)
//   }
//   get();
// }, [])