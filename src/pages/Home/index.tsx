/** @jsxImportSource @emotion/react */
import { observer } from "mobx-react-lite";
import { Header } from "../../components/Header";
import { Col, Row, Typography } from "antd";
import { colors } from "../../components/Colors";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";
import CategoryHome from "./components/category";
import SwiperComponentCopy from "./components/cabinetSwiper";
import HomeCards from "./components/Cards";
import { Link } from "react-router-dom";

const Home = observer(() => {
  return (
    <>
      <Header />
      <div className="px-14 py-8">
        <div className="rounded-xl" style={{ backgroundColor: colors.Fon }}>
          <Row>
            <Col span={10}>
              <div className="px-12 py-8">
                <div>
                  <Typography.Title style={{ fontSize: 50 }}>
                    Заголовок баннера <br /> в пару строк
                  </Typography.Title>
                  <Typography.Title level={5} className="!text-gray-500 ">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit, sed do eiusmod tempor
                  </Typography.Title>
                </div>
                <div className="flex gap-5 mt-16">
                  <PrimaryButton text="Запросить цену" />
                  <SecondaryButton text="В каталог" size={120} />
                </div>
              </div>
            </Col>
            <Col span={14}>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/df12/2ff9/640dd8789b3a0eb394159b40cd64204b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AqC5PtPhE~i21-IZerc7WcUNRV1w1l4Kp6KLJjRMw91XYbqe-T20Z7sLKJcjBZTuU7~qx-y9yFVE1woVxtPFU0bTlmn4w3HAMDosyiSf7yAwn9GTulLoBAotdqHrJltzSnRsK5Uu5wx2qD0lo07FmmxS2~QJuA-WXXbvA9CWI9VXfs~tAGM42PsVT2z8h8BYtlFkLmqosg1KVvS3LmKnxR3sTTPpRz8-fKrcWIpZjX9ehD8-fYMDfS1H1GE-HvesgIW9d2SuKF7OI9oOZgE8QSml2iifOWhQ36GBVbDCKp6iHcQCoRQQ6biIzO7vyTNQtipmAQXgI5KrAC1CkYMPRQ__"
                  alt=""
                  style={{
                    height: "360px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "300px 10px 10px 2px",
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-24">
          <div className="flex justify-between items-center">
            <Typography.Title level={2} className="!m-0">
              Популярные категории
            </Typography.Title>
            <PrimaryButton text="Все категории" />
          </div>
          <CategoryHome />
        </div>
        <div className="mt-24">
          <Typography.Title level={2} className="!mb-10">
            Комплексное оснащение кабинетов
          </Typography.Title>

          <SwiperComponentCopy />
        </div>
        <div className="mt-24">
          <Typography.Title level={2}>Почему выбирают нас?</Typography.Title>
          <HomeCards />
        </div>
        <div className="mt-24">
          <Row>
            <Col span={5}>
              <Typography.Title level={2}>Каталог товаров</Typography.Title>

              <div className="flex flex-col items-start text-gray-500 text-lg ">
                <Link to={"/"}>Хиты продаж</Link>
                <Link to={"/"}>Новинки</Link>
                <Link to={"/"}>Акции</Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
});

export default Home;
