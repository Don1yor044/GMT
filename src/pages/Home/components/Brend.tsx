import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { LeftButton, PrimaryButton } from "../../../components/Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef } from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const HomeBrand = () => {
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
      src: "https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOX~oDO1JcV~gymn6NIC5bXSHVqzYDxoqjGazEOkQULUfjY2HWqKkP90I~4VenR6JksMWDVhltyFF~4dgqw9Nis-54GbWsU1ffezcjEpcztIqtTQNArrD6Gje3eLG5gXCcM88cbd7gEXu38VVSRMatyEevgHNbVYjhDKCK8raotBEI9sJ5O8wNMtuKr03a2zWouXHoOcMPwQkGmuRHmGeddoqhX5UtbMh4AgHuaysjtP2RI8Twd~d4dL35urQ9TAdbK~rWgLAcZFnV1RjomaAfLPFWoYnDK2y84ep7q3u3OWINTjNT26wiR8iUwBVsfMs0HdB4pDI8ucsigFjV9doA__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      id: 2,
      src: "https://s3-alpha-sig.figma.com/img/7685/b204/10c5d46143d134f91c83f3dc815c432f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n4A5IWR~WchIy-ShEKeaR1~lKHzmN-wUMrFiosxqKeUjVYQBsmFVnscnbYoA6Z-eMjSZX1nJXE67JKfemHKVIxCLLcSe6g6FR0f-9hYrfgq3cNcGjKa9OLtLwNNfb8WEusKFCO7Eu4zobN3T7tOeI42RBDg3DT245gSiWSCv93t9FObFAGWg57m2sfzJoJ7UjmnVqAbV7hnZgLDJIbjgjPe3xOvMT0QCSjM5vL1xHtfPqzbu-osZLuaAPuNkyR9JMRHTbWF0M09sReQGTGuuK7OExk1eSMgCvH4RagVGhSM9jNVs5DMsxI-J6f61rgJqh-Fu1~Lf1unXr4sl5hcWLA__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      id: 3,
      src: "https://s3-alpha-sig.figma.com/img/c24e/9fda/01d837f488eff4200f9cf2a59420b504?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ut~ZOhf-XMpLq59H6S6nOABzE8FzFAgs6ZI2GwSrIugfU6pWF8IFfGj6UGFlB1O-fbIqponJ4bHGfuAIHiK5V2oX05SBChhQwqGSQi3AzDu8WAyuokpbsoK5voPIahueilkniJYBHhQ6x6LhC7Utv~BTpsu4r70rfYcSE-yuM1SUEkmOAghd-2hsG9Nh5eLe8ziq1iLMKS07j-UtWRCKR1yc10f5d88QxvB9ZSkNkyMIYivEzXB9c0ZIudV0ab2TAtLyIuVvvCqB5Rn2~L9Vqmy74VGueSzyVvRyai4wOCKlW9ZcreQd11-gZ7tgrLH-vcvqju7XkPShQdbZf~~lUQ__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
    {
      id: 4,
      src: "https://s3-alpha-sig.figma.com/img/7be5/fbc1/5cd1bec2679c4b4487192625b42b8de0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtdBpEnw6EEJRLRKnm-ez6Eb-0o4hsO~gv9ookPptb4ArifidQfwbyFaLR7Q9WaaiHdEXcMtva2uevNV0DYGs0Cyaa4hNyPz3YbP7f7jtNu3DJy1-PlfgjtBTBxAWdS-zuU2cvN8oGG2Kt~gbdUXrG-Nu4skUZRcjf89PpeqAbKXSzxEvWu6U636-hKjG-quaZWzwnAu9qvPYtL51h6A8F5A6an~-c7~GTf5ltUw4qubLpV9C~2QaKIXL7niXKdvRIi7iWnAoif3dxWqhyMFR6Q96VJ9wma6ZCp60JIQ4-mPT7Qv8P8h6yjkF3k9CS2~4i-CeIol73Afxv3U6lxLGw__",
      title: "НМИЦ онкологии им. Н.Н. Блохина",
    },
  ];
  return (
    <>
      <Row>
        <Col span={6}>
          <Typography.Title level={2}>Бренды</Typography.Title>

          <div className=" text-gray-500 text-lg ">
            <Link to={"/"}>Эксклюзивные поставщики</Link>
          </div>
        </Col>
        <Col span={18}>
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={3.5}
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: {
                slidesPerView: 1, // 640px dan kichik ekranlarda 1 slayd
              },
              768: {
                slidesPerView: 2, // 768px dan kichik ekranlarda 2 slayd
              },
              1024: {
                slidesPerView: 3.5, // 1024px dan katta ekranlarda 3 slayd
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
                      className="rounded-tr-xl rounded-tl-xl"
                      style={{
                        height: "200px",
                        width: "auto",
                        maxWidth: "65%",
                        objectFit: "contain",
                        margin: "auto",
                      }}
                    />
                  </div>
                  <div className="p-5 px-7 border-t-2 rounded-b-xl bg-[#F8F7F3]">
                    <Typography.Title level={5}>{item.title}</Typography.Title>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="flex justify-between mt-10">
              <div className="flex gap-3">
                <div onClick={handlePrevious}>
                  <LeftButton icon={GoArrowLeft} size={20} />
                </div>
                <div onClick={handleNext}>
                  <LeftButton icon={GoArrowRight} size={20} />
                </div>
              </div>
              <div>
                <PrimaryButton text="Сертификаты" />
              </div>
            </div>
          </Swiper>
        </Col>
      </Row>
    </>
  );
};

export default HomeBrand;
