import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import styles from "./styles.module.scss";

const ProductCard = ({ isFav, isInCart, prodLink, imgUrl, title, size, price }) => {
  return (
    <div className={styles.prodCard}>
      <div className={styles.prodCard__container}>
        <a className={styles.cartLink} href={prodLink}>
          <div className={styles.innerCard}>
            <div className={styles.image}>
              <img src={process.env.PUBLIC_URL + imgUrl ? imgUrl : "/images/no-image.png"} alt="product_img" />
            </div>
            <div className={styles.prodDetails}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.size}>{size}</p>
              <h3 className={styles.price}>{price}</h3>
            </div>
          </div>
        </a>
        <div className={styles.addBtns}>
          <button className={isFav ? styles.addToFavClicked : styles.addToFav}>
            <FiHeart />
          </button>
          <button className={isInCart ? styles.addToCardClicked : styles.addToCard}>
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;