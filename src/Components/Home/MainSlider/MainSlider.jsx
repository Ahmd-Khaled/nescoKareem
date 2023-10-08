import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./styles.module.scss";
import { useTranslation } from 'react-i18next';

const slidesArray = [
  {
    id: "4",
    pic: "4-slider.jpeg"
  },
  {
    id: "5",
    pic: "5-slider.jpeg"
  },
  {
    id: "6",
    pic: "6-slider.jpeg"
  },
  {
    id: "7",
    pic: "7-slider.jpeg"
  },
  {
    id: "8",
    pic: "8-slider.jpeg"
  },
  {
    id: "9",
    pic: "9-slider.jpeg"
  },
]

const MainSlider = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className={styles.mainSlider}>
      <div className={styles.mainSlider__container}>
        <h2 className={styles.title}>{t("home-productSlider-ourProducts")}</h2>
        <div className={styles.carouselWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              450: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className={styles.mySwiper}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {
              slidesArray ? (
                slidesArray.map((slide, index) => (
                  <SwiperSlide key={slide.id}>
                    <div className={styles.sliderImage}>
                      <img src={process.env.PUBLIC_URL + `/images/MainSlider/${slide.pic}`} alt={`Slide-${slide.id}`} />
                    </div>
                  </SwiperSlide>
                ))
              ) : <p>No Images Found</p>
            }
          </Swiper>
        </div>
        <button className={styles.discoverBtn}>
          <a href="/store">{t("home-productSlider-shopAllProducts")}</a>
        </button>
      </div>
    </section>
  )
}

export default MainSlider