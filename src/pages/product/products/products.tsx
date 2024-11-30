import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { PrimaryButton, SecondaryButton } from "@components/buttons";
import styled from "@emotion/styled";
import { Button, Col, Rate, Row, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegHeart } from "react-icons/fa";
import { LuBarChartBig } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";

interface StyledButtonProps {
  status: string;
}
export const Products = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={24} lg={13}>
          <div className="bg-[#FFFFFF] p-5 border border-gray-300 rounded-lg max-h-[70vh] relative">
            <div className="flex justify-between items-center">
              <StyledButton status={`Новинка`}>{t(`Новинка`)}</StyledButton>
              <div className="flex">
                <Button
                  type="text"
                  className="p-0 flex items-center justify-center"
                  style={{ minWidth: "35px", minHeight: "30px" }}
                >
                  <LuBarChartBig size={22} />
                </Button>
                <Button
                  type="text"
                  className="p-0 flex items-center justify-center"
                  style={{ minWidth: "35px", minHeight: "30px" }}
                >
                  <FaRegHeart size={22} />
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className="!w-[400px] max-h-[500px]"
                src="https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF03XnkxPtJqZP~WkiPPjrSTlpi6qfHG1YUXGXBdd3Em~VCvVm~6vCv24gGkidK6-0hsp7oSyK6zVFsUSPgpCdHNxU27xnEazGaLBIhEtTRkeYV-ycX98bETvoZvELm47Ln7OcUnkcUdpJfa415tYj2JVUWRymV1gF0q~YvO287tW0OQM9hWIrOtx5xLfBGja5EaNAxXf~BEIHjpgfcHYWiUv0Hi~91eVg1qP6Wv-mj5IwTcdoYcAbT1hskPP4lW6mjoWHg0ewdZdQIFpxpJbr7L9NL4Tr~GmHtgL5W8cMw~-w21MWMt2KDGwA6x~7Yp64dbJCwZ~RZ2arXGydZHng__"
                alt="Photo not found"
              />
            </div>
            <div className="absolute bottom-3">
              <Swiper
                spaceBetween={10}
                slidesPerView={5} // Bir vaqtda ko'rinadigan slayderlar soni
                className="mt-5 w-64"
              >
                <SwiperSlide>
                  <img
                    className="border border-gray-300 rounded-lg p-1"
                    src="https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF03XnkxPtJqZP~WkiPPjrSTlpi6qfHG1YUXGXBdd3Em~VCvVm~6vCv24gGkidK6-0hsp7oSyK6zVFsUSPgpCdHNxU27xnEazGaLBIhEtTRkeYV-ycX98bETvoZvELm47Ln7OcUnkcUdpJfa415tYj2JVUWRymV1gF0q~YvO287tW0OQM9hWIrOtx5xLfBGja5EaNAxXf~BEIHjpgfcHYWiUv0Hi~91eVg1qP6Wv-mj5IwTcdoYcAbT1hskPP4lW6mjoWHg0ewdZdQIFpxpJbr7L9NL4Tr~GmHtgL5W8cMw~-w21MWMt2KDGwA6x~7Yp64dbJCwZ~RZ2arXGydZHng__"
                    alt="Product 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="border border-gray-300 rounded-lg p-1"
                    src="https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF03XnkxPtJqZP~WkiPPjrSTlpi6qfHG1YUXGXBdd3Em~VCvVm~6vCv24gGkidK6-0hsp7oSyK6zVFsUSPgpCdHNxU27xnEazGaLBIhEtTRkeYV-ycX98bETvoZvELm47Ln7OcUnkcUdpJfa415tYj2JVUWRymV1gF0q~YvO287tW0OQM9hWIrOtx5xLfBGja5EaNAxXf~BEIHjpgfcHYWiUv0Hi~91eVg1qP6Wv-mj5IwTcdoYcAbT1hskPP4lW6mjoWHg0ewdZdQIFpxpJbr7L9NL4Tr~GmHtgL5W8cMw~-w21MWMt2KDGwA6x~7Yp64dbJCwZ~RZ2arXGydZHng__"
                    alt="Product 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="border border-gray-300 rounded-lg p-1"
                    src="https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF03XnkxPtJqZP~WkiPPjrSTlpi6qfHG1YUXGXBdd3Em~VCvVm~6vCv24gGkidK6-0hsp7oSyK6zVFsUSPgpCdHNxU27xnEazGaLBIhEtTRkeYV-ycX98bETvoZvELm47Ln7OcUnkcUdpJfa415tYj2JVUWRymV1gF0q~YvO287tW0OQM9hWIrOtx5xLfBGja5EaNAxXf~BEIHjpgfcHYWiUv0Hi~91eVg1qP6Wv-mj5IwTcdoYcAbT1hskPP4lW6mjoWHg0ewdZdQIFpxpJbr7L9NL4Tr~GmHtgL5W8cMw~-w21MWMt2KDGwA6x~7Yp64dbJCwZ~RZ2arXGydZHng__"
                    alt="Product 3"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Col>
        <Col span={24} lg={11}>
          <div className="lg:ps-10 lg:py-5 p-3">
            <Typography className="font-semibold md:text-4xl sm:text-2xl text-xl">
              Анализатор мочи MIND UA-66
            </Typography>
            <div className="my-3">
              <Rate allowHalf defaultValue={4} style={{ fontSize: 18 }} />
            </div>
            <div>
              <Typography className="text-[#7A7687]">
                {t(`Категория`)}: Лабораторное оборудование
              </Typography>
              <Typography className="text-[#7A7687]">
                {t(`Производитель`)}: Lorem
              </Typography>
              <Typography className="text-[#7A7687]">
                {t(`Артикул`)}: 213134
              </Typography>
              <Typography className="text-[#7A7687]">
                {t(`Вналичии`)}
              </Typography>
            </div>
            <Typography className="hidden font-semibold text-2xl mt-2 sm:block">
              300 000 руб.
            </Typography>
            <div className="hidden sm:flex gap-2 mt-5 justify-around lg:w-full md:w-[70%] sm:w-[81%] w-full">
              <div className="lg:hidden inline-flex xl:inline-flex items-center gap-2 rounded-full px-4 py-[5px] border-gray-300 border-[1px]">
                <Button
                  type="text"
                  icon={<MinusOutlined />}
                  onClick={decrement}
                  className="flex items-center justify-center rounded-full border-none text-gray-500 hover:bg-gray-50 hover:text-[#088269]"
                />
                <span className="min-w-[12px] text-center text-lg font-medium text-[#088269]">
                  {count}
                </span>
                <Button
                  type="text"
                  icon={<PlusOutlined />}
                  onClick={increment}
                  className="flex items-center justify-center rounded-full border-none text-gray-500 hover:bg-gray-50 !hover:text-[#088269]"
                />
              </div>
              <SecondaryButton text={t("ЗадатьВопрос")} />
              <PrimaryButton text={t("ДобавитьВкорзину")} />
            </div>
            <div className="flex-col space-y-2 sm:hidden fixed z-10 right-0 bottom-[64px] bg-white w-full pt-3 ">
              <div className="flex justify-between w-full px-7 flex-wrap gap-1">
                <Typography className="font-semibold text-xl ">
                  300 000 руб.
                </Typography>
                <PrimaryButton text={t("ДобавитьВкорзину")} />
              </div>
              <div className="flex justify-between w-full px-7 flex-wrap gap-1">
                <div className="inline-flex items-center gap-5 rounded-full px-4 py-[3px] border-gray-300 border-[1px] justify-center ">
                  <Button
                    type="text"
                    icon={<MinusOutlined />}
                    onClick={decrement}
                    className="flex items-center justify-center rounded-full border-none text-gray-500 hover:bg-gray-50 hover:text-[#088269]"
                  />
                  <span className="min-w-[12px] text-center text-lg font-medium text-[#088269]">
                    {count}
                  </span>
                  <Button
                    type="text"
                    icon={<PlusOutlined />}
                    onClick={increment}
                    className="flex items-center justify-center rounded-full border-none text-gray-500 hover:bg-gray-50 !hover:text-[#088269]"
                  />
                </div>
                <SecondaryButton text={t("ЗадатьВопрос")} />
              </div>
            </div>
            <hr className="mt-5 mb-3" />
            <Typography className="text-xl font-semibold">
              {t(`О товаре`)}
            </Typography>
            <Typography className="text-[#202020] mt-1">
              {t(
                `О Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов,сторонники тоталитаризма в науке будут функционально разнесены.`
              )}
            </Typography>
          </div>
        </Col>
      </Row>
    </>
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
  padding: 2px 10px;
  border-radius: 50px;
  font-weight: 500;
  cursor: auto;
`;
