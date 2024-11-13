import { Col, Row, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef } from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import { t } from "i18next";
import { LeftButton } from "../buttons";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation]);

const Sertifikat = () => {
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
      src: "../Sertifikat.png",
    },
    {
      id: 2,
      src: "../Sertifikat.png",
    },
    {
      id: 3,
      src: "../Sertifikat.png",
    },
    {
      id: 4,
      src: "../Sertifikat.png",
    },
    {
      id: 5,
      src: "../Sertifikat.png",
    },
    {
      id: 6,
      src: "../Sertifikat.png",
    },
  ];
  return (
    <div className="px-3 xl:ps-14 lg:ps-8 md:ps-5 sm:px-4 mt-24 md:py-12 mp:py-5">
      <Row gutter={[20, 20]}>
        <Col xl={6} xs={24}>
          <div>
            <Typography.Title level={2}>
              {t(`Сертификаты`)} <br /> {t(`наПродукцию`)}
            </Typography.Title>
          </div>
        </Col>
        <Col xl={18} xs={24}>
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={4.6}
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 2.3, // 640px dan kichik ekranlarda 1 slayd
              },
              640: {
                slidesPerView: 3.3, // 640px dan kichik ekranlarda 1 slayd
              },
              768: {
                slidesPerView: 4, // 768px dan kichik ekranlarda 2 slayd
              },
              1024: {
                slidesPerView: 4.6, // 1024px dan katta ekranlarda 3 slayd
              },
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rounded-tl-xl rounded-tr-xl flex justify-center bg-white p-3">
                  <img
                    src={item.src}
                    alt=""
                    className="rounded-tr-xl rounded-tl-xl"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
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
            </div>
          </Swiper>
        </Col>
      </Row>
    </div>
  );
};

export default Sertifikat;
