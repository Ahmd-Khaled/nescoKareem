import { useTranslation } from "react-i18next";
import useGetFaqs from "../../hooks/faqs/useGetFaqs";
import FaqsCard from "./FaqsCard/FaqsCard";
import styles from "./styles.module.scss";
import { useState } from "react";


const faqsList = [
  {
    id: "1",
    question: "ماهو  سبب تغیير مسمى العلامة التجارية  ؟",
    answer: "تم تغيير الاسم التجاري لأسباب قانونية و لتطوير العلامة التجارية ,ولكن مازالت قهوتنا بجودة عالية ومطورة.   "
  },
  {
    id: "2",
    question: "متى تم افتتاح العلامة التجارية ؟",
    answer: "متواجدين معكم منذ 1992 م."
  },
  {
    id: "3",
    question: "هل بارنز شركة سعودية ؟",
    answer: "نعم ,نحن نفتخر بأننا شهدنا سنوات طوال في تطور المملكة وانتشار المقاهي كنا فيها اول مقهى يملك خدمة سيارات واحد اوائل العلامات التجارية المحلية للقهوه."
  },
  {
    id: "4",
    question: "ماهو الفرق بين بارنز و بارنز اكس ؟",
    answer: "بارنز اكس هو علامة تجارية فرعية تختص بتقديم القهوة المختصة وتحتوي على بيئة مناسبة لاجتماعات العمل والاسترخاء وتجمعات العائلة والأصدقاء. "
  },
  {
    id: "5",
    question: "ماهو البن االذي يستخدم لتحضير المشروبات في فروع بارنز؟",
    answer: "يتم استخدام بن حبوب الكابتشينو."
  },
];

const Faqs = () => {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(null);
  
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    
    setSelected(i);
  }
  
  const [faqsData, isLoading, error] = useGetFaqs();
  console.log("faqsData: ", faqsData);

  return (
    <section className={styles.faqs}>
      <div className={styles.faqs__container}>
        <div className="pageTitle">
          <h2>{t("faqs-faqs-title")}</h2>
        </div>
        <form className={styles.searchQuesForm}>
          <label htmlFor="searchQues">{t("faqs-faqs-label")}</label>
          <div className={styles.searchBox}>
            <input id="searchQues" placeholder={t("faqs-faqs-placeholder")} />
            <button className={styles.searchBtn}>{t("faqs-faqs-searchBtn")}</button>
          </div>
        </form>
        <ul className={styles.faqsList}>
          {
            faqsList.map((item, index) => (
              <FaqsCard
                key={item.id} 
                item={item}
                index={index}
                toggle={toggle}
                selected={selected}
              />
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Faqs