import { Col, Row, Typography } from "antd";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { Fact } from "@components/fact";
import { HomeClient } from "@components/clinet";
import { HomeCards } from "@components/cards";
import { HomeBrand } from "@components/brend";
import { Sertifikat } from "@components/sertifikat";
import { HomeForm } from "@components/form";
import { Footer } from "@components/footer/footer";
import { Header } from "@components/header";
import { LeftButton } from "@components/buttons";

const images = [
  { src: "../../Person.png", name: "Константин", title: "ОсновательКомпании" },
  {
    src: "../../Person(1).png",
    name: "Алексей",
    title: "ДиректорПоМаркетингу",
  },
  { src: "../../Person(2).png", name: "Наталья", title: "ГлавныйИнженер" },
];
export const Hero = () => {
  const { t } = useTranslation();
  const [displayImages, setDisplayImages] = useState(images);

  const handleNext = () => {
    setDisplayImages((prevImages) => [
      prevImages[1],
      prevImages[2],
      prevImages[0],
    ]);
  };
  const handlePrev = () => {
    setDisplayImages((prevImages) => [
      prevImages[2],
      prevImages[0],
      prevImages[1],
    ]);
  };
  return (
    <>
      <Header />
      <div className="px-5 py-2 lg:px-14">
        <div className="flex gap-3 items-center">
          <Link to={"/"} className="text-[#7A7687]">
            {t(`Главная`)}
          </Link>
          <div className="text-[#7A7687]">
            <RiArrowRightSLine size={20} />{" "}
          </div>
          <Typography className="font-semibold">{t(`Окомпании`)}</Typography>
        </div>
        <div className="pt-10">
          <img src="../../Hero.png" alt="" className="h-full w-full " />
          <div className="mt-10">
            <Row gutter={[20, 20]}>
              <Col span={24} lg={12}>
                <Typography className="text-2xl lg:text-5xl font-semibold">
                  {t(`ГлобалМедикалТрейд`)}
                </Typography>
              </Col>
              <Col span={24} lg={12}>
                <Typography className="text-base lg:text-lg">
                  {t(`УчитываяСтремительное`)}
                </Typography>
                <Typography className="text-base lg:text-lg mt-3">
                  {t(`КомпанияОООГлобалМедикалТрейд`)}
                </Typography>
              </Col>
            </Row>
          </div>
          <div className="my-16 lg:my-36">
            <Fact />
          </div>
        </div>
      </div>
      <div className="bg-[#088269] p-5 lg:p-14">
        <Row gutter={[20, 20]}>
          <Col span={24} lg={12}>
            <img src="../../oCompany.png" alt="" />
          </Col>
          <Col span={24} lg={12}>
            <Typography.Title level={2} className="!text-white">
              {t(`НашиПартнёры`)}
            </Typography.Title>
            <Typography className="text-white text-sm lg:text-lg">
              {t(
                `Нашими партнёрами являются наиболее серьёзные игроки на мировом  рынке профильного оборудования. Это позволяет нам наладить долгосрочное и успешное сотрудничество, добиться лучших  цен для государственных учреждений здравоохранения, медицинских  центров, лабораторий, а также ветеринарных клиник и кабинетов.  Купить нужную вам технику по оптимальным ценам, выбрать подходящую  модель устройства в рамках бюджета в нашей компании окажется  намного проще. Мы поддерживаем скидки и особые предложения  для наших партнёров, предлагаем оформление аппаратов в лизинг  и готовы предоставить системы в рассрочку на выгодных условиях`
              )}
              .
            </Typography>
          </Col>
        </Row>
      </div>
      <div className="lg:p-14 p-5">
        <Row gutter={[20, 20]}>
          <Col span={24} lg={12}>
            <Typography className="text-3xl md:text-4xl font-semibold">
              {t(`Опытные сотрудники из`)} <br />{" "}
              {t(`производственных компаний`)}
            </Typography>
            <Typography className="text-base md:text-lg leading-6 mt-5 pr-10 lg:pr-28">
              {t(
                `Наши сотрудники имеют огромный опыт работы в сложных условиях,в том числе в разгар пандемии COVID–19. В этот период мы осуществили поставки медицинских аппаратов в новейшие клиники Минобороны в различных регионах страны`
              )}
            </Typography>
          </Col>
          <Col span={24} lg={12}>
            <Row gutter={[20, 20]}>
              <Col lg={12} md={12} span={24}>
                <div className="border rounded-xl">
                  <img
                    src={displayImages[0].src}
                    className="h-64 object-cover rounded-xl w-full"
                    alt=""
                  />
                  <div className="p-5">
                    <Typography.Title level={5} className="!m-0">
                      {t(displayImages[0].name)}
                    </Typography.Title>
                    <Typography className="text-[#7A7687]">
                      {t(displayImages[0].title)}
                    </Typography>
                  </div>
                </div>
              </Col>
              <Col lg={12} span={12} className="hidden md:flex">
                <Row gutter={[10, 10]}>
                  <Col span={16}>
                    <div className="border rounded-xl">
                      <img
                        src={displayImages[1].src}
                        className="h-40 object-cover rounded-xl w-full"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col span={16}>
                    <div className="border rounded-xl">
                      <img
                        src={displayImages[2].src}
                        className="h-40 object-cover rounded-xl w-full"
                        alt=""
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="mt-5">
              <div className="md:flex gap-3 hidden ">
                <div onClick={handlePrev}>
                  <LeftButton icon={GoArrowLeft} size={20} />
                </div>
                <div onClick={handleNext}>
                  <LeftButton icon={GoArrowRight} size={20} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <HomeClient />
      <div className="md:px-14 p-5">
        <HomeCards />
      </div>
      <HomeBrand />
      <Sertifikat />
      <HomeForm />
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};
