import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { RiArrowRightSLine } from "react-icons/ri";
import {  Col, Row, Typography } from "antd";
import {
  FullscreenControl,
  Map,
  Placemark,
  TypeSelector,
  YMaps,
} from "@pbe/react-yandex-maps";
import styled from "@emotion/styled";
import { PrimaryButton } from "../../components/Buttons";
import Cards from "./components/cards";
import About from "../../components/About";
import Document from "./components/document";
import DeliveryForm from "./components/form";
import HomeSubscription from "../../components/Subscription";
import Footer from "../../components/Footer";

const Delivery = () => {
  return (
    <>
      <Header />
      <div className="px-5 py-2 lg:px-14">
        <div className="flex gap-3 items-center py-2">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <div className="text-[#7A7687]">
            <RiArrowRightSLine size={20} />{" "}
          </div>
          <Typography className="font-semibold">Доставка</Typography>
        </div>
        <div className="mt-5 md:mt-10 lg:mt-20">
          <Typography className="!mb-10 text-2xl sm:text-4xl  lg:text-5xl font-semibold">
            Информация о доставке
          </Typography>
          <Stylediv>
            <YMaps>
              <Map
                defaultState={{
                  center: [41.326509, 69.228341],
                  zoom: 12,
                  controls: [],
                }}
                className="w-full h-full"
              >
                <FullscreenControl options={{ float: "right" }} />
                <Placemark
                  geometry={[41.326509, 69.228341]}
                  options={{
                    iconImageHref:
                      "https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-green-512.png", // Bu yerda icon o'rniga preset tanlashingiz mumkin
                    iconLayout: "default#image",
                    iconImageSize: [40, 40], // Ikona o'lchami
                  }}
                />
                <TypeSelector options={{ float: "left" } as any} />
              </Map>
            </YMaps>
            <div style={{ position: "absolute", bottom: 20, right: 20 }}>
              <PrimaryButton text="Пункт выдачи" />
            </div>
          </Stylediv>
        </div>
        <div className="flex h-full w-full justify-end items-end mt-10">
          <div className="flex justify-end w-[640px]">
            <Typography className="text-start  text-base font-semibold">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись с
              вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров и
              ЛОР комбайнов. Переход на полностью цифровую платформу при
              диагностике и лечении заболеваний также стал серьёзным испытанием
              для большинства больниц и частных клиник.
            </Typography>
          </div>
        </div>
        <div className="mt-28">
          <Cards />
        </div>
        <div className="my-28">
          <Row gutter={[20, 20]}>
            <Col span={12} lg={12} xs={24}>
              <div>
                <Typography.Title
                  level={2}
                  className="2xl:pr-80 xl:pr-56 lg:pr-48"
                >
                  Правила получения товара в пункте выдачи
                </Typography.Title>

                <Typography.Title level={5} className="2xl:pr-40">
                  Учитывая стремительное развитие мировых медицинских
                  технологий, врачи в Российской Федерации и соседних странах
                  столкнулись с вызовом, требующим обновления приборов.
                </Typography.Title>
              </div>
            </Col>
            <Col span={12} lg={12} xs={24} md={18}>
              <div>
                <hr className="mb-7" />
                <Typography.Title level={4}>
                  Подготовить документы
                </Typography.Title>
                <Typography.Title level={5} className="!text-[#7A7687] !m-0">
                  Предварительно ознакомиться с условиями выдачи грузов на сайте
                  и подготовьте нужные документы
                </Typography.Title>
              </div>
              <div>
                <hr className="my-7" />
                <Typography.Title level={4}>Проверка упаковки</Typography.Title>
                <Typography.Title level={5} className="!text-[#7A7687] !m-0">
                  При получении необходимо внимательно осмотреть упаковку груза
                  на наличие механических повреждений и нарушений целостности
                  упаковки
                </Typography.Title>
              </div>
              <div>
                <hr className="my-7" />
                <Typography.Title level={4}>Проверка товара</Typography.Title>
                <Typography.Title level={5} className="!text-[#7A7687] !m-0">
                  Вскрыть каждую упаковку и проверите товар по количеству
                  согласно накладной поставщика и на наличие повреждений товара
                  внутри тары
                </Typography.Title>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <About />
      <div className="px-5 py-2 lg:px-14">
        <div className="pt-20">
          <div className="py-5">
            <Row gutter={[20, 20]}>
              <Col span={24} lg={12} md={24}>
                <Typography className="!mb-10 xl:text-3xl lg:text-2xl text-2xl font-semibold">
                  Вы сможете забрать оборудование <br />
                  <span className="text-[#088269]">самостоятельно</span> из
                  нашего офиса
                </Typography>
              </Col>
              <Col span={11} className="hidden lg:md:block  mp:hidden">
                <div className="flex gap-5">
                  <div className="border w-full bg-white rounded-xl p-5">
                    <Typography.Title level={5}>Контакты</Typography.Title>
                    <Typography className="text-[#7A7687]">
                      +7 (000) 000-00-00
                    </Typography>
                    <Typography className="text-[#7A7687]">
                      info@mail.ru
                    </Typography>
                  </div>
                  <div className="border w-full bg-white rounded-xl p-5">
                    <Typography.Title level={5}>Режим работы</Typography.Title>
                    <Typography className="text-[#7A7687]">
                      пн-пт: 09:00-19:00
                    </Typography>
                    <Typography className="text-[#7A7687]">
                      сб-вс: выходной
                    </Typography>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Stylediv>
            <YMaps>
              <Map
                defaultState={{
                  center: [41.326509, 69.228341],
                  zoom: 12,
                  controls: [],
                }}
                className="w-full h-full"
              >
                <FullscreenControl options={{ float: "right" }} />
                <Placemark
                  geometry={[41.326509, 69.228341]}
                  options={{
                    iconImageHref:
                      "https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-green-512.png", // Bu yerda icon o'rniga preset tanlashingiz mumkin
                    iconLayout: "default#image",
                    iconImageSize: [40, 40], // Ikona o'lchami
                  }}
                />
                <TypeSelector options={{ float: "left" } as any} />
              </Map>
            </YMaps>
            <div style={{ position: "absolute", bottom: 20, right: 20 }}>
              <PrimaryButton text="Построить маршрут" />
            </div>
          </Stylediv>
          <div className="block lg:hidden mt-6">
            <Row gutter={[20, 20]}>
              <Col span={24} md={12} sm={12}>
                <div className="border w-full bg-white rounded-xl p-6">
                  <Typography.Title level={5}>Контакты</Typography.Title>
                  <Typography className="text-[#7A7687]">
                    +7 (000) 000-00-00
                  </Typography>
                  <Typography className="text-[#7A7687]">
                    info@mail.ru
                  </Typography>
                </div>
              </Col>
              <Col span={24} md={12} sm={12}>
                <div className="border w-full bg-white rounded-xl p-6">
                  <Typography.Title level={5}>Режим работы</Typography.Title>
                  <Typography className="text-[#7A7687]">
                    пн-пт: 09:00-19:00
                  </Typography>
                  <Typography className="text-[#7A7687]">
                    сб-вс: выходной
                  </Typography>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Document />
      <DeliveryForm />
      <HomeSubscription />
      <Footer />
    </>
  );
};

export default Delivery;

const Stylediv = styled.div`
  max-height: 450px !important;
  height: 450px !important;
  width: 100%;
  position: relative;
  .ymaps-2-1-79-gotoymaps {
    display: none;
  }
  .ymaps-2-1-79-gototech {
    display: none;
  }
  .ymaps-2-1-79-copyright__content-cell {
    display: none;
  }
`;
