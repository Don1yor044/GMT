import { SecondaryButton } from "components";
import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { FaRegHeart } from "react-icons/fa";
import { LuBarChartBig } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import baseURL from "utils/api";
import { useEffect, useState } from "react";
import { catalogTovar } from "types/types";

interface ImageContainerProps {
  src: string;
}
interface StyledButtonProps {
  status: number;
}

export const CompareProduct = () => {
  const [dataCourse, setDataCourse] = useState<catalogTovar[]>([]);

  const { t } = useTranslation();

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
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          340: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3.2 },
        }}
      >
        {dataCourse.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="!border border-gray-300 rounded-xl">
              <div className="bg-white h-72 p-3 rounded-t-xl">
                <div className="flex justify-between items-center">
                  <StyledButton status={item.status}>
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
                <Typography.Title level={4}>{item.price} руб.</Typography.Title>
                <div className="mt-5">
                  <SecondaryButton text={t("ДобавитьВкорзину")} size={100} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
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
