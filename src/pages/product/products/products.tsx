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
        <Col span={13}>
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
                src="https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxcjmvFJT6J0FYPnAumUUcMdaohx7Q8HOLN394wK17ns8IHCpr~oVoSLTQR4uFnc3E34HT-9ZObVjs5JhSzTObPN9J818b-gjYZkutO0vfixhkQOu8InQ4VBFL8kxsTOPjp9rIvC3lhAHcFdRk~d09xtPY0pKThq9k6Gv5m2VvEYCcAXAFrZA652JCukrYzRmpFtTiAfd~nnSGI1JpIB1xoGREW5ZZuCUMQ8V4krwfpmsh40KtMd0GHBjuS7h3gSXDLFGE2fXcU4OKAzhXxCf5iMpMYkEYcc5~KgQZb46D7k90ZIRF~xZiiWX70BB7KEOGN0Z0iDpvGoYXujbIuYmQ__"
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
                    src="https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxcjmvFJT6J0FYPnAumUUcMdaohx7Q8HOLN394wK17ns8IHCpr~oVoSLTQR4uFnc3E34HT-9ZObVjs5JhSzTObPN9J818b-gjYZkutO0vfixhkQOu8InQ4VBFL8kxsTOPjp9rIvC3lhAHcFdRk~d09xtPY0pKThq9k6Gv5m2VvEYCcAXAFrZA652JCukrYzRmpFtTiAfd~nnSGI1JpIB1xoGREW5ZZuCUMQ8V4krwfpmsh40KtMd0GHBjuS7h3gSXDLFGE2fXcU4OKAzhXxCf5iMpMYkEYcc5~KgQZb46D7k90ZIRF~xZiiWX70BB7KEOGN0Z0iDpvGoYXujbIuYmQ__"
                    alt="Product 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="border border-gray-300 rounded-lg p-1"
                    src="https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxcjmvFJT6J0FYPnAumUUcMdaohx7Q8HOLN394wK17ns8IHCpr~oVoSLTQR4uFnc3E34HT-9ZObVjs5JhSzTObPN9J818b-gjYZkutO0vfixhkQOu8InQ4VBFL8kxsTOPjp9rIvC3lhAHcFdRk~d09xtPY0pKThq9k6Gv5m2VvEYCcAXAFrZA652JCukrYzRmpFtTiAfd~nnSGI1JpIB1xoGREW5ZZuCUMQ8V4krwfpmsh40KtMd0GHBjuS7h3gSXDLFGE2fXcU4OKAzhXxCf5iMpMYkEYcc5~KgQZb46D7k90ZIRF~xZiiWX70BB7KEOGN0Z0iDpvGoYXujbIuYmQ__"
                    alt="Product 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="border border-gray-300 rounded-lg p-1"
                    src="https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxcjmvFJT6J0FYPnAumUUcMdaohx7Q8HOLN394wK17ns8IHCpr~oVoSLTQR4uFnc3E34HT-9ZObVjs5JhSzTObPN9J818b-gjYZkutO0vfixhkQOu8InQ4VBFL8kxsTOPjp9rIvC3lhAHcFdRk~d09xtPY0pKThq9k6Gv5m2VvEYCcAXAFrZA652JCukrYzRmpFtTiAfd~nnSGI1JpIB1xoGREW5ZZuCUMQ8V4krwfpmsh40KtMd0GHBjuS7h3gSXDLFGE2fXcU4OKAzhXxCf5iMpMYkEYcc5~KgQZb46D7k90ZIRF~xZiiWX70BB7KEOGN0Z0iDpvGoYXujbIuYmQ__"
                    alt="Product 3"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Col>
        <Col span={11}>
          <div className="ps-10 py-5">
            <Typography className="font-semibold text-4xl">
              Анализатор мочи MIND UA-66
            </Typography>
            <div className="my-3">
              <Rate allowHalf defaultValue={4} style={{ fontSize: 18 }} />
            </div>
            <div>
              <Typography className="text-[#7A7687]">
                Категория: Лабораторное оборудование
              </Typography>
              <Typography className="text-[#7A7687]">
                Производитель: Lorem
              </Typography>
              <Typography className="text-[#7A7687]">
                Артикул: 213134
              </Typography>
              <Typography className="text-[#7A7687]">В наличии</Typography>
            </div>
            <Typography className="font-semibold text-2xl mt-2">
              300 000 руб.
            </Typography>
            <div className="flex gap-2 mt-5 justify-between">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-[5px] border-gray-300 border-[1px]">
                <Button
                  type="text"
                  icon={<MinusOutlined />}
                  onClick={decrement}
                  className="flex items-center justify-center rounded-full border-none text-gray-500 hover:bg-gray-50 hover:text-[#088269]"
                />
                <span className="min-w-[15px] text-center text-lg font-medium text-[#088269]">
                  {count}
                </span>
                <Button
                  type="text"
                  icon={<PlusOutlined />}
                  onClick={increment}
                  className="flex items-center justify-center rounded-full border-none text-gray-500 hover:bg-gray-50 !hover:text-[#088269]"
                />
              </div>
              <SecondaryButton text="Задать вопрос" size={33} />
              <PrimaryButton text="Добавить в корзину" size={40} />
            </div>
            <hr className="mt-5 mb-3" />
            <Typography className="text-xl font-semibold">О товаре</Typography>
            <Typography className="text-[#202020] mt-1">
              О Но синтетическое тестирование, в своём классическом
              представлении, допускает внедрение поэтапного и последовательного
              развития общества. В рамках спецификации современных стандартов,
              сторонники тоталитаризма в науке будут функционально разнесены.s
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