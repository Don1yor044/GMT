import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "antd";
import { LeftButton, PrimaryButton, SecondaryButton } from "../buttons/index";

// Swiper CSS import
import { Swiper as SwiperClass } from "swiper";
import "swiper/swiper-bundle.css"; // Barcha CSS
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";

const items = [
  { id: 1, src: "../../Photo (1).png", title: "ЭкспрессЛаборатория" },
  { id: 2, src: "../../Photo (2).png", title: "ЛазернаяТерапия" },
  { id: 3, src: "../../Photot.png", title: "ОперационныйБлок" },
  { id: 4, src: "../../Photo (3).png", title: "НоваяЛаборатория" },
];
export const CabinetSwiper = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(20);
  const { t } = useTranslation();
  const swiperRef = useRef<SwiperClass | null>(null); // Swiper uchun referens

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
    <div className="mt-24">
      <Typography.Title level={2} className="!mb-10">
        {t(`КомплексноеОснащениеКабинетов`)}
      </Typography.Title>
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
                className="mp:h-[400px] lg:h-[500px] object-cover w-[100%] rounded-t-md"
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
        <div className="flex gap-2 lg:h-10 mp:h-10 mp:text-xs  sm:text-sm">
          <SecondaryButton text={t("БесплатнаяКонсультация")} />
          <PrimaryButton text={t("РассчитатьСтоимость")} />
        </div>
      </div>
    </div>
  );
};
