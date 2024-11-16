import { Link } from "react-router-dom";
import { RiArrowRightSLine, RiDownloadLine } from "react-icons/ri";
import { Button, Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Fact } from "@components/fact";
import { Sertifikat } from "@components/sertifikat";
import { HomeForm } from "@components/form";
import { Footer } from "@components/footer/footer";
import { Header } from "@components/header";
import { PrimaryButton, SecondaryButton } from "@components/buttons";

export const Services = () => {
  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      title: "Апробация",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
      img: "../../Rectangle (42).png",
    },
    {
      id: 2,
      title: "Помощь в подборе оборудования",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
      img: "../../Rectangle (46).png",
    },
    {
      id: 3,
      title: "Помощь инженеров в настройке",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
      img: "../../Rectangle (43).png",
    },
    {
      id: 4,
      title: "Пуско-наладочные работы",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
      img: "../../Rectangle (47).png",
    },
    {
      id: 5,
      title: "Обучение работе с оборудованием",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
      img: "../../Rectangle (44).png",
    },
    {
      id: 6,
      title: "Подменный аппарат",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
      img: "../../Rectangle (48).png",
    },

    {
      id: 7,
      title:
        "Работа с учебными центрами повышения квалификации медицинского персонала",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения.",
      img: "../../Rectangle (45).png",
    },

    {
      id: 8,
      title: "Организация обучения врачей на собственной территории",
      desc: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
      img: "../../Rectangle (49).png",
    },
  ];
  return (
    <>
      <Header />
      <div className="px-5 py-2 lg:px-14">
        <div className="flex gap-3 items-center py-2">
          <Link to={"/"} className="text-[#7A7687]">
            {t(`Главная`)}
          </Link>
          <div className="text-[#7A7687]">
            <RiArrowRightSLine size={20} />{" "}
          </div>
          <Typography className="font-semibold">{t(`Услуги`)}</Typography>
        </div>
        <div className="mt-5 md:mt-10 lg:mt-20">
          <Typography className="text-5xl mb-10">{t(`Услуги`)}</Typography>
          <Row gutter={[20, 20]}>
            {items.map((item) => (
              <Col span={24} md={12}>
                <div className="bg-white h-full rounded-lg border">
                  <Row gutter={[20, 20]}>
                    <Col span={24} className="flex lg:hidden">
                      <img
                        src={item.img}
                        className="h-52 w-full rounded-t-lg object-cover"
                        alt=""
                      />
                    </Col>
                    <Col span={24} lg={13} xl={15} className="relative">
                      <div className="lg:p-5 px-5 ">
                        <div>
                          <Typography.Title level={4}>
                            {t(item.title)}
                          </Typography.Title>
                          <Typography className="text-[#7A7687]">
                            {t(`ОписаниеУслуги`)}
                          </Typography>
                          <Typography className="text-sm md:text-xl !mt-1 !text-[#7A7687] lg:mt-1 mp:mb-20">
                            {t(item.desc)}{" "}
                          </Typography>
                        </div>

                        <div className="absolute bottom-5">
                          <SecondaryButton text={t("Заказать")} />
                        </div>
                      </div>
                    </Col>
                    <Col span={24} lg={11} xl={9} className="hidden lg:flex">
                      <img
                        src={item.img}
                        className="xl:min-h-[360px] lg:min-h-[460px] w-full object-cover rounded-r-lg"
                        alt=""
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="my-20">
          <Fact />
        </div>
        <div>
          <Row gutter={[20, 20]}>
            <Col span={24} md={19} lg={10} xl={12} sm={24}>
              <Typography className="text-xl md:text-4xl font-semibold pr-5">
                {t(`ВыСможете`)}
                <span className="text-[#088269]">
                  {t(`оставитьЗаявку`)}
                </span>{" "}
                {t(`на услуги и скачать бланк для заполнения`)}
              </Typography>
            </Col>
            <Col span={5} className="hidden lg:hidden md:flex h-14">
              <div className="mt-5 flex justify-end">
                <PrimaryButton text="Оставить заявку" />
              </div>
            </Col>
            <Col span={24} md={24} lg={14} xl={12} sm={24}>
              <Row gutter={[20, 20]}>
                <Col sm={12} span={24}>
                  <div className="bg-white flex justify-between w-full p-4 items-center border rounded-lg">
                    <Typography.Title level={5}>
                      {t(`БланкДляЗаполнения`)}
                    </Typography.Title>{" "}
                    <Button type="default" className="p-2">
                      <RiDownloadLine size={18} />
                    </Button>
                  </div>
                </Col>
                <Col sm={12} span={24}>
                  <div className="bg-white flex justify-between w-full p-4 items-center border rounded-lg">
                    <Typography.Title level={5}>
                      {t(`ЗаполненнаяФорма`)}
                    </Typography.Title>{" "}
                    <Button type="default" className="p-2">
                      <RiDownloadLine size={18} />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="mt-5 flex md:hidden lg:flex justify-end">
            <PrimaryButton text={t("ОставитьЗаявку")} />
          </div>
        </div>
      </div>
      <Sertifikat />
      <HomeForm />
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
};
