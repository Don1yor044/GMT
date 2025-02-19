import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
export const HomeClient = () => {
  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      title: "Медицина компетенций",
      imgSrc: "../client/image 223 (2).png",
    },
    {
      id: 2,
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      imgSrc: "../client/image 221.png",
    },
    {
      id: 3,
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      imgSrc: "../client/image 222.png",
    },
    {
      id: 4,
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      imgSrc: "../client/image 224.png",
    },
    {
      id: 5,
      title: "НМИЦ онкологии им. Н.Н. Блохина",
      imgSrc: "../client/image 221.png",
    },
  ];

  return (
    <div className="mt-24 bg-[#E5E4ED] py-24">
      <div className="px-5 lg:px-12 xl:px-14 md:px-10 ">
        <Row gutter={[20, 20]}>
          <Col md={12} xs={24}>
            <Typography.Title level={2}>{t(`НашиКлиенты`)}</Typography.Title>
          </Col>
          <Col md={12} xs={24}>
            <Typography className="text-3xl md:text-5xl">
              {t("БОЛЕЕ")}
              <span className="text-[#088269]"> 5000 </span> <br />{" "}
              {t("УСПЕШНЫХПРОЕКТОВ")}
            </Typography>
          </Col>
        </Row>
      </div>

      <div className="!mt-20 px-2">
        <Row gutter={[10, 20]}>
          <Col span={24}>
            <Swiper
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 3000, // 3 soniyada bitta slayd o‘tadi
                disableOnInteraction: false, // foydalanuvchi sutilganda avtomatik o'tishni to'xtatmaydi
                pauseOnMouseEnter: false, // sichqoncha ustida bo'lsa ham davom etadi
              }}
              breakpoints={{
                340: {
                  slidesPerView: 1.5, // 640px dan kichik ekranlarda 1 slayd
                },
                640: {
                  slidesPerView: 2.5, // 640px dan kichik ekranlarda 1 slayd
                },
                768: {
                  slidesPerView: 3.5, // 768px dan kichik ekranlarda 2 slayd
                },
                1024: {
                  slidesPerView: 4.5, // 1024px dan katta ekranlarda 3 slayd
                },
              }}
            >
              {items.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="border rounded-xl">
                    <div className="bg-white rounded-tl-xl rounded-tr-xl flex justify-center">
                      <img
                        src={item.imgSrc}
                        alt=""
                        className="rounded-tr-xl rounded-tl-xl h-[200px] w-auto max-w-[65%] object-contain m-auto"
                      />
                    </div>
                    <div className="p-3 xl:p-5 lg:p-4 md:p-3 px-7 border-t-2 rounded-b-xl bg-[#F8F7F3] min-h-24 max-h-24">
                      <Typography.Title level={5}>
                        {t(item.title)}
                      </Typography.Title>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </div>
    </div>
  );
};
