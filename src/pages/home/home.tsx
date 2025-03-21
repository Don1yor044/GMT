/** @jsxImportSource @emotion/react */
import { observer } from "mobx-react-lite";
import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import {
  CatalogTovar,
  HomeClient,
  HomeBrand,
  About,
  HomeCompany,
  HomeForm,
  PrimaryButton,
  SecondaryButton,
  HomeSubscription,
  CategoryHome,
  CabinetSwiper,
  HomeCards,
} from "components";

export const Home = observer(() => {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-3 xl:px-14 lg:px-12 md:px-10 sm:px-5 py-8">
        <div className="rounded-xl bg-[#E5E4ED]">
          <Row style={{ height: "420px" }}>
            <Col
              lg={10}
              md={12}
              xs={24}
              className="flex flex-col justify-center"
            >
              <div className="md:px-8 lg:px-12 py-8 px-5 flex-col flex-wrap">
                <Typography.Title style={{ fontSize: 48 }}>
                  {t("ЗаголовокБаннераВПаруСтрок")}
                </Typography.Title>
                <Typography.Title
                  level={5}
                  className="!text-gray-500 flex flex-wrap"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit do
                  eiusmod tempor do eiusmod tempor
                </Typography.Title>
                <div className="flex gap-5 lg:mt-16 xs:mt-5 md:text-sm sm:text-xs  mp:mt-5">
                  <PrimaryButton text={t("ЗапроситьЦену")} />
                  <SecondaryButton text={t("ВКаталог")} />
                </div>
              </div>
            </Col>
            <Col lg={14} md={12} sm={24} xs={24} className="h-full flex">
              <div className="w-full">
                <img
                  src="public/image.png"
                  alt=""
                  className="h-full w-full object-cover rounded-[10px] lg:rounded-tl-[300px] md:rounded-[10px]" // MD va undan kichik ekranda 300px, kattaroq ekranda 10px
                />
              </div>
            </Col>
          </Row>
        </div>
        <CategoryHome />
        <CabinetSwiper />
        <HomeCards />
      </div>
      <CatalogTovar />
      <HomeClient />
      <HomeBrand />
      <About />
      <HomeCompany />
      <HomeForm />
      <HomeSubscription />
    </>
  );
});
