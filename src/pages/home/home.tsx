/** @jsxImportSource @emotion/react */
import { observer } from "mobx-react-lite";
import { Col, FloatButton, Row, Typography } from "antd";
import { FcUpload } from "react-icons/fc";
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
      <FloatButton.BackTop visibilityHeight={1000} icon={<FcUpload />} />
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
                <Typography.Title style={{ fontSize: 50 }}>
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
                  src="https://s3-alpha-sig.figma.com/img/df12/2ff9/640dd8789b3a0eb394159b40cd64204b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A2Inkm6dc4wK3gkTHDU197W3p7NvaKKlXDIswOAo61VrQL3jcGtqkMDe2wYsNvk5dq23U6~SC3BTBGmB7~Dw~6WhRnYFZD99Gz5C6fl-p-mHK4cvU0kO1SyJ2hJeNKqgho870vIdEgbae3EcOf2SOprAKT0ZSUBvAxcoi7auj3OYdorNVBRPth8C9QQNmpaN4VwlFRHn2bSwsRq2ciJwzRA~4HgfDwds5mv141pUMQBD8FuEN8cpdf73nKbUVXQL0vchfFaJUAx7MCV3J34ZvFsOsmeZUnw8tG18euwadFEQqnAW014zn4unVqME2yJsJoNjCUU9Q224HhTQFlrKAA__"
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
