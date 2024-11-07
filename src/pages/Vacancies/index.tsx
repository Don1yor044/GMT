import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { RiArrowRightSLine } from "react-icons/ri";
import { Col, Collapse, CollapseProps, Row, Typography } from "antd";
import { IoIosCloseCircle } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import styled from "@emotion/styled";
import { PrimaryButton } from "../../components/Buttons";
import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  TypeSelector,
  YMaps,
} from "@pbe/react-yandex-maps";
import HomeSubscription from "../../components/Subscription";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
interface ItemType {
  key: string;
  label: string;
  children: any;
}
const children = (
  <>
    <div>
      <Typography className="text-[#7A7687] text-base">Обязанности:</Typography>
      <ul className="list-disc list-inside ps-2 mt-2">
        <li>Работа с входящими/исходящими звонками</li>
        <li>Работа с договорами составление/заключение</li>
        <li>Ведение деловой переписки (эл. почта, переписка в мессенджерах)</li>
        <li>Выполнение плановых показателей</li>
      </ul>
    </div>
    <div className="mt-4">
      <Typography className="text-[#7A7687] text-base">Требования:</Typography>
      <ul className="list-disc list-inside ps-2 mt-2">
        <li>Опыт работы телефонных продаж</li>
        <li>Опыт работы в CRM</li>
        <li>Способность восприятия большого объема информации </li>
      </ul>
    </div>
    <div className="mt-4">
      <Typography className="text-[#7A7687] text-base">
        График работы:
      </Typography>
      <ul className="list-disc list-inside ps-2 mt-2">
        <li>Оформление с первого рабочего дня</li>
        <li>00:00 - 23:59</li>
      </ul>
    </div>
    <div className="mt-4">
      <PrimaryButton text="Отправить резюме" />
    </div>{" "}
  </>
);
const items: ItemType[] = [
  {
    key: "1",
    label: "Менеджер по продажам",
    children: children,
  },
  {
    key: "2",
    label: "Специалист по медицинскому оборудованию",
    children: children,
  },
  {
    key: "3",
    label: "Офис менеджер",
    children: children,
  },
  {
    key: "4",
    label: "HR–менеджер",
    children: children,
  },
];
const items2: ItemType[] = [
  {
    key: "1",
    label: "Специалист по медицинскому оборудованию",
    children: children,
  },
  {
    key: "2",
    label: "Офис менеджер",
    children: children,
  },
  {
    key: "3",
    label: "HR–менеджер",
    children: children,
  },
];
const customExpandIcon = ({ isActive }: { isActive?: boolean }) => {
  return isActive ? (
    <IoIosCloseCircle size={40} color="#088269" /> // Ochiq holat
  ) : (
    <CiCirclePlus size={40} /> // Yopiq holat
  );
};
const Vacancies = () => {
  const defaultMarker = [41.326509, 69.228341]; // Default marker koordinatalari

  const translatedItems: CollapseProps["items"] = items.map((item) => ({
    key: item.key,
    label: item.label,
    children: item.children,
  }));
  const translatedItems2: CollapseProps["items"] = items2.map((item) => ({
    key: item.key,
    label: item.label,
    children: item.children,
  }));

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
          <Typography className="font-semibold">Вакансии</Typography>
        </div>
        <div className="mt-20">
          <Row gutter={[20, 20]}>
            <Col span={24} lg={12}>
              <div>
                <Typography className="text-6xl font-semibold">
                  Вакансии
                </Typography>
                <Typography className="text-base sm:text-xl font-semibold mt-3">
                  В «Глобал Медикал Трейд» всегда есть место как для новичков,
                  так и для состоявшихся экспертов. Тем, кто только начинает
                  строить карьеру, мы предлагаем возможность получить ценные
                  знания, а опытным специалистам — расширить компетенции.
                </Typography>
              </div>
            </Col>
            <Col span={24} lg={12}>
              <div>
                <Typography className="text-4xl">
                  Актуальные вакансии
                </Typography>
                <hr className="my-4" />
                <div>
                  <StyledCollapse
                    items={translatedItems}
                    bordered={false}
                    accordion={true}
                    defaultActiveKey={["1"]}
                    expandIconPosition="right"
                    expandIcon={customExpandIcon}
                  />
                </div>
                <div className="mt-10">
                  <Typography className="text-4xl">Архив вакансий</Typography>
                  <hr className="my-4" />
                  <div>
                    <StyledCollapse
                      items={translatedItems2}
                      bordered={false}
                      accordion={true}
                      //   defaultActiveKey={["1"]}
                      expandIconPosition="right"
                      expandIcon={customExpandIcon}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-24">
          <Stylediv>
            <YMaps
              query={{
                apikey: "6a3a7db6-31cf-4fdc-a728-492d5bd481e1",
                lang: "ru_RU",
              }}
            >
              <Map
                defaultState={{
                  center: defaultMarker,
                  zoom: 12,
                  controls: [],
                }}
                className="w-full h-full"
              >
                <FullscreenControl options={{ float: "right" }} />
                <Placemark
                  geometry={defaultMarker}
                  options={{
                    iconImageHref:
                      "https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-green-512.png",
                    iconLayout: "default#image",
                    iconImageSize: [40, 40],
                  }}
                />
                <TypeSelector options={{ float: "left" } as any} />
                <GeolocationControl options={{ float: "left" }} />
              </Map>
            </YMaps>
            <div style={{ position: "absolute", bottom: 20, right: 20 }}>
              <PrimaryButton text="Построить маршрут" />
            </div>
          </Stylediv>
        </div>
      </div>
      <HomeSubscription />
      <Footer />
    </>
  );
};

export default Vacancies;
const StyledCollapse = styled(Collapse)`
  background-color: inherit !important;
  width: 100% !important;
  font-size: 18px;
  &&& .ant-collapse-header {
    /* color: #088269; */
    height: 60px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .ant-collapse-content-box {
    /* color: #cdcdcd; */
    font-size: 16px;
  }
`;
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
