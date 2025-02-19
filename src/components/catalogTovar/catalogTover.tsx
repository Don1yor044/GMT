import styled from "@emotion/styled";
import { Button, Col, Row, Typography } from "antd";
import { FaRegHeart } from "react-icons/fa6";
import { LuBarChartBig } from "react-icons/lu";
import { Link } from "react-router-dom";
import { LeftButton, PrimaryButton, SecondaryButton } from "../buttons/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { useTranslation } from "react-i18next";
import baseURL from "utils/api";
import { catalogTovar } from "types/types";

interface StyledButtonProps {
  status: number;
}
export const CatalogTovar = () => {
  const [dataCourse, setDataCourse] = useState<catalogTovar[]>([]);
  const { t } = useTranslation();
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await baseURL.get(`CategoryItems`);
        setDataCourse(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
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
              340: { slidesPerView: 1.2 },
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3.2 },
            }}
          >
            {dataCourse.length > 0 &&
              dataCourse.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="!border border-gray-300 rounded-xl">
                    <div className="bg-white h-72 p-3 rounded-t-xl">
                      <div className="flex justify-between items-center">
                        <StyledButton status={Number(item.status)}>
                          {t(
                            item.status == 1
                              ? "ХитыПродаж"
                              : item.status == 2
                              ? "Новинки"
                              : "-30%"
                          )}
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
    status === 1 ? "#088269" : status === 2 ? "#59599A" : "#855E00"};
  border: 1px solid
    ${({ status }) =>
      status === 1 ? "#088269" : status === 2 ? "#59599A" : "#855E00"};
  background-color: ${({ status }) =>
    status === 1 ? "#448c7e2f" : status === 2 ? "#59599a44" : "#ffeeba"};
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
