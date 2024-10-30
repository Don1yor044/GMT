/** @jsxImportSource @emotion/react */
import { observer } from "mobx-react-lite";
import { Header } from "../../components/Header";
import { Col, FloatButton, Row, Typography } from "antd";
import { colors } from "../../components/Colors";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";
import HomeCards from "./components/Cards";
import HomeClient from "./components/Client";
import HomeBrand from "./components/Brend";
import { FcUpload } from "react-icons/fc";
import About from "../../components/About";
import CategoryHome from "./components/Category";
import CabinetSwiper from "./components/CabinetSwiper";
import HomeCompany from "./components/Company";
import HomeForm from "./components/Form";
import CatalogTover from "./components/CatalogTover";
import HomeSubscription from "../../components/Subscription";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";

const Home = observer(() => {
  const { t } = useTranslation();
  return (
    <>
      <FloatButton.BackTop visibilityHeight={1000} icon={<FcUpload />} />
      <Header />
      <div className="px-5 xl:px-14 lg:px-12 md:px-10 sm:px-5 py-8">
        <div className="rounded-xl" style={{ backgroundColor: colors.Fon }}>
          <Row style={{ height: "420px" }}>
            <Col lg={10} md={24} className="flex flex-col justify-center">
              <div className="md:px-10 lg:px-12 py-8 px-5 flex-col flex-wrap">
                <Typography.Title style={{ fontSize: 50 }}>
                  {t("ЗаголовокБаннераВПаруСтрок")}
                </Typography.Title>
                <Typography.Title
                  level={5}
                  className="!text-gray-500 flex flex-wrap"
                >
                  {t("Lorem ipsum dolor sit amet, consectetur")}
                  {t("adipiscing elit do eiusmod tempor")}
                </Typography.Title>
                <div className="flex gap-5 mt-16">
                  <PrimaryButton text={t("ЗапроситьЦену")} />
                  <SecondaryButton text={t("ВКаталог")} />
                </div>
              </div>
            </Col>
            <Col lg={14} md={24} sm={24} xs={24} className="h-full flex">
              <div className="w-full">
                <img
                  src="https://s3-alpha-sig.figma.com/img/df12/2ff9/640dd8789b3a0eb394159b40cd64204b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AqC5PtPhE~i21-IZerc7WcUNRV1w1l4Kp6KLJjRMw91XYbqe-T20Z7sLKJcjBZTuU7~qx-y9yFVE1woVxtPFU0bTlmn4w3HAMDosyiSf7yAwn9GTulLoBAotdqHrJltzSnRsK5Uu5wx2qD0lo07FmmxS2~QJuA-WXXbvA9CWI9VXfs~tAGM42PsVT2z8h8BYtlFkLmqosg1KVvS3LmKnxR3sTTPpRz8-fKrcWIpZjX9ehD8-fYMDfS1H1GE-HvesgIW9d2SuKF7OI9oOZgE8QSml2iifOWhQ36GBVbDCKp6iHcQCoRQQ6biIzO7vyTNQtipmAQXgI5KrAC1CkYMPRQ__"
                  alt=""
                  className="h-full w-full object-cover rounded-[10px] lg:rounded-tl-[300px] md:rounded-[10px]" // MD va undan kichik ekranda 300px, kattaroq ekranda 10px
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-96 xs:mt-[450px] lg:mt-24">
          <div className="flex justify-between items-center !pt-0 sm:pt-10 ">
            <Typography.Title level={2} className="!m-0">
              {t(`ПопулярныеКатегории`)}
            </Typography.Title>
            <div className="hidden md:flex">
              <PrimaryButton text={t(`ВсеКатегории`)} />
            </div>
          </div>
          <CategoryHome />
          <div className="md:hidden flex justify-center mt-10">
            <PrimaryButton text={t(`ВсеКатегории`)} />
          </div>
        </div>
        <div className="mt-24">
          <Typography.Title level={2} className="!mb-10">
            {t(`КомплексноеОснащениеКабинетов`)}
          </Typography.Title>

          <CabinetSwiper />
        </div>
        <div className="mt-24">
          <Typography.Title level={2}>
            {t(`ПочемуВыбираютНас`)} ?
          </Typography.Title>
          <HomeCards />
        </div>
      </div>
      <div className="mt-24 xl:ps-14 lg:ps-12 md:ps-10 sm:ps-5 px-5">
        <CatalogTover />
      </div>
      <div>
        <HomeClient />
      </div>
      <div className="ps-14 mt-24 py-14">
        <HomeBrand />
      </div>
      <div className="mt-24">
        <About />
      </div>
      <div className="ps-14">
        <div className="mt-24">
          <HomeCompany />
        </div>
        <div className="mt-24">
          <HomeForm />
        </div>
      </div>
      <div className="mt-24">
        <HomeSubscription />
        <Footer />
      </div>
    </>
  );
});

export default Home;
