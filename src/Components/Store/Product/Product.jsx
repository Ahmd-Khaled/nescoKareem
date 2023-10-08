import { FiHeart } from "react-icons/fi";
import { BiMinus, BiPlus } from "react-icons/bi";
import styles from "./styles.module.scss";
import ImageSlider from "../../Utils/ImageSlider/ImageSlider";
import useViewProduct from "../../../hooks/products/useViewProduct";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProductComments from "../ProductComments/ProductComments";

const prodImagesList = [
  {
    img: "01.png",
  },
  {
    img: "02.png",
  },
  {
    img: "03.png",
  },
];

const Product = () => {
  const { t, i18n } = useTranslation();
  const { prodId } = useParams();
  console.log("prodId:===", prodId)
  const [status, errorNumber, productData, productDetails, productInCart] = useViewProduct(prodId);

  console.log("productData:___", productData)

  return (
    <div className={styles.productWrapper}>
      <div className={styles.productWrapper__container}>
        <div className={styles.productCategory}>
          <h3 className={styles.categoryTitle}>قهوة بارنز مطحونة</h3>
        </div>
        <div className={styles.prodContent}>
          <div className={styles.prodImgSlider}>
            {/* <img src={process.env.PUBLIC_URL + "/images/productSlider/02.png"} alt="" /> */}
            <ImageSlider imagesList={prodImagesList} />
          </div>
          <div className={styles.prodDetails}>
            <h1 className={styles.tilte}>قهوة تركي (خلطة خاصة) مطحون مع الهيل 250 غرام</h1>
            <p className={styles.smallTitle}>باكت</p>
            <h6 className={styles.features}>{t("store-product-features")}</h6>
            <hr />
            <h2 className={styles.desc}>حبوب القهوة المحمصة والطازجة مطحونة بجودة عالية يتم تصنيعها وتغليفها بكل حب  </h2>
            <p className={styles.smallTitle}>{t("store-product-size")}</p>
            <div className={styles.qty}>250G</div>
            <div className={styles.price}>
              <span>{t("store-product-unitPrice")}</span>
              <span>19.00</span>
              <span>{t("store-product-SR")}</span>
            </div>
            <div className={styles.setQty}>
              <div>
                <BiMinus />
              </div>
              <div>1</div>
              <div>
                <BiPlus />
              </div>
            </div>
            <div className={styles.totalPrice}>
              <div className={styles.text}>
                <span>{t("store-product-total")}</span>
                <span>19.00</span>
                <span>{t("store-product-SR")}</span>
              </div>
              <p className={styles.tax}>{t("store-product-VAT")}</p>
            </div>
            <div className={styles.addBtns}>
              <button className={styles.addToCart}>{t("store-product-addToCart")}</button>
              <button className={styles.addToFav}>
                <FiHeart />
              </button>
            </div>
          </div>
        </div>
        {/* -----------Comments---------------- */}
        <div className={styles.productTabs}>
          <div className={styles.productTabs__head}>
            <h3 className={styles.tab}>تقييمات المنتج</h3>
          </div>
          <div className={styles.productTabs__body}>
            <ProductComments />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;