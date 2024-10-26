import { Button, Col, Row, Typography } from "antd";
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
              Покупателям
            </Typography.Title>
            <div className="bg-white h-[1px]"></div>

            <div className="mt-4 flex justify-between ">
              <div className="flex flex-col gap-1 !text-[#d0cfcde8] ">
                <Link to={"/"}>Окомпании</Link>
                <Link to={"/"}>Сертификаты</Link>
                <Link to={"/"}>Вакансии</Link>
                <Link to={"/"}>Гарантии</Link>
                <Link to={"/"}>Услуги</Link>
                <Link to={"/"}>Акции</Link>
                <Link to={"/"}>Доставка</Link>
              </div>
              <div className="flex flex-col gap-1 !text-[#d0cfcde8] ">
                <Link to={"/"}>Оплата</Link>
                <Link to={"/"}>Возврат</Link>
                <Link to={"/"}>FAQ</Link>
                <Link to={"/"}>Лизинг</Link>
                <Link to={"/"}>Отзывы</Link>
                <Link to={"/"}>Блог</Link>
              </div>
            </div>
          </div>
        </Col>{" "}
        <Col span={14} offset={1}>
          <div className="pe-24">
            <Typography.Title level={5} className="!text-white">
              Каталог
            </Typography.Title>
            <div className="w-full bg-white h-[1px]"></div>

            <div className="mt-4 flex justify-between ">
              <div className="flex flex-col gap-1 !text-[#d0cfcde8] ">
                <Link to={"/"}>Реанимация</Link>
                <Link to={"/"}>Хирургия</Link>
                <Link to={"/"}>Офтальмология</Link>
                <Link to={"/"}>Лабораторная диагностика</Link>
                <Link to={"/"}>Акушерство и Гинекология</Link>
                <Link to={"/"}>Гистология</Link>
                <Link to={"/"}>Косметология</Link>
              </div>
              <div className="flex flex-col gap-1 !text-[#d0cfcde8] ">
                <Link to={"/"}>Орториноларингология</Link>
                <Link to={"/"}>Рентгенология и томография</Link>
                <Link to={"/"}>Стрерилизация</Link>
                <Link to={"/"}>Физиотерапия и реабилитация</Link>
                <Link to={"/"}>Функциональная диагностика</Link>
                <Link to={"/"}>Эндоскопия</Link>
              </div>
              <div className="flex flex-col gap-1 !text-[#d0cfcde8] ">
                <Link to={"/"}>Новинки</Link>
                <Link to={"/"}>Распродажи</Link>
                <Link to={"/"}>Стрерилизация</Link>
                <Link to={"/"}>Кабинеты под ключ</Link>
                <Link to={"/"}>Скачать каталог</Link>
              </div>
            </div>
          </div>
        </Col>{" "}
        <Col span={4}>
          {" "}
          <Typography.Title level={5} className="!text-white">
            Контакты
          </Typography.Title>
          <div className="w-full bg-white h-[1px]"></div>
          <div className="mt-4 text-white">
            <Typography.Title level={5} className="!text-white">
              Адрес:
            </Typography.Title>
            <Typography className="text-[#d0cfcde8]">
              г. Москва, ул. Московская, д. 35{" "}
            </Typography>
            <div className="!mt-5 ">
              <Link to={"/"} className="flex gap-1 items-center font-semibold">
                Карта проезда
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
                График работы:
              </Typography.Title>
              <Typography className="text-[#d0cfcde8] !mt-0 mb-5">
                Пн-Пт с 09:00-19:00, <br /> Сб-Вс - выходной
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
              <Typography className="text-[#d0cfcde8]">info@mail.ru</Typography>
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
              ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»
            </Typography.Title>
          </div>
        </Col>
        <Col span={5}>
          <div>
            <Typography.Title level={4} className="!text-white">
              Мы в соцсетях
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
              Партнерская программа
            </Typography.Title>
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] !mt-0"
              style={{ fontWeight: 400 }}
            >
              Оптовые продажи
            </Typography.Title>
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] !m-0"
              style={{ fontWeight: 400 }}
            >
              Реквизиты
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
              Политика конфиденциальности
            </Typography.Title>
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] !mt-0"
              style={{ fontWeight: 400 }}
            >
              Условия соглашения
            </Typography.Title>
            <Typography.Title
              level={5}
              className="!text-[#d0cfcde8] !m-0"
              style={{ fontWeight: 400 }}
            >
              Карта сайта
            </Typography.Title>
          </div>
        </Col>
        <Col span={4}>
          <div>
            {" "}
            <Typography.Title level={5} className="!text-white">
              Способы оплаты
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
            © 2022 Медоборудование <br /> Все права защищены
          </Typography.Title>
          <Typography className="!text-[#d0cfcde8]" style={{ fontSize: 13 }}>
            Информация на данном сайте носит справочный характер и не является
            публичной офертой, определяемой положениями Статьи 437 Гражданского
            кодекса Российской Федерации
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
