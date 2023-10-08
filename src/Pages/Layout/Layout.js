import { Outlet } from "react-router-dom";
import Header from "../../Components/Home/Header/Header";
import Footer from "../../Components/Home/Footer/Footer";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <main>
      <Header />
      <>
        <Outlet />
      </>
      <Footer />
    </main>
  )
}

export default Layout;