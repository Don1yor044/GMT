import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { RiArrowRightSLine } from "react-icons/ri";
import { Col, Dropdown, MenuProps, Row, Typography } from "antd";
import GridCards from "./components";
import CabinetSwiper from "../../components/CabinetSwiper/CabinetSwiper";
import HomeCards from "../../components/Cards/Cards";
import CatalogTovar from "../../components/CatalogTovar/CatalogTover";
import HomeBrand from "../../components/Brend/Brend";
import HomeCompany from "../../components/Company/Company";
import About from "../../components/About";
import HomeForm from "../../components/Form/Form";
import HomeSubscription from "../../components/Subscription";
import Footer from "../../components/Footer";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Catalog = () => {
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
      title: "Лабораторная диагностика",
    },
    {
      id: 5,
      title: "Акушерство и Гинекология",
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
      title: "Рентгенология и томография",
    },
    {
      id: 11,
      title: "Стерилизация",
    },
    {
      id: 12,
      title: "Физиотерапия и реабилитация",
    },
    {
      id: 13,
      title: "Функциональная диагностика",
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
      title: "Кабинеты под ключ",
    },
  ];
  const items2: MenuProps["items"] = [
    {
      label: (
        <div className="flex justify-between w-full items-center">
          Реанимация
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          Хирургия
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          Офтальмология
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          Лабораторная диагностика
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "3",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          Акушерство и Гинекология
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "4",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          Гистология
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "5",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          Косметология
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "6",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          Оториноларингология
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "7",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          Рентгенология и томография
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "8",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          Стерилизация
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "9",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          Физиотерапия и реабилитация
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "10",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          Функциональная диагностика
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "11",
    },
    {
      label: (
        <div className="flex justify-between w-full items-center">
          Эндоскопия
          <RiArrowRightSLine size={20} />
        </div>
      ),
      key: "12",
    },
  ];

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open); // `open` qiymati `true` yoki `false` bo'ladi
  };

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
          <Typography className="font-semibold">Каталог</Typography>
        </div>
        <div className="mt-5">
          <Row gutter={[20, 20]}>
            <Col lg={6} className="hidden xl:block">
              <div className="p-4 border rounded-lg">
                <Typography.Title level={5}>Направления</Typography.Title>
                <hr className="my-4" />

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-1"
                    onClick={() => navigate(`/${item.title}`)} // `item.title` bilan navigate qiladi
                    style={{ cursor: "pointer" }}
                  >
                    <Typography className="text-base">{item.title}</Typography>
                    <RiArrowRightSLine size={19} />{" "}
                  </div>
                ))}
              </div>
            </Col>
            <Col span={24} className="hidden md:flex xl:hidden justify-between">
              <div className="hidden md:flex xl:hidden">
                <Typography className="text-3xl font-semibold">
                  Популярные категории
                </Typography>
              </div>
              <div className=" md:w-[33%] border rounded-xl">
                <Dropdown
                  menu={{ items: items2 }}
                  trigger={["click"]}
                  onOpenChange={handleOpenChange}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <div className="flex justify-between p-3">
                      <Typography className="text-base font-semibold">
                        Направления
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
                <Typography className="font-semibold ">Направления</Typography>
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

export default Catalog;
