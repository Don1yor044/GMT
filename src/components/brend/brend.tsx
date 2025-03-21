import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef } from "react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { LeftButton, PrimaryButton } from "components";
import { useTranslation } from "react-i18next";

export const HomeBrand = () => {
  const { t } = useTranslation();
  const swiperRef = useRef<SwiperCore | null>(null);

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
  const items = [
    {
      id: 1,
      src: "../brand/cropped.png",
      title: "CRAGHOPPERS",
    },
    {
      id: 2,
      src: "../brand/Без5.png",
      title: "ZAMBERLAN",
    },
    {
      id: 3,
      src: "../brand/custom-logo 2.png",
      title: "THERMACELL",
    },
    {
      id: 4,
      src: "../brand/Без5.png",
      title: "ZAMBERLAN",
    },
  ];
  return (
    <div className="px-3 xl:ps-14 lg:ps-8 md:ps-5 sm:px-4 mt-24 py-12">
      <Row gutter={[20, 20]}>
        <Col xl={6} xs={24}>
          <div className="flex justify-between items-center">
            <div>
              <Typography.Title level={2}>{t(`Бренды`)}</Typography.Title>
              <div className=" text-gray-500 text-lg ">
                <Link to={"/"}>{t(`Эксклюзивные поставщики`)}</Link>
              </div>
            </div>
            <div className="hidden xl:hidden md:flex h-10">
              <PrimaryButton text={t("Сертификаты")} />
            </div>
          </div>
        </Col>
        <Col xl={18} xs={24}>
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={4.5}
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1, // 640px dan kichik ekranlarda 1 slayd
              },
              640: {
                slidesPerView: 2, // 640px dan kichik ekranlarda 1 slayd
              },
              768: {
                slidesPerView: 3, // 768px dan kichik ekranlarda 2 slayd
              },
              1024: {
                slidesPerView: 3, // 1024px dan katta ekranlarda 3 slayd
              },
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="border rounded-xl">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl flex justify-center">
                    <img
                      src={item.src}
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl h-[200px] w-auto max-w-[65%] object-contain m-auto"
                    />
                  </div>
                  <div className="p-5 px-7 border-t-2 rounded-b-xl bg-[#F8F7F3]">
                    <Typography.Title level={5}>{item.title}</Typography.Title>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="flex justify-between mt-10 pr-10">
              <div className="hidden xl:flex gap-3">
                <div onClick={handlePrevious}>
                  <LeftButton icon={GoArrowLeft} size={20} />
                </div>
                <div onClick={handleNext}>
                  <LeftButton icon={GoArrowRight} size={20} />
                </div>
              </div>
              <div className="xl:flex md:hidden lg:hidden ">
                <PrimaryButton text={t("Сертификаты")} />
              </div>
            </div>
          </Swiper>
        </Col>
      </Row>
    </div>
  );
};
