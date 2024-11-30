import { Col, Row, Typography } from "antd";
import { LeftButton, PrimaryButton } from "../buttons/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef } from "react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { t } from "i18next";

export const HomeCompany = () => {
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
      src: "https://s3-alpha-sig.figma.com/img/1c6d/378f/39f9376dda513323d7daee846be582b1?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jXmwfN7CbV2JGK-NrjxDUP7CDYckvk5hth65vCWEOegZ0f5cWGi0Ks2B25qjvLx10Ic8DuQb7ohIXlmDAlchehNODHC2C8JqJ9rW8VEydNg6gSZ7SDA-AbVFPxQV-u3jEPhS70WpVUEOYJcGT50iMJ4ZCQsSjAaDwgYkKOPmSihqB1WerT0RQic3WdV68NWwJaS2-WPzhl~anAaYyi-H1xpGX88sL~boujVikz0VLnzicwJ2buIOA~9EqiRHX0n~xuzXAJANl3Tk2TD9p-I9stNmaf2uF4HXTltRqVoHsmjhwKJwazUNlhm5opZFHeofXxvDO8X1-amvgZ-28Fj9NQ__",
      title: "Название новости",
      desc: "НовостиДеск",
    },
    {
      id: 2,
      date: "07.11.2022",
      src: "https://s3-alpha-sig.figma.com/img/f1e7/cad9/878405bf2b9bbcc283b9411831ed6c67?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jy4YOgskKfi8erqxEqqbkAIJmiW-LAi1nZwCQrgrUZy8X5C~64ExUGGndZnzcvd6dzt6fu9sffEKjw83~HkYiKXrCZ57rd4zZev2PXCYoBqBl8TLJR0hRlJtqfZMHG6ZZJ4MgWzUKXp4zKLoScWYuya9KtnMkM7DmLzXWNOG0dn0g6zm9ATYk7UbqWUQ-x4XYjaNB~qoU2mRllWfuhbaWJCGDCUBePUARCcWu~a7pGyO7Rg7P~uSHFFJeXAtZb82uXLvwpLwZ-mjGJDM~AmgbbFekcJ5NymwJmsbBdmBekZi0si2m63QUz3cNs8Dzd9FiV32RjqHY19fSGogks1mHA__",
      title: "Название новости",
      desc: "НовостиДеск",
    },
    {
      id: 3,
      date: "07.11.2022",
      src: "https://s3-alpha-sig.figma.com/img/2290/3fc0/850a0506ebee40fc32b9aa4c17fc06df?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fPon3yQxRDVomTkBYfGaUAqOjY2T3aSHfQUEWPXBBpESUJamLS9lgdRlJr-tjvo2~qbdw1lNIArRUENhtaCiaKRnWzQ5DX~Mq7NFGuk2QPUozLvyMWrRZzAe~B3rBMo0VJRVNrgO~H5qLiInESzGqCb6KofvsKylJ7NRRYA~uBOQNKFgVAABnndbksoat-wJir36O-OjwIRaMnGWIp1GsC3HYzYG0Q5PDvocH8-KtbRjR3-04paMHsVBIHZlJVmaG~uF9hIbIqaUyVOLM4p-SP-hOT1uw8Z7cqx-F2FMtZAcDLCrIb445yJ1nT4b0BJoSrBItnyWRiFVohQFWfgN4g__",
      title: "Название новости",
      desc: "НовостиДеск",
    },
    {
      id: 4,
      date: "07.11.2022",
      src: "https://s3-alpha-sig.figma.com/img/104b/442a/48b2eec91524857712b5efd185d80cf5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HyuFudC02WOJxWTw0TNAEWfhiC1~Fp3ZI3fQJGNJv7ZbA2YqH~Xv-AacYoX1KqE6otiJDvuCylTSG04HZ54l0mnyknqQ1k3NqyybuUNsotFmguBQk0lacVvk21AE-cakrIssUx79ILxKR9HH-uaB0COD3YkmOQUHeXoGPstO9hMHJwSDplMMDnqa-chL9DP4CnJ2FOoJi98A7IhhMRDT0bwQJt3fyV-TOrkTeuXedFS9RjByKKRBS~ZxXWgCiG58KxRo-zJG8yh0crklYvUuHWdx6J0bZ~g5dxmaZDPJtE2YvHnmF7~cCX6aHa5xm-n0uAN~DYe-VkciHv8vMeTRSA__",
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
