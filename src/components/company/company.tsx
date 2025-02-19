import { Col, Row, Typography } from "antd";
import { LeftButton, PrimaryButton } from "../buttons/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef } from "react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { useTranslation } from "react-i18next";

export const HomeCompany = () => {
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
      date: "07.11.2022",
      src: "../homeCompany/Rectangle (69).png",
      title: "Название новости",
      desc: "НовостиДеск",
    },
    {
      id: 2,
      date: "07.11.2022",
      src: "../homeCompany/Rectangle (70).png",
      title: "Название новости",
      desc: "НовостиДеск",
    },
    {
      id: 3,
      date: "07.11.2022",
      src: "../homeCompany/Rectangle (71).png",
      title: "Название новости",
      desc: "НовостиДеск",
    },
    {
      id: 4,
      date: "07.11.2022",
      src: "../homeCompany/Rectangle (72).png",
      title: "Название новости",
      desc: "НовостиДеск",
    },
  ];
  return (
    <div className="px-4 lg:ps-14 md:px-5 xs:px-4 sm:px-4 mt-24">
      <Row gutter={[20, 20]}>
        <Col xl={6} md={24}>
          <div className="flex justify-between items-center">
            <div>
              <Typography.Title level={2}>
                {t(`Новости`)} <br /> {t(`компании`)}
              </Typography.Title>
            </div>
            <div className="hidden xl:hidden md:flex h-10">
              <PrimaryButton text={t(`ВсеНовости`)} />
            </div>
          </div>
        </Col>

        <Col xl={18} md={24}>
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={3.2}
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },
              640: {
                slidesPerView: 2.5, // 640px dan kichik ekranlarda 1 slayd
              },
              768: {
                slidesPerView: 3, // 768px dan kichik ekranlarda 2 slayd
              },
              1024: {
                slidesPerView: 3.2, // 1024px dan katta ekranlarda 3 slayd
              },
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="border rounded-xl">
                  <div className="bg-white rounded-tl-xl rounded-tr-xl flex justify-center h-80">
                    <img
                      src={item.src}
                      alt=""
                      className="rounded-tr-xl rounded-tl-xl h-[100%] object-cover w-[100%]"
                    />
                  </div>
                  <div className="p-2 md:px-5 mp:px-1  border-t-2 rounded-b-xl bg-[#F8F7F3] ">
                    <Typography className="!m-0 text-gray-500">
                      {item.date}
                    </Typography>
                    <Typography.Title level={4} className="!m-0">
                      {t(item.title)}
                    </Typography.Title>
                    <Typography.Title level={5} className="!text-[#7a7687d0]">
                      {t(item.desc)}
                    </Typography.Title>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="flex justify-between mt-10 pr-10 ">
              <div className="hidden xl:flex gap-3">
                <div onClick={handlePrevious}>
                  <LeftButton icon={GoArrowLeft} size={20} />
                </div>
                <div onClick={handleNext}>
                  <LeftButton icon={GoArrowRight} size={20} />
                </div>
              </div>
              <div className="xl:flex md:hidden lg:hidden ">
                <PrimaryButton text={t(`ВсеНовости`)} />
              </div>
            </div>
          </Swiper>
        </Col>
      </Row>
    </div>
  );
};
