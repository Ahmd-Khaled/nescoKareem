import { useState } from "react";
import Header from "../../Home/Header/Header";
import StoreSidebar from "../StoreSidebar/StoreSidebar";
import styles from "./styles.module.scss";

const StoreUI = ({ children, clickCategoryHandler }) => {
  
  return (
    <div className={styles.store}>
      <StoreSidebar clickCategoryHandler={clickCategoryHandler} />
      <div className={styles.store__container}>
        <Header customHeader={true} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default StoreUI;