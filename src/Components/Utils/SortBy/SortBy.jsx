import styles from "./styles.module.scss";

const SortBy = ({ sortList }) => {
  return (
    <div className={styles.sortBy}>
      <label htmlFor="sortBy" className={styles.sortLabel}>ترتيب حسب :</label>
      <select id="sortBy" className={styles.sortSelect}>
        {
          sortList.map((item, index) => (
            <option key={index} value={item.value}>{item.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default SortBy