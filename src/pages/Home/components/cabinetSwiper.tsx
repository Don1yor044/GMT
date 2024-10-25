import { useRef } from "react";
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

const items = [
  { id: 1, src: "../../Photo (1).png", title: "Экспресс лаборатория" },
  { id: 2, src: "../../Photo (2).png", title: "Лазерная терапия" },
  { id: 3, src: "../../Photot.png", title: "Операционный блок" },
  { id: 4, src: "../../Photo (3).png", title: "Новая лаборатория" },
];

const CabinetSwiper = () => {
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

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
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
                <Typography.Title level={4}>{item.title}</Typography.Title>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between mt-10">
        <div className="flex gap-3">
          <div onClick={handlePrevious}>
            <LeftButton icon={GoArrowLeft} size={20} />
          </div>
          <div onClick={handleNext}>
            <LeftButton icon={GoArrowRight} size={20} />
          </div>
        </div>
        <div className="flex gap-2">
          <SecondaryButton text="Бесплатная консультация" />
          <PrimaryButton text="Рассчитать стоимость" />
        </div>
      </div>
    </>
  );
};

export default CabinetSwiper;
