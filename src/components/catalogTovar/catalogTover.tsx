import styled from "@emotion/styled";
import { Button, Col, Row, Typography } from "antd";
import { FaRegHeart } from "react-icons/fa6";
import { LuBarChartBig } from "react-icons/lu";
import { Link } from "react-router-dom";
import { LeftButton, PrimaryButton, SecondaryButton } from "../buttons/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef } from "react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { t } from "i18next";

interface StyledButtonProps {
  status: string;
}
export const CatalogTovar = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  const handlePrevious = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const items = [
    {
      id: 1,
      src: "https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF03XnkxPtJqZP~WkiPPjrSTlpi6qfHG1YUXGXBdd3Em~VCvVm~6vCv24gGkidK6-0hsp7oSyK6zVFsUSPgpCdHNxU27xnEazGaLBIhEtTRkeYV-ycX98bETvoZvELm47Ln7OcUnkcUdpJfa415tYj2JVUWRymV1gF0q~YvO287tW0OQM9hWIrOtx5xLfBGja5EaNAxXf~BEIHjpgfcHYWiUv0Hi~91eVg1qP6Wv-mj5IwTcdoYcAbT1hskPP4lW6mjoWHg0ewdZdQIFpxpJbr7L9NL4Tr~GmHtgL5W8cMw~-w21MWMt2KDGwA6x~7Yp64dbJCwZ~RZ2arXGydZHng__",
      title: "Анализатор Мочи MINDUA-66",
      article: 213134,
      price: "300 000",
      status: "Новинка",
    },
    {
      id: 2,
      src: "../category/Phtoto.png",
      title: "Анализатор Мочи MINDUA-66",
      article: 213134,
      price: "300 000",
      status: "ХитПродаж",
    },
    {
      id: 3,
      src: "https://s3-alpha-sig.figma.com/img/d2e6/71b1/8132204915c34ae4aa933a3947a30dfe?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9AkS0S9gVIeuJ2MgvW1pNcu-12gY-0~hoU3wAgC~g3ByYyEb1ujKxD-HPL1WiUDgcX9mkCQfFl6ys2bISFKdhW6QHs-nNynUc5uFQm2mQlycBdY0K~F8VHYl808nAi0JF5p7YsABLndcyPqU8I1rXWDIK7lksHVzV7byZOoQCmFSZi70TTcAR0cPAIBZRUGsxhD8alVthHMIQWDDh4r3m55S4jCE91I~Vgpyzc~SWR1o5aqU4iiMIXLYRs~hhnF2CrrMnjUI55wE5~fsNywGw79R8jcQ5MFfsOKGKbVrsEYoiukkvL9w7g-C3ZgW67HE~UPgvPngi3FRbBMrhEYCA__",
      title: "Анализатор Мочи MINDUA-66",
      article: 213134,
      price: "300 000",
      status: "-30%",
    },
    {
      id: 4,
      src: "https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF03XnkxPtJqZP~WkiPPjrSTlpi6qfHG1YUXGXBdd3Em~VCvVm~6vCv24gGkidK6-0hsp7oSyK6zVFsUSPgpCdHNxU27xnEazGaLBIhEtTRkeYV-ycX98bETvoZvELm47Ln7OcUnkcUdpJfa415tYj2JVUWRymV1gF0q~YvO287tW0OQM9hWIrOtx5xLfBGja5EaNAxXf~BEIHjpgfcHYWiUv0Hi~91eVg1qP6Wv-mj5IwTcdoYcAbT1hskPP4lW6mjoWHg0ewdZdQIFpxpJbr7L9NL4Tr~GmHtgL5W8cMw~-w21MWMt2KDGwA6x~7Yp64dbJCwZ~RZ2arXGydZHng__",
      title: "Анализатор Мочи MINDUA-66",
      article: 213134,
      price: "300 100",
      status: "-30%",
    },
  ];
  return (
    <div className="mt-24 xl:ps-14 lg:ps-12 md:ps-10 sm:ps-5 px-5">
      <Row gutter={[20, 20]}>
        <Col xl={6} xs={24}>
          <div className="flex gap-5 justify-between items-center">
            <div>
              <Typography.Title
                level={2}
                className="text-lg sm:text-2xl lg:text-3xl"
              >
                {t(`КаталогТоваров`)}
              </Typography.Title>
              <div className="flex gap-2 xl:flex-col items-start text-sm sm:text-base lg:text-lg">
                <Link to={"/"}>{t(`ХитыПродаж`)}</Link>
                <Link to={"/"}>{t(`Новинки`)}</Link>
                <Link to={"/"}>{t(`Акции`)}</Link>
              </div>
            </div>

            <div className="md:flex lg:hidden sm:hidden xs:hidden mp:hidden gap-2 h-10">
              <SecondaryButton text={t("БесплатнаяКонсультация")} />
              <PrimaryButton text={t("ВсеТовары")} />
            </div>
          </div>
        </Col>
        <Col xl={18} xs={24}>
          <Swiper
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiper instansiyani olish
            spaceBetween={10}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              340: { slidesPerView: 1.5 },
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3.2 },
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="!border border-gray-300 rounded-xl">
                  <div className="bg-white h-72 p-3 rounded-t-xl">
                    <div className="flex justify-between items-center">
                      <StyledButton status={item.status}>
                        {t(item.status)}
                      </StyledButton>
                      <div className="flex">
                        <Button
                          type="text"
                          className="p-0 flex items-center justify-center"
                          style={{ minWidth: "35px", minHeight: "30px" }}
                        >
                          <LuBarChartBig size={19} />
                        </Button>
                        <Button
                          type="text"
                          className="p-0 flex items-center justify-center"
                          style={{ minWidth: "35px", minHeight: "30px" }}
                        >
                          <FaRegHeart size={19} />
                        </Button>
                      </div>
                    </div>

                    <ImageContainer src={item.src}></ImageContainer>
                  </div>
                  <div className="p-3 border-t">
                    <Typography.Title level={4} className="w-52">
                      {t(item.title)}
                    </Typography.Title>
                    <Typography className="text-[#7A7687]">
                      {t(`Артикул`)}:{item.article}
                    </Typography>
                    <Typography className="text-[#7A7687]">
                      {t(`Вналичии`)}
                    </Typography>
                    <Typography.Title level={4}>
                      {item.price} руб.
                    </Typography.Title>
                    <div className="mt-5">
                      <SecondaryButton
                        text={t("ДобавитьВкорзину")}
                        size={100}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-between mt-10 pr-10 items-center">
            <div className="xl:flex gap-3 hidden ">
              <div onClick={handlePrevious}>
                <LeftButton icon={GoArrowLeft} size={20} />
              </div>
              <div onClick={handleNext}>
                <LeftButton icon={GoArrowRight} size={20} />
              </div>
            </div>
            <div className="md:hidden lg:flex xs:flex sm:flex gap-2 ">
              <SecondaryButton text={t("БесплатнаяКонсультация")} />
              <div className="sm:hidden mp:flex mp:h-3 sm:h-0"> </div>
              <PrimaryButton text={t("ВсеТовары")} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  color: ${({ status }) =>
    status === "Новинка"
      ? "#088269"
      : status === "Хит продаж"
      ? "#59599A"
      : "#855E00"};
  border: 1px solid
    ${({ status }) =>
      status === "Новинка"
        ? "#088269"
        : status === "Хит продаж"
        ? "#59599A"
        : "#855E00"};
  background-color: ${({ status }) =>
    status === "Новинка"
      ? "#448c7e2f"
      : status === "Хит продаж"
      ? "#59599a44"
      : "#ffeeba"};
  padding: 1px 8px;
  border-radius: 50px;
  font-weight: 500;
  cursor: auto;
`;
interface ImageContainerProps {
  src: string;
}
const ImageContainer = styled.div<ImageContainerProps>`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 200px;
  height: 100%;
  max-height: 200px;
  margin: 0 auto;
  background-image: ${(props) => `url(${props.src})`};
`;
