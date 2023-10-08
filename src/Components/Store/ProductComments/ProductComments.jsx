import SortBy from "../../Utils/SortBy/SortBy";
import AddComment from "../AddComment/AddComment";
import ProductComment from "../ProductComment/ProductComment";
import styles from "./styles.module.scss";

const sortList = [
  {
    id: "1",
    name: "الأحدث",
    value: "new",
  },
  {
    id: "2",
    name: "الاقدم",
    value: "old",
  },
  {
    id: "3",
    name: "الاكثر تقييما",
    value: "highestRate",
  },
  {
    id: "4",
    name: "الاقل تقييما",
    value: "lowestRate",
  },
];

const ProductComments = () => {
  return (
    <div className={styles.prodComments}>
      <AddComment />
      <div className={styles.prodComments__commContainer}>
        <div className={styles.sortComments}>
          <h3 className={styles.title}>تعليقات المستخدمين</h3>
          <SortBy sortList={sortList} />
        </div>
        <div className={styles.commentsWrapper}>
          <ProductComment />
          <ProductComment />
          <ProductComment />
          <ProductComment />
          <ProductComment />
          <ProductComment />
          <ProductComment />
        </div>
        <button className={styles.showMoreCommBtn}>عرض المزيد</button>
      </div>
    </div>
  )
}

export default ProductComments