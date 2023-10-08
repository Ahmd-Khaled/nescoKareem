import { FaChevronLeft } from "react-icons/fa6"
import styles from "./styles.module.scss";
import HeaderIcons from "../../Home/HeaderIcons/HeaderIcons";
import { useState } from "react";
import StoreSideMenuBTN from "../StoreSideMenuBTN/StoreSideMenuBTN";
import useGetAllCategories from "../../../hooks/categories/useGetAllCategories";
import { useTranslation } from "react-i18next";

const StoreSidebar = ({ clickCategoryHandler }) => {
  const { t, i18n } = useTranslation();
  const [categoriesData, categoriesCurrentPage, categoriesPagesArray, categoriesTotal] = useGetAllCategories();

  // console.log("categoriesData:", categoriesData);

  const [showStoreSideMenu, setShowStoreSideMenu] = useState(false);

  const storeSideMenuHandler = () => {
    setShowStoreSideMenu(!showStoreSideMenu);
  }

  return (
    <aside
      className={showStoreSideMenu ? styles.storeSidebarVisible : styles.storeSidebar}
      style={i18n.dir() === "rtl" ? { right: 0} : { left: 0}}
    >
      <StoreSideMenuBTN storeSideMenuHandler={storeSideMenuHandler}  />
      <div className={styles.container}>
        <div className={styles.head}>
          <a className={styles.storeLink} href="/store">{t("store-sidebar-store")}</a>
          <HeaderIcons customHeader={true} />
        </div>
        <div className={styles.search}>
          <form className={styles.searchForm}>
            <div className={styles.inputBox}>
              <input type="text" placeholder={t("store-sidebar-search")} />
              <button>Go</button>
            </div>
          </form>
        </div>
        <ul className={styles.linksList}>
          <li className={styles.listItem}>
            <a href="/store/best-seller" style={i18n.dir() === "rtl" ? {backgroundPosition: "right"} : {backgroundPosition: "left"}}>
              <span>{t("store-sidebar-bestSeller")}</span>
              <FaChevronLeft />
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="/store/special-offers" style={i18n.dir() === "rtl" ? {backgroundPosition: "right"} : {backgroundPosition: "left"}}>
              <span>{t("store-sidebar-specialOffers")}</span>
              <FaChevronLeft />
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="/store/popular-categories" style={i18n.dir() === "rtl" ? {backgroundPosition: "right"} : {backgroundPosition: "left"}}>
              <span>{t("store-sidebar-popularCategories")}</span>
              <FaChevronLeft />
            </a>
          </li>
        </ul>
        <div className={styles.allCategory}>
          <h2 className={styles.title}>
            <a href="store/all-categories">{t("store-sidebar-allCategories")}</a>
          </h2>
        </div>
        <ul className={styles.linksList}>
          <li className={styles.listItem}>
            <a href={`/store/category/1`} style={i18n.dir() === "rtl" ? {backgroundPosition: "right"} : {backgroundPosition: "left"}}>
              <span>قهوة بارنز حبوب</span>
              <FaChevronLeft />
            </a>
          </li>
          <li className={styles.listItem}>
            <a href={`/store/category/1`} style={i18n.dir() === "rtl" ? {backgroundPosition: "right"} : {backgroundPosition: "left"}}>
              <span>قهوة بارنز مطحونة</span>
              <FaChevronLeft />
            </a>
          </li>
          <li className={styles.listItem}>
            <a href={`/store/category/1`} style={i18n.dir() === "rtl" ? {backgroundPosition: "right"} : {backgroundPosition: "left"}}>
              <span>قهوة بارنز علب معدنية</span>
              <FaChevronLeft />
            </a>
          </li>
          <li className={styles.listItem}>
            <a href={`/store/category/1`} style={i18n.dir() === "rtl" ? {backgroundPosition: "right"} : {backgroundPosition: "left"}}>
              <span>قهوة بارنز أظرف</span>
              <FaChevronLeft />
            </a>
          </li>
          <li className={styles.listItem}>
            <a href={`/store/category/1`} style={i18n.dir() === "rtl" ? {backgroundPosition: "right"} : {backgroundPosition: "left"}}>
              <span>بارنز إضافات</span>
              <FaChevronLeft />
            </a>
          </li>
          <li className={styles.listItem}>
            <a href={`/store/category/1`} style={i18n.dir() === "rtl" ? {backgroundPosition: "right"} : {backgroundPosition: "left"}}>
              <span>إكسسوارات</span>
              <FaChevronLeft />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default StoreSidebar