import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "antd";
import {
  LeftButton,
  PrimaryButton,
  SecondaryButton,
} from "../../../components/Buttons";

// Swiper CSS import
import "swiper/swiper-bundle.css"; // Barcha CSS
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";

const items = [
  { id: 1, src: "../../Photo (1).png", title: "ЭкспрессЛаборатория" },
  { id: 2, src: "../../Photo (2).png", title: "ЛазернаяТерапия" },
  { id: 3, src: "../../Photot.png", title: "ОперационныйБлок" },
  { id: 4, src: "../../Photo (3).png", title: "НоваяЛаборатория" },
];

const CabinetSwiper = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(20);
  const { t } = useTranslation();
  const swiperRef = useRef<any>(null); // Swiper uchun referens

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Keyingi slaydga o'tish
    }
  };
  const handlePrevious = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Oldingi slaydga o'tish
    }
  };
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setSlidesPerView(1.5);
        setSpaceBetween(10);
      } else if (width <= 960) {
        setSlidesPerView(1.5);
        setSpaceBetween(15);
      } else {
        setSlidesPerView(3);
        setSpaceBetween(20);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Dastlabki o'lchamni belgilash

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={false} // O'z navigatsiyani yoqish
        pagination={{ clickable: true }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiper referensini o'rnatish
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border rounded-xl">
              <img
                src={item.src}
                alt=""
                style={{
                  objectFit: "cover",
                  height: "500px",
                  width: "100%",
                  borderRadius: "10px 10px 0px 0px",
                }}
              />
              <div className="px-5 py-3">
                <Typography.Title level={4}>{t(item.title)}</Typography.Title>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between mt-10">
        <div className="hidden lg:flex gap-3">
          <div onClick={handlePrevious}>
            <LeftButton icon={GoArrowLeft} size={20} />
          </div>
          <div onClick={handleNext}>
            <LeftButton icon={GoArrowRight} size={20} />
          </div>
        </div>
        <div className="flex gap-2 ">
          <SecondaryButton text={t("БесплатнаяКонсультация")} />
          <PrimaryButton text={t("РассчитатьСтоимость")} />
        </div>
      </div>
    </>
  );
};

export default CabinetSwiper;
