import { useNavigate } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { Col, Dropdown, MenuProps, Row, Typography } from "antd";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { GridCards } from "./components";
import { CabinetSwiper } from "@components/cabinetSwiper";
import { HomeCards } from "@components/cards";
import { CatalogTovar } from "@components/catalogTovar";
import { HomeBrand } from "@components/brend";
import { HomeCompany } from "@components/company";
import { About } from "@components/about";
import { HomeForm } from "@components/form";
import { HomeSubscription } from "@components/subscription";
import { Footer } from "@components/footer/footer";
import { Header } from "@components/header";
import { BreadcrumbTwo } from "@components/breadCrumb";
export const Catalog = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const items = [
    {
      id: 1,
      title: "Реанимация",
    },
    {
      id: 2,
      title: "Хирургия",
    },
    {
      id: 3,
      title: "Офтальмология",
    },
    {
      id: 4,
      title: "ЛабораторнаяДиагностика",
    },
    {
      id: 5,
      title: "АкушерствоИГинекология",
    },
    {
      id: 6,
      title: "Гистология",
    },
    {
      id: 7,
      title: "Косметология",
    },
    {
      id: 9,
      title: "Оториноларингология",
    },
    {
      id: 10,
      title: "РентгенологияИТомография",
    },
    {
      id: 11,
      title: "Стерилизация",
    },
    {
      id: 12,
      title: "ФизиотерапияИРеабилитация",
    },
    {
      id: 13,
      title: "ФункциональнаяДиагностика",
    },
    {
      id: 14,
      title: "Эндоскопия",
    },
    {
      id: 15,
      title: "Новинки",
    },
    {
      id: 16,
      title: "Распродажи",
    },
    {
      id: 17,
      title: "КабинетыКлюч",
    },
  ];
  const items2: MenuProps["items"] = [
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Реанимация`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Хирургия`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Офтальмология`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`ЛабораторнаяДиагностика`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "3",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`АкушерствоИГинекология`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "4",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Гистология`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "5",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Косметология`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "6",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Оториноларингология`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "7",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`РентгенологияИТомография`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "8",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Стерилизация`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "9",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`ФизиотерапияИРеабилитация`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "10",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`ФункциональнаяДиагностика`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "11",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          {t(`Эндоскопия`)}
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "12",
    },
  ];

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <>
      <Header />
      <div className="px-5 py-2 lg:px-14">
        <BreadcrumbTwo currentPage="Каталог" />
        <div className="mt-5">
          <Row gutter={[20, 20]}>
            <Col lg={6} className="hidden xl:block">
              <div className="p-4 border rounded-lg">
                <Typography.Title level={5}>
                  {t(`Направления`)}
                </Typography.Title>
                <hr className="my-4" />

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-1 cursor-pointer"
                    onClick={() => navigate(`/${item.title}`)} // `item.title` bilan navigate qiladi
                  >
                    <Typography className="text-base">
                      {t(item.title)}
                    </Typography>
                    <RiArrowRightSLine size={19} />{" "}
                  </div>
                ))}
              </div>
            </Col>
            <Col span={24} className="hidden md:flex xl:hidden justify-between">
              <div className="hidden md:flex xl:hidden">
                <Typography className="text-3xl font-semibold">
                  {t(`ПопулярныеКатегории`)}
                </Typography>
              </div>
              <div className=" md:w-[33%] border rounded-xl">
                <Dropdown
                  menu={{ items: items2 }}
                  trigger={["click"]}
                  onOpenChange={handleOpenChange}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <div className="flex justify-between p-3 items-center">
                      <Typography className="text-base font-semibold">
                        {t(`Направления`)}
                      </Typography>
                      {isOpen ? (
                        <IoIosArrowUp size={18} />
                      ) : (
                        <IoIosArrowDown size={18} />
                      )}
                    </div>
                  </a>
                </Dropdown>
              </div>
            </Col>
            <Col span={24} className="flex md:hidden cursor-pointer">
              <div className="flex justify-center border w-full p-3">
                <Typography className="font-semibold">
                  {t(`Направления`)}
                </Typography>
              </div>
            </Col>
            <Col span={24} lg={24} xl={18}>
              <GridCards />
            </Col>
          </Row>
        </div>
        <CabinetSwiper />
        <div className="mt-32">
          <HomeCards />
        </div>{" "}
      </div>
      <div className="mt-32">
        <CatalogTovar />
      </div>
      <HomeBrand />
      <HomeCompany />
      <div className="mt-28">
        <About />
      </div>
      <HomeForm />
      <HomeSubscription />
      <Footer />
    </>
  );
};
