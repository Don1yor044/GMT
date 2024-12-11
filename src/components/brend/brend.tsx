import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef } from "react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { LeftButton, PrimaryButton } from "@components/buttons";
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
      src: "https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-3O-FK2CGX153lldKC-f8dVfDT9mQVunWwxTTPjJ8LDxFHu1N~yI6XpiLU3XPIwafZ88q1Z3wtsR-GIUohX7AJnp6MoMiypHYuHKlu64v1B1n8G7fJIM06af9BH31lm4OPuabhrpNiRwHEBGdZDaa7w7kegSOY6-hgHlo2eSLzo57ZMvL3d18PGRteC9nXWPDkSR8lVtDW6PuOI7gvGOkoVJSjxqs0b1t0SS~bPjZOXdxqyeT~npKE2e4wRyAoHeMLAqOo8NR8NanG0L4Cv2dTxo9Jw~1rHvzYuXn2nc79Y9pcXf~ssJBaI-Rr~ZrIislYNyf2pVEMAnHpfAJ9xgg__",
      title: "CRAGHOPPERS",
    },
    {
      id: 2,
      src: "https://s3-alpha-sig.figma.com/img/7685/b204/10c5d46143d134f91c83f3dc815c432f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PNF2g5Amh0qWJep8KC7p9P~AQtxuH6Ia~vH54fJaQ~-e8ShgCZgl69I5ukU~PBKQXz6zGx53hrjETbGWAs3yT0h~qCtreibUvxUPoxIY8XEdtKc0gN2wTvSXrtLAkEQJWjvr1SE6U9viRnfCXSGEGwTLGvqUaNqn~01y~YE5HG2r4Tfl1onYHzCBxp-tAUm-GKDs2MhWCq13pPpdCH~JBYYndTRejKkoA~Zb9WS1UTWfmkdZzQ~YPg3ei4H7pfXLWImsqh1gx1lI2UbIZjD28gLfmh8qDCV~0h6WItbH0ZmMkgdN7bLryNdi6Y2MBCvXghkORV6f83lUbI4BDr1ytw__",
      title: "ZAMBERLAN",
    },
    {
      id: 3,
      src: "https://s3-alpha-sig.figma.com/img/c24e/9fda/01d837f488eff4200f9cf2a59420b504?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UJnHA3GlluHy2yd3dj0vRF4HEeSwoN~k9WtCrub2Uh1C4c1MrH9HlzwpMqQsXa2owcYDC9kSLWJUb2niVJz2D4sttl3QkjKtiOjWr-Ynqlaf-pd14xby5E-NOje60MOa~hHDykSdbbBGGUm2347CQjV2oo~Nu3xr71yzexfWQ8LBl-IExIZ7hucsj6nLX0gGaeXfJw6VMGr1~EtGryWbYvkPr8NLt7AKlLdL0q-dM9luATOBtkW4lQit7ZE5iuel8ooRx1iiD-UycChQKjc7zit2SU5GKd-Nvvs2dSCOh~T87p4bm5Uq9zcKvA1eXEdq-bpjb4BeNE4VCmf3-qclug__",
      title: "THERMACELL",
    },
    {
      id: 4,
      src: "https://s3-alpha-sig.figma.com/img/7be5/fbc1/5cd1bec2679c4b4487192625b42b8de0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S2PcYfpwi0a1-R9anCW6Hb4MjjYS6A0lmU7VsxGRSFnW60XjvpUZjEHIT4-DcIqSAB9pF12j~MsM3QvVN36G7jBpzmhCII23IdjQU1Vwdz4rYvh9ahQhaPoAi7wifl49LMBMlLVVCvhG2Ozq5yiNGmRS~9YOvztqvVnv~zMVGvMrHxbUFXFmVYL49t-jQV7WjMrC5S8QTBJ47SDJvPVd~LhJrvqytyqOOCwZwVetbyRr4u9ODw8ij53FRx3IKAhHEayr~gP-VbAi0y-H7H7YKHPNQ0FKKmPGPiw5qZgw3hxpcyU-l3RUfM23AUZyDgw3ou8k6Hdl2k0NFs0c1sKNuQ__",
      title: "ORTLIEB WATERPROOF",
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
            slidesPerView={3.5}
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.5, // 640px dan kichik ekranlarda 1 slayd
              },
              640: {
                slidesPerView: 2.5, // 640px dan kichik ekranlarda 1 slayd
              },
              768: {
                slidesPerView: 3, // 768px dan kichik ekranlarda 2 slayd
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
