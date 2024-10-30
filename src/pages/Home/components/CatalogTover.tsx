import styled from "@emotion/styled";
import { Button, Col, Row, Typography } from "antd";
import { FaRegHeart } from "react-icons/fa6";
import { LuBarChartBig } from "react-icons/lu";
import { Link } from "react-router-dom";
import {
  LeftButton,
  PrimaryButton,
  SecondaryButton,
} from "../../../components/Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef } from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { t } from "i18next";

SwiperCore.use([Navigation]);
interface StyledButtonProps {
  status: string;
}

const CatalogTover = () => {
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
      src: "https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxcjmvFJT6J0FYPnAumUUcMdaohx7Q8HOLN394wK17ns8IHCpr~oVoSLTQR4uFnc3E34HT-9ZObVjs5JhSzTObPN9J818b-gjYZkutO0vfixhkQOu8InQ4VBFL8kxsTOPjp9rIvC3lhAHcFdRk~d09xtPY0pKThq9k6Gv5m2VvEYCcAXAFrZA652JCukrYzRmpFtTiAfd~nnSGI1JpIB1xoGREW5ZZuCUMQ8V4krwfpmsh40KtMd0GHBjuS7h3gSXDLFGE2fXcU4OKAzhXxCf5iMpMYkEYcc5~KgQZb46D7k90ZIRF~xZiiWX70BB7KEOGN0Z0iDpvGoYXujbIuYmQ__",
      title: "Анализатор Мочи MINDUA-66",
      article: 213134,
      price: "300 000",
      status: "Новинка",
    },
    {
      id: 2,
      src: "https://s3-alpha-sig.figma.com/img/443a/df0a/0f5efbf1e358d300d90229a39cb8e16c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SIKSSvad0Bgt1sZoOhjcSFk2o95vEFsBxI6hvpLegzvQAeebU5of37YurpO2qEZE5BfBTN5pUG23xXWIdrrWEetEOuiXHXrO5c5cLxJRn3drPqp8ZJo8W8o~DivRW6Xx45JPiGeO8ILBiaaA59HMHnnamMvvZerTDJ~TTDN1l-DZJi3UeDZbFkHCwxTWCm00-1ObloHLIl-bD3SAccgLwFW06c73sm51~fXHv08gO6RQmW0ZUvhh5MghmGZTzjfUODSiDMH6ncUL0TQJPOEzvjQjmEeNxP4DcOdcJGlUlJpwWgQw~qMraoWcAF9l0iXPlTX~zuZPATJiHZFW2ZXhgw__",
      title: "Анализатор Мочи MINDUA-66",
      article: 213134,
      price: "300 000",
      status: "Хит продаж",
    },
    {
      id: 3,
      src: "https://s3-alpha-sig.figma.com/img/d2e6/71b1/8132204915c34ae4aa933a3947a30dfe?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hOnAItXkFxd3611MjgcO4vE4cx6rOaq~klyutFHfRkBjnpfYNO3E7sR7Q0Ch4wHt1ToNLvKYR8Oozbj0DJ7BNjFbOJQ6B-NpM9qKwxQBXDQXSEtn27N8AiY9NQlLGK7-xpWHHFDmkv3fJsD-LZ2Vv17pqgQF-s9J7YB5ap481gjqHeMwdGYgaIiQgCOfZVclwzWFY0G1Ugu3onJKBVg769AwmKun1Ow6anwcKAa6KhLrbMX5YQic9T8puMybi-TFgw4MYn41Opesi2TSiygKSB~UvVi4F4QHoGjGizllHlseAfqK3OjWEZbuV82NbUa1NtK2CfRs3YZYlhkIrDJtuQ__",
      title: "Анализатор Мочи MINDUA-66",
      article: 213134,
      price: "300 000",
      status: "-30%",
    },
    {
      id: 4,
      src: "https://s3-alpha-sig.figma.com/img/d2e6/71b1/8132204915c34ae4aa933a3947a30dfe?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hOnAItXkFxd3611MjgcO4vE4cx6rOaq~klyutFHfRkBjnpfYNO3E7sR7Q0Ch4wHt1ToNLvKYR8Oozbj0DJ7BNjFbOJQ6B-NpM9qKwxQBXDQXSEtn27N8AiY9NQlLGK7-xpWHHFDmkv3fJsD-LZ2Vv17pqgQF-s9J7YB5ap481gjqHeMwdGYgaIiQgCOfZVclwzWFY0G1Ugu3onJKBVg769AwmKun1Ow6anwcKAa6KhLrbMX5YQic9T8puMybi-TFgw4MYn41Opesi2TSiygKSB~UvVi4F4QHoGjGizllHlseAfqK3OjWEZbuV82NbUa1NtK2CfRs3YZYlhkIrDJtuQ__",
      title: "Анализатор Мочи MINDUA-66",
      article: 213134,
      price: "300 100",
      status: "-30%",
    },
  ];
  return (
    <>
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
                    <div
                      style={{
                        backgroundImage: `url("${item.src}")`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        maxWidth: "200px",
                        height: "100%",
                        maxHeight: "200px",
                        margin: "0 auto",
                      }}
                    ></div>
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
    </>
  );
};

export default CatalogTover;

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
