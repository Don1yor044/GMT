import { Button, Col, Row, Typography } from "antd";
import { t } from "i18next";
import { BiLogoVk } from "react-icons/bi";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-14 bg-[#088269] !text-white pt-10">
      <Row gutter={[0, 20]}>
        <Col span={5}>
          <div className="pe-16">
            <Typography.Title level={5} className="!text-white">
              {t("Покупателям")}
            </Typography.Title>
            <div className="bg-white h-[1px]"></div>

            <div className="mt-4 flex justify-between ">
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
          <div className="pe-24">
            <Typography.Title level={5} className="!text-white">
              {t(`Каталог`)}
            </Typography.Title>
            <div className="w-full bg-white h-[1px]"></div>

            <div className="mt-4 flex justify-between">
              <div className="flex flex-col gap-1 !text-[#d0cfcde8]">
                <Link to={"/"}>{t(`Реанимация`)}</Link>
                <Link to={"/"}>{t(`Хирургия`)}</Link>
                <Link to={"/"}>{t(`Офтальмология`)}</Link>
                <Link to={"/"}>{t(`ЛабораторнаяДиагностика`)}</Link>
                <Link to={"/"}>{t(`АкушерствоИГинекология`)}</Link>
                <Link to={"/"}>{t(`Гистология`)}</Link>
                <Link to={"/"}>{t(`Косметология`)}</Link>
              </div>
              <div className="flex flex-col gap-1 !text-[#d0cfcde8]">
                <Link to={"/"}>{t(`Орториноларингология`)}</Link>
                <Link to={"/"}>{t(`РентгенологияИТомография`)}</Link>
                <Link to={"/"}>{t(`Стрерилизация`)}</Link>
                <Link to={"/"}>{t(`ФизиотерапияИРеабилитация`)}</Link>
                <Link to={"/"}>{t(`ФункциональнаяДиагностика`)}</Link>
                <Link to={"/"}>{t(`Эндоскопия`)}</Link>
              </div>
              <div className="flex flex-col gap-1 !text-[#d0cfcde8]">
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
          {" "}
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
      <div className="w-full bg-white h-[1px] mt-16 mb-5"></div>
      <Row>
        <Col span={6}>
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
        <Col span={5}>
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
        <Col span={4}>
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
        </Col>
        <Col span={5}>
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
        <Col span={4}>
          <div>
            {" "}
            <Typography.Title level={5} className="!text-white">
              {t(`СпособыОплаты`)}
            </Typography.Title>
            <div className="flex gap-4 items-center">
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
      <div className="mt-10">
        <div className="flex gap-24 items-center">
          <Typography.Title
            level={5}
            className="!text-[#d0cfcde8]"
            style={{ fontWeight: 400 }}
          >
            © 2022 {t(`Медоборудование`)} <br /> {t(`ВсеПраваЗащищены`)}
          </Typography.Title>
          <Typography className="!text-[#d0cfcde8]" style={{ fontSize: 13 }}>
            {t(`ИнформацияФоотер`)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
