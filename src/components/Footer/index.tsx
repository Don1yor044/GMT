import styled from "@emotion/styled";
import { Button, Col, Collapse, CollapseProps, Row, Typography } from "antd";
import { t } from "i18next";
import { BiLogoVk } from "react-icons/bi";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  interface ItemType {
    key: string;
    label: string;
    children?: any;
  }
  const items: ItemType[] = [
    {
      key: "1",
      label: "Покупателям",
      children: (
        <div className="flex-col flex">
          <Link to={"/"} className="text-white">
            О компани
          </Link>
          <Link to={"/"} className="text-white">
            Сертификаты
          </Link>
          <Link to={"/"} className="text-white">
            Сертификаты
          </Link>
          <Link to={"/"} className="text-white">
            Вакансии
          </Link>
          <Link to={"/"} className="text-white">
            Гарантии
          </Link>
          <Link to={"/"} className="text-white">
            Услуги
          </Link>
          <Link to={"/"} className="text-white">
            Акции
          </Link>
          <Link to={"/"} className="text-white">
            Доставка
          </Link>
          <Link to={"/"} className="text-white">
            Оплата
          </Link>
          <Link to={"/"} className="text-white">
            Возврат
          </Link>
          <Link to={"/"} className="text-white">
            FAQ
          </Link>
          <Link to={"/"} className="text-white">
            Лизинг
          </Link>
          <Link to={"/"} className="text-white">
            Отзывы
          </Link>
          <Link to={"/"} className="text-white">
            Блог
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      label: "Каталог",
      children: (
        <div className="flex-col flex">
          <Link to={"/"} className="text-white">
            Реанимация
          </Link>
          <Link to={"/"} className="text-white">
            Хирургия
          </Link>
          <Link to={"/"} className="text-white">
            Офтальмология
          </Link>
          <Link to={"/"} className="text-white">
            Лабораторная диагностика
          </Link>
          <Link to={"/"} className="text-white">
            Акушерство и Гинекология
          </Link>
          <Link to={"/"} className="text-white">
            Гистология
          </Link>
          <Link to={"/"} className="text-white">
            Косметология
          </Link>
          <Link to={"/"} className="text-white">
            Орториноларингология
          </Link>
          <Link to={"/"} className="text-white">
            Рентгенология и томография
          </Link>
          <Link to={"/"} className="text-white">
            Стрерилизация
          </Link>
          <Link to={"/"} className="text-white">
            Физиотерапия и реабилитация
          </Link>
          <Link to={"/"} className="text-white">
            Функциональная диагностика
          </Link>
          <Link to={"/"} className="text-white">
            Эндоскопия
          </Link>
          <Link to={"/"} className="text-white">
            Новинки
          </Link>
          <Link to={"/"} className="text-white">
            Распродажи
          </Link>
          <Link to={"/"} className="text-white">
            Кабинеты под ключ
          </Link>
          <Link to={"/"} className="text-white">
            Скачать каталог
          </Link>
        </div>
      ),
    },
    {
      key: "3",
      label: "Контакты",
      children: (
        <div className="flex-col flex">
          <Typography.Title level={5} className="!text-white">
            {t(`Адрес`)}:
          </Typography.Title>
          <Typography className="text-[#d0cfcde8]">
            {t(`г. Москва, ул. Московская, д. 35`)}{" "}
          </Typography>
          <div className="!mt-5 ">
            <Link to={"/"} className="flex gap-1 items-center font-semibold">
              {t(`КартаПроезда`)}
              <MdOutlineArrowOutward size={18} />
            </Link>
            <Typography.Title
              level={5}
              style={{
                fontWeight: 400,
                color: "#d0cfcde8",
                marginTop: 20,
                marginBottom: 0,
              }}
            >
              {t(`ГрафикРаботы`)}:
            </Typography.Title>
            <Typography className="text-[#d0cfcde8] !mt-0 mb-5">
              {t(`РабочееВремя`)} <br /> {t(`Отдых`)}
            </Typography>
            <Typography className="text-[#d0cfcde8]">
              +7 000-000-00-00
            </Typography>
            <Typography className="text-[#d0cfcde8]">
              +7 495-000-00-00
            </Typography>
            <Typography className="text-[#d0cfcde8]">
              8 800-000-00-00
            </Typography>
            <Typography className="text-[#d0cfcde8] cursor-pointer">
              info@mail.ru
            </Typography>
          </div>
        </div>
      ),
    },
  ];

  const translatedItems: CollapseProps["items"] = items.map((item) => ({
    key: item.key,
    label: t(item.label),
    children: item.children,
  }));
  const customExpandIcon = ({ isActive }: { isActive?: boolean }) => {
    return isActive ? (
      <HiOutlineMinus size={20} /> // Ochiq holat
    ) : (
      <GoPlus size={20} /> // Yopiq holat
    );
  };
  return (
    <div className="px-5 md:px-5 lg:px-14 bg-[#088269] !text-white pt-10">
      <Row gutter={[0, 20]} className="hidden md:flex">
        <Col span={5} className="md:bg-red-400 lg:bg-blue-500 sm:bg-yellow-100">
          <div className="pe-5 lg:pe-12 xl:pe-16">
            <Typography.Title level={5} className="!text-white">
              {t("Покупателям")}
            </Typography.Title>
            <div className="bg-white h-[1px] w-full"></div>

            <div className="mt-4 flex justify-between flex-wrap">
              <div className="flex flex-col gap-1 !text-[#d0cfcde8] ">
                <Link to={"/"}>{t("Окомпании")}</Link>
                <Link to={"/"}>{t("Сертификаты")}</Link>
                <Link to={"/"}>{t("Вакансии")}</Link>
                <Link to={"/"}>{t("Гарантии")}</Link>
                <Link to={"/"}>{t("Услуги")}</Link>
                <Link to={"/"}>{t("Акции")}</Link>
                <Link to={"/"}>{t("Доставка")}</Link>
              </div>
              <div className="flex flex-col gap-1 !text-[#d0cfcde8] ">
                <Link to={"/"}>{t("Оплата")}</Link>
                <Link to={"/"}>{t("Возврат")}</Link>
                <Link to={"/"}>{t("FAQ")}</Link>
                <Link to={"/"}>{t("Лизинг")}</Link>
                <Link to={"/"}>{t("Отзывы")}</Link>
                <Link to={"/"}>{t("Блог")}</Link>
              </div>
            </div>
          </div>
        </Col>{" "}
        <Col span={14} offset={1}>
          <div className="pe-10 md:pe-24 mp:pe-10">
            <Typography.Title level={5} className="!text-white">
              {t(`Каталог`)}
            </Typography.Title>
            <div className="w-full bg-white h-[1px]"></div>

            <div className="mt-4 flex justify-between">
              <div className="flex flex-col gap-1 text-[#d0cfcde8]">
                <Link to={"/"}>{t(`Реанимация`)}</Link>
                <Link to={"/"}>{t(`Хирургия`)}</Link>
                <Link to={"/"}>{t(`Офтальмология`)}</Link>
                <Link to={"/"}>{t(`ЛабораторнаяДиагностика`)}</Link>
                <Link to={"/"}>{t(`АкушерствоИГинекология`)}</Link>
                <Link to={"/"}>{t(`Гистология`)}</Link>
                <Link to={"/"}>{t(`Косметология`)}</Link>

                <Link to={"/"} className="hidden md:flex lg:hidden">
                  {t(`Новинки`)}
                </Link>
                <Link to={"/"} className="hidden md:flex lg:hidden">
                  {t(`Распродажи`)}
                </Link>
              </div>
              <div className="flex flex-col gap-1 text-[#d0cfcde8]">
                <Link to={"/"}>{t(`Орториноларингология`)}</Link>
                <Link to={"/"}>{t(`РентгенологияИТомография`)}</Link>
                <Link to={"/"}>{t(`Стрерилизация`)}</Link>
                <Link to={"/"}>{t(`ФизиотерапияИРеабилитация`)}</Link>
                <Link to={"/"}>{t(`ФункциональнаяДиагностика`)}</Link>
                <Link to={"/"}>{t(`Эндоскопия`)}</Link>

                <Link to={"/"} className="hidden md:flex lg:hidden">
                  {t(`Стрерилизация`)}
                </Link>
                <Link to={"/"} className="hidden md:flex lg:hidden">
                  {t(`КабинетыПодключ`)}
                </Link>
                <Link to={"/"} className="hidden md:flex lg:hidden">
                  {t(`СкачатьКаталог`)}
                </Link>
              </div>
              <div className="flex flex-col gap-1 text-[#d0cfcde8] md:hidden lg:flex">
                <Link to={"/"}>{t(`Новинки`)}</Link>
                <Link to={"/"}>{t(`Распродажи`)}</Link>
                <Link to={"/"}>{t(`Стрерилизация`)}</Link>
                <Link to={"/"}>{t(`КабинетыПодключ`)}</Link>
                <Link to={"/"}>{t(`СкачатьКаталог`)}</Link>
              </div>
            </div>
          </div>
        </Col>{" "}
        <Col span={4}>
          <Typography.Title level={5} className="!text-white">
            {t(`Контакты`)}
          </Typography.Title>
          <div className="w-full bg-white h-[1px]"></div>
          <div className="mt-4 text-white">
            <Typography.Title level={5} className="!text-white">
              {t(`Адрес`)}:
            </Typography.Title>
            <Typography className="text-[#d0cfcde8]">
              {t(`г. Москва, ул. Московская, д. 35`)}{" "}
            </Typography>
            <div className="!mt-5 ">
              <Link to={"/"} className="flex gap-1 items-center font-semibold">
                {t(`КартаПроезда`)}
                <MdOutlineArrowOutward size={18} />
              </Link>
              <Typography.Title
                level={5}
                style={{
                  fontWeight: 400,
                  color: "#d0cfcde8",
                  marginTop: 20,
                  marginBottom: 0,
                }}
              >
                {t(`ГрафикРаботы`)}:
              </Typography.Title>
              <Typography className="text-[#d0cfcde8] !mt-0 mb-5">
                {t(`РабочееВремя`)} <br /> {t(`Отдых`)}
              </Typography>
              <Typography className="text-[#d0cfcde8]">
                +7 000-000-00-00
              </Typography>
              <Typography className="text-[#d0cfcde8]">
                +7 495-000-00-00
              </Typography>
              <Typography className="text-[#d0cfcde8]">
                8 800-000-00-00
              </Typography>
              <Typography className="text-[#d0cfcde8] cursor-pointer">
                info@mail.ru
              </Typography>
            </div>
          </div>{" "}
        </Col>
      </Row>
      <div className="w-full bg-white h-[1px] mt-16 mb-5 mp:hidden sm:flex"></div>
      <Row gutter={[0, 20]}>
        <Col span={24} md={6} sm={24}>
          <div>
            <img src="../../FooterLogo.png" alt="" />
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] mt-2"
              style={{ fontWeight: 400 }}
            >
              {t(`ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»`)}
            </Typography.Title>
          </div>
        </Col>
        <Col className="flex md:hidden sm:flex text-white" span={24}>
          <StyledCollapse
            items={translatedItems}
            bordered={false}
            accordion={true}
            defaultActiveKey={["1"]}
            expandIconPosition="right"
            expandIcon={customExpandIcon}
            className="w-full"
          />
        </Col>

        <Col span={24} md={5} sm={24}>
          <div>
            <Typography.Title level={4} className="!text-white">
              {t(`МыВСоцсетях`)}
            </Typography.Title>

            <div className="flex gap-3">
              <Button
                type="text"
                className="bg-white px-1.5 py-3 text-[#088269]"
              >
                <BiLogoVk size={22} />
              </Button>
              <Button
                type="text"
                className="bg-white p-1.5 py-3 text-[#088269]"
              >
                <FaTelegramPlane size={22} />
              </Button>
              <Button
                type="text"
                className="bg-white p-1.5 py-3 text-[#088269]"
              >
                <FaWhatsapp size={22} />
              </Button>
            </div>
          </div>
        </Col>
        <Col span={24} lg={4} md={8} sm={24}>
          <div>
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] "
              style={{ fontWeight: 400 }}
            >
              {t(`ПартнерскаяПрограмма`)}
            </Typography.Title>
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] !mt-0"
              style={{ fontWeight: 400 }}
            >
              {t(`ОптовыеПродажи`)}
            </Typography.Title>
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] !m-0"
              style={{ fontWeight: 400 }}
            >
              {t(`Реквизиты`)}
            </Typography.Title>
          </div>
          <div className="lg:hidden md:flex flex-col  text-start mt-2 ">
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] "
              style={{ fontWeight: 400 }}
            >
              {t(`ПолитикаКонфиденциальности`)}
            </Typography.Title>
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] !mt-0"
              style={{ fontWeight: 400 }}
            >
              {t(`УсловияСоглашения`)}
            </Typography.Title>
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] !m-0"
              style={{ fontWeight: 400 }}
            >
              {t(`КартаСайта`)}
            </Typography.Title>
          </div>
        </Col>
        <Col span={24} md={5} sm={24} className="hidden lg:flex">
          <div className="flex flex-col  text-start">
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] "
              style={{ fontWeight: 400 }}
            >
              {t(`ПолитикаКонфиденциальности`)}
            </Typography.Title>
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] !mt-0"
              style={{ fontWeight: 400 }}
            >
              {t(`УсловияСоглашения`)}
            </Typography.Title>
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] !m-0"
              style={{ fontWeight: 400 }}
            >
              {t(`КартаСайта`)}
            </Typography.Title>
          </div>
        </Col>
        <Col span={24} md={4} sm={24}>
          <div>
            {" "}
            <Typography.Title level={5} className="!text-white">
              {t(`СпособыОплаты`)}
            </Typography.Title>
            <div className="flex gap-4 items-center flex-wrap">
              <img
                src="../../mastercard.png"
                style={{
                  width: "50px",
                  height: "25px",
                  objectFit: "contain",
                }}
                alt="masterCard"
              />
              <img
                src="../../visa.png"
                style={{
                  width: "50px",
                  height: "25px",
                  objectFit: "contain",
                }}
                alt=""
              />
              <img
                src="../../mir.png"
                style={{
                  width: "50px",
                  height: "25px",
                  objectFit: "contain",
                }}
                alt=""
              />
            </div>
          </div>
        </Col>
      </Row>
      <div className="mt-10 md:mt-10 sm:pb-24 md:pb-0 pb-24">
        <Row>
          <Col md={6} sm={24} span={24}>
            <div>
              <Typography.Title
                level={5}
                className="!text-[#d0cfcde8]"
                style={{ fontWeight: 400 }}
              >
                © 2022 {t(`Медоборудование`)} <br /> {t(`ВсеПраваЗащищены`)}
              </Typography.Title>
            </div>
          </Col>
          <Col md={18} sm={24} span={24}>
            <div className="md:mt-0 mt-5">
              <Typography
                className="!text-[#d0cfcde8]"
                style={{ fontSize: 13 }}
              >
                {t(`ИнформацияФоотер`)}
              </Typography>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
const StyledCollapse = styled(Collapse)`
  background-color: inherit !important;
  font-size: 18px;
  &&& .ant-collapse-header {
    color: white;
    height: 60px;
    display: flex;
    align-items: center;
  }
  .ant-collapse-content-box {
    color: #cdcdcd;
    font-size: 16px;
  }
`;
