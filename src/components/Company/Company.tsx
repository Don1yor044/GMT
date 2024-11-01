import styled from "@emotion/styled";
import { Col, Row, Typography } from "antd";
import { LeftButton, PrimaryButton } from "../Buttons/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef } from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { t } from "i18next";

SwiperCore.use([Navigation]);

const HomeCompany = () => {
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
      src: "https://s3-alpha-sig.figma.com/img/1c6d/378f/39f9376dda513323d7daee846be582b1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z6eeRvyW7gmaF3ctxXpd~PBlQE5wlvNgD1RtvtLMQI2jRFr~tfILoezCem07E1ZrHxwgoG1hPWYodzF9LckETiQu5uCKqRJrHdMfZi6rvnJmUC6n1NM7kaAO8yH96MhrIIpfw4vFT0JdFkfA2mkcH-l5lAaGVr9NnJ5wFvLly8eomny67WBMkuUDJdxs2OOperLu-~74QtWa6eVTd37sw0tFCODL6EL3~ivmScG6lF3MRxxiumHPMEJNkdCX7wdKbFNcyMSobd2hhaiESV31wOyApEo1EVhie00Kfsg4otcDjxjD7d0FpCN7wbtLC0p32A8QbWGB7U9lfFkwvMlqmw__",
      title: "Название новости",
      desc: "НовостиДеск",
    },
    {
      id: 2,
      date: "07.11.2022",
      src: "https://s3-alpha-sig.figma.com/img/f1e7/cad9/878405bf2b9bbcc283b9411831ed6c67?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SckW5eannvOa2PINeQ~qOTz80dLRHH75sj3R3CnuXWlgTcoL3ENnEbRrNrToCBaGr85Smg5~83gQQcwbjjmb2xos5vMDpHeYdyQONS7ji1KlfOg8ydtoV~xH0M~UPod~NG21~1VwD2B9LAS1~d9J1w7e1-FdjIopvfCEzHyPaNMGKx6TAdZDxiAHjZ5GgPo6kA~JJAlOR00XQbiT-OiGKBGlc5Meg9298ZmSCaHQYYKK4ESlm2Qc6XsqJWtB9Tn1qVIV9VukMA~Mwv8rfKDGs9hrXduEDKkc1p~VCb5an3EM5dzUM45vlumX2o2c5DKY0U8OQIOz23r-3LYzcdIWDQ__",
      title: "Название новости",
      desc: "НовостиДеск",
    },
    {
      id: 3,
      date: "07.11.2022",
      src: "https://s3-alpha-sig.figma.com/img/2290/3fc0/850a0506ebee40fc32b9aa4c17fc06df?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hyp8W-O-3E8yDcKyoVolEt4U0DyzdO5Fb9cX~iWunAOoA7MTFnhbrL-P1XeIp2w9toEQ82eZWugwsSRO7Kk34Q~5aAwc2MTvXtTr71OaeZj-0py31Q~g0t3hfPTHrgNGEQ0xOiA8AtW7PyZdrG6BmJSmmnBW75QUB1fulMaY6oyJQInSohzuzNQRJ0GOFFKtutgc1Je3SWw2j~o-0G1~vZg1l~cOGpK37dBW2pWg1RHZpVEBTWgUmmsYyKX8rqDCnm-uLh~fYdZkjtLuPSaxtUxZbQ5NewBW289985w7E7-II6F2xGjXpdo985yn3Qy7y5FOqnN7gqfFy4Nq4rPuxw__",
      title: "Название новости",
      desc: "НовостиДеск",
    },
    {
      id: 4,
      date: "07.11.2022",
      src: "https://s3-alpha-sig.figma.com/img/104b/442a/48b2eec91524857712b5efd185d80cf5?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZwAqgw-ZQI8I3G5oIQj0yec0sVfhL1x~qrQxN~RxTFin4rVKyZZk3~3zB5Y~TsDlq~ALZ5c269JtczOpGxkB0K8XAuRD8h-HGWC01G-w4XpiMJQyhiOyh0uLCJ~P8dsfCRZUrRcDSknSJXBZtwFKuV7I1uYsHqfqzZhuDEqhuxBLoR-3RbezkiEjwa4ffGwpneVii27cb0zoxukzd4cuy89KgY1rxbQ44Hos64Lcz6vPzhM50BM8BTLXHiTByg5YgMp3LMMvw6ElogoqEMZ~zsfEa2j28QQuWPW4UWoZpLzbrxF7UU3MZEI-o4iO4hx9sOMVCX7egw7Yd4v4y4jHg__",
      title: "Название новости",
      desc: "НовостиДеск",
    },
  ];
  return (
    <div className="px-2 lg:ps-14 md:px-5 xs:px-4 sm:px-2 mt-24">
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
                      className="rounded-tr-xl rounded-tl-xl"
                      style={{
                        height: "100%",
                        objectFit: "cover",
                        width: "100%",
                      }}
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
                <PrimaryButton text={t(`ВсеНовости`)} />
              </div>
            </div>
          </Swiper>
        </Col>
      </Row>
    </div>
  );
};

export default HomeCompany;

const StyledButton = styled.button`
  background-color: #448c7e2f;
  color: #088269;
  border: 1px solid #088269;
  padding: 1px 8px;
  border-radius: 50px;
`;
