/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {
  Button,
  Drawer,
  Dropdown,
  Menu,
  MenuProps,
  Space,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsGlobe, BsSearch } from "react-icons/bs";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaCaretUp, FaRegHeart, FaRegUser, FaSortDown } from "react-icons/fa";
import { FiChevronDown, FiChevronUp, FiMenu } from "react-icons/fi";
import { LuBarChartBig, LuMapPin } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { PrimaryButton, PrimaryButtonMini, TertiaryButton } from "../buttons";
import { PiPhoneLight } from "react-icons/pi";
import "./index.css";
import { TiHomeOutline } from "react-icons/ti";
import { RiMenuSearchLine } from "react-icons/ri";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [visible, setVisible] = useState(false); // Dropdown holatini saqlash
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("Menu item clicked:", e);
    setVisible(false); // Menu item tanlanganda dropdownni yopamiz
  };
  const handleDropdownVisibleChange = (visible: boolean) => {
    setVisible(visible); // Dropdownning holatini yangilash
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language).catch((error) => {
      console.error("Error changing language: ", error);
    });
    localStorage.setItem("selectedLanguage", language); // Tanlangan tilni saqlash
  };
  const language = localStorage.getItem("selectedLanguage");

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    } else {
      i18n.changeLanguage("Ru");
    }
  }, [language, i18n]);

  const items: MenuProps["items"] = [
    {
      label: <Link to="/hero">О компании</Link>,
      key: "0",
    },
    {
      label: <Link to="/vacancies">Вакансии</Link>,
      key: "1",
    },
    {
      label: <Link to="/">Отзывы</Link>,
      key: "2",
    },
    {
      label: <Link to="/certificates">Сертификаты</Link>,
      key: "3",
    },
    {
      label: <Link to="/">Партнерские программы</Link>,
      key: "4",
    },

    {
      label: <Link to="/">Оптовые продажи</Link>,
      key: "5",
    },
    {
      label: <Link to="/">Лизинг</Link>,
      key: "6",
    },
  ];
  const categories: MenuProps["items"] = [
    {
      label: <a href="/catalog">Реанимация</a>,
      key: "0",
    },
    {
      label: <a href="/">Хирургия</a>,
      key: "1",
    },
    {
      label: <a href="/">Офтальмология</a>,
      key: "2",
    },
    {
      label: <a href="/">Лабораторная диагностика</a>,
      key: "3",
    },
    {
      label: <a href="/">Акушерство</a>,
      key: "4",
    },
    {
      label: <a href="/">Гинекология</a>,
      key: "5",
    },
    {
      label: <a href="/">Гистология</a>,
      key: "6",
    },
    {
      label: <a href="/">Косметология</a>,
      key: "7",
    },
    {
      label: <a href="/">Оториноларингология</a>,
      key: "8",
    },
    {
      label: <a href="/">Рентгенология и томография</a>,
      key: "9",
    },
    {
      label: <a href="/">Стерилизация</a>,
      key: "10",
    },
    {
      label: <a href="/">Физиотерапия и реабилитация</a>,
      key: "11",
    },
    {
      label: <a href="/">Функциональная диагностика</a>,
      key: "12",
    },
    {
      label: <a href="/">Эндоскопия</a>,
      key: "13",
    },
    {
      type: "divider",
    },
    {
      label: <a href="/">Новинки</a>,
      key: "14",
    },
    {
      label: <a href="/">Распродажи</a>,
      key: "15",
    },
    {
      label: <a href="/">Кабинеты под ключ</a>,
      key: "16",
    },
  ];

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={categories}
      className="xl:!max-h-[570px] lg:!max-h-[500px]"
    />
  );
  const katalog: MenuProps["items"] = [
    {
      label: <Link to={"/catalog"}>Реанимация</Link>,
      key: "0",
    },
    {
      label: <Link to={"/"}>Хирургия</Link>,
      key: "1",
    },
    {
      label: <a href="/">Офтальмология</a>,
      key: "2",
    },
    {
      label: <a href="/">Лабораторная диагностика</a>,
      key: "3",
    },
    {
      label: <a href="/">Акушерство</a>,
      key: "4",
    },
    {
      label: <a href="/">Гинекология</a>,
      key: "5",
    },
    {
      label: <a href="/">Гистология</a>,
      key: "6",
    },
    {
      label: <a href="/">Косметология</a>,
      key: "7",
    },
    {
      label: <a href="/">Оториноларингология</a>,
      key: "8",
    },
    {
      label: <a href="/">Рентгенология и томография</a>,
      key: "9",
    },
    {
      label: <a href="/">Стерилизация</a>,
      key: "10",
    },
    {
      label: <a href="/">Физиотерапия и реабилитация</a>,
      key: "11",
    },
    {
      label: <a href="/">Функциональная диагностика</a>,
      key: "12",
    },
    {
      label: <a href="/">Эндоскопия</a>,
      key: "13",
    },
    {
      type: "divider",
    },
    {
      label: <a href="/">Новинки</a>,
      key: "14",
    },
    {
      label: <a href="/">Распродажи</a>,
      key: "15",
    },
    {
      label: <a href="/">Кабинеты под ключ</a>,
      key: "16",
    },
  ];
  const ForBuyers: MenuProps["items"] = [
    {
      label: <a href="/">Как сделать заказ</a>,
      key: "0",
    },
    {
      label: <a href="/">Возврат</a>,
      key: "1",
    },
    {
      label: <a href="/">Прайс-лист (скачать)</a>,
      key: "2",
    },
    {
      label: <a href="/">Каталоги оборудования PDF</a>,
      key: "3",
    },

    {
      label: <a href="/">Оформить претензию</a>,
      key: "4",
    },
    {
      label: <a href="/">FAQ</a>,
      key: "5",
    },
  ];
  return (
    <div className="StyledHeader">
      <div className="hidden md:flex justify-between items-center px-5 lg:px-14 py-3">
        <div className="text-[#7A7687] flex gap-3  text-xs md:text-md lg:text-sm xl:text-base">
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            className="cursor-pointer "
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="hover:text-[#07745E]">{t(`Окомпании`)}</Space>
            </a>
          </Dropdown>
          <Link to={"/delivery"} className="hover:text-[#07745E]">
            {t("Доставка")}
          </Link>
          <Link to={"/payment"} className="hover:text-[#07745E]">
            {t("Оплата")}
          </Link>
          <Link to={"/guarantees"} className="hover:text-[#07745E]">
            {t("Гарантии")}
          </Link>
          <Link to={"/blog"} className="hover:text-[#07745E]">
            {t("Блог")}
          </Link>
        </div>
        <div className="flex gap-5 items-center text-xs md:text-md lg:text-sm xl:text-base">
          <Link to={"/"} className="!text-[#7A7687]">
            info@mail.ru
          </Link>
          <Typography className="text-[#7A7687]">{t("Аддрес")}</Typography>
        </div>
      </div>
      <hr />
      <div className="flex px-5 lg:px-14 py-4 lg:flex justify-between items-center gap-5 sm:flex-col xs:flex-col mp:flex-col md:flex-row ">
        <div className="flex items-center justify-between xs:w-full md:w-32 lg:w-36 mp:w-full ">
          <img src="../HeaderLogo.svg" alt="Logo" />
          <div className="md:hidden flex items-center gap-1">
            <Button type="text" className="text-black font-semibold p-2">
              <PiPhoneLight size={22} />
            </Button>
            <Button
              type="text"
              className="text-black font-semibold p-2"
              onClick={showDrawer}
            >
              <FiMenu size={22} />
            </Button>
          </div>
        </div>
        <div className="flex w-full items-center gap-7">
          <div className="w-full lg:flex-grow mt-4 lg:mt-0 lg:w-auto md:w-full xs:w-full mp:w-full searchInput">
            <div className="xl:w-[600px] lg:w-[430px] flex items-center bg-gray-300 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow !text-[#7A7687] border border-gray-300  ">
              <div className="!bg-[#F8F7F3]">
                <div className="!rounded-3xl bg-gray-200 p-1 px-3 h-10 flex items-center">
                  <Dropdown
                    overlay={menu}
                    trigger={["click"]}
                    onVisibleChange={handleDropdownVisibleChange}
                    visible={visible}
                    className="cursor-pointer"
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space className="flex gap-1  lg:text-base sm:text-sm xs:text-xs text-xs">
                        {t(`ВсеКатегории`)}
                        {visible ? <FaCaretUp /> : <FaSortDown />}{" "}
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </div>
              <input
                type="text"
                placeholder={t("Поиск")}
                className="mp:w-20  flex-1 px-4 py-2 bg-[#F8F7F3] border-none outline-none text-gray-800 placeholder-gray-500 rounded-e-3xl"
              />
              <Button
                type="text"
                className="p-2 rounded-full mr-2 transition-colors text-[#7A7687]"
              >
                <BsSearch size={19} />
              </Button>
            </div>
          </div>
          <div className="w-full hidden 2xl:flex flex-col">
            <Typography className="text-[#7A7687]">
              {t(`РабочееВремя`)}
            </Typography>
            <Typography className="text-[#7A7687]">{t(`Отдых`)}</Typography>
          </div>
        </div>
        <div className="hidden gap-3 md:flex lg:gap-6 items-center userVisible">
          <StyledButton>
            <div className="flex flex-col items-center">
              <FaRegUser size={20} />
              <div className="text-gray-500 text">{t("Войти")}</div>
            </div>
          </StyledButton>
          <StyledButton>
            <div className="flex flex-col items-center">
              <FaRegHeart size={20} />
              <div className="text-gray-500 text">{t("Избранное")}</div>
            </div>
          </StyledButton>
          <StyledButton>
            <div className="flex flex-col items-center">
              <LuBarChartBig size={20} />
              <div className="text-gray-500 text">{t("Сравнить")}</div>
            </div>
          </StyledButton>
          <StyledButton>
            <div className="flex flex-col items-center">
              <SlBasket size={20} />
              <div className="text-gray-500 text">{t("Корзина")}</div>
            </div>
          </StyledButton>
          <div className="relative flex flex-col items-center">
            <StyledButton
              className="flex items-center gap-1 px-0 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              onClick={() => setShowDropdown((e: boolean) => !e)}
            >
              <BsGlobe size={20} />
              <span className="text">{language}</span>
              {showDropdown ? (
                <FiChevronUp size={16} />
              ) : (
                <FiChevronDown size={16} />
              )}
            </StyledButton>
            {showDropdown && (
              <div className="absolute top-full mt-2 w-20 bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
                <div
                  className="px-2 py-1 hover:bg-gray-200 cursor-pointer flex items-center gap-2 font-semibold"
                  onClick={() => handleLanguageChange("Ru")}
                >
                  <img src="./ru.png" className="h-3 object-cover" alt="" />
                  <Typography>Ru</Typography>
                </div>
                <hr />
                <div
                  className="px-2 py-1 hover:bg-gray-200 cursor-pointer flex items-center gap-2 font-semibold"
                  onClick={() => handleLanguageChange("Uz")}
                >
                  <img src="./uz.png" className="h-3 object-cover" alt="" />
                  <Typography>Uz</Typography>
                </div>
                <hr />
                <div
                  className="px-2 py-1 hover:bg-gray-200 cursor-pointer flex items-center gap-2 font-semibold"
                  onClick={() => handleLanguageChange("En")}
                >
                  <img src="./en.png" className="h-3 object-cover" alt="" />
                  <Typography>En</Typography>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="hidden gap-3 items-center phoneMenu w-full">
          <StyledButton>
            <div className="flex flex-col items-center hover:text-[#088269]">
              <TiHomeOutline size={20} />
              <div className="text-gray-500 text hover:text-[#088269]">
                {t(`Главная`)}
              </div>
            </div>
          </StyledButton>
          <StyledButton>
            <div className="flex flex-col items-center hover:text-[#088269]">
              <RiMenuSearchLine size={20} />
              <div className="text-gray-500 text hover:text-[#088269]">
                {t(`Каталог`)}
              </div>
            </div>
          </StyledButton>
          <StyledButton>
            <div className="flex flex-col items-center hover:text-[#088269]">
              <SlBasket size={20} />
              <div className="text-gray-500 text hover:text-[#088269]">
                {t("Корзина")}
              </div>
            </div>
          </StyledButton>
          <StyledButton>
            <div className="flex flex-col items-center hover:text-[#088269]">
              <FaRegHeart size={20} />
              <div className="text-gray-500 text hover:text-[#088269]">
                {t("Избранное")}
              </div>
            </div>
          </StyledButton>
          <StyledButton>
            <div className="flex flex-col items-center hover:text-[#088269]">
              <FaRegUser size={20} />
              <div className="text-gray-500 text hover:text-[#088269]">
                {t("Войти")}
              </div>
            </div>
          </StyledButton>
        </div>
      </div>
      <hr />
      <div className="hidden px-5 lg:px-10 xl:px-14 py-4 md:flex justify-between">
        <div className="flex items-center font-semibold xl:gap-5 lg:gap-2 md:gap-3 gap-2 text-xs md:text-sm lg:text-xs xl:text-base ">
          <Button
            type="text"
            className=" px-0 text-black hover:!text-[#07745E] text-base font-semibold"
            onClick={(e) => e.preventDefault()}
          >
            <Dropdown
              overlay={
                <StyledMenu
                  items={katalog}
                  style={{ overflowY: "auto" }}
                  className="xl:!max-h-[450px] lg:!max-h-[400px]"
                />
              }
              trigger={["click"]}
              className="cursor-pointer "
            >
              <div className="flex gap-1 items-center">
                <CgMenuLeftAlt className="md:text-lg xl:text-xl" />
                <Typography className="xl:text-base text-sm hover:!text-[#07745E]">
                  {t(`Каталог`)}
                </Typography>
              </div>
            </Dropdown>
          </Button>
          <Link to={"/manufacturers"} className="hover:!text-[#07745E]">
            {t("Производители")}
          </Link>
          <Link to={"/turnkey"} className="hover:!text-[#07745E]">
            {t("КабинетыКлюч")}
          </Link>
          <Link to={"/services"} className="hover:!text-[#07745E]">
            {t("Услуги")}
          </Link>
          <Link to={"/"} className="hover:!text-[#07745E]">
            {t("Акции")}
          </Link>
          <Dropdown
            overlay={<Menu items={ForBuyers} />}
            trigger={["click"]}
            className="cursor-pointer "
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="hover:!text-[#07745E]">
                {t(`Покупателям`)}
              </Space>
            </a>
          </Dropdown>
          <Link to={"/contact"} className="hover:!text-[#07745E]">
            {t("Контакты")}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Typography className="!m-0 text-xs md:text-md lg:text-base xl:text-sm font-semibold">
              {t("Москва")}
            </Typography>
            <LuMapPin />
          </div>
          <div className="flex gap-2 twoButtons">
            <TertiaryButton text={t("+7(495)000-00-00")} />
            <PrimaryButton text={t("ЗаказатьЗвонок")} />
          </div>
          <div className="PhoneButton">
            <PrimaryButtonMini icon={PiPhoneLight} />
          </div>
        </div>
      </div>
      <hr />
      <Drawer title="Basic Drawer" onClose={onClose} open={open}></Drawer>
    </div>
  );
};

const StyledButton = styled.button`
  border: none;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: inherit;
    color: #088269;
  }
  &:focus {
    outline: none;
    color: #088269;
  }
  &:active {
    background-color: inherit;
    color: #088269;
  }
`;
const StyledMenu = styled(Menu)`
  max-height: 500px;
  overflow-y: auto; /* Scroll ko'rinadi, lekin max-height ga yetganda */

  /* Scrollni yashirish */
  &::-webkit-scrollbar {
    width: 0; /* Scroll kengligini 0 ga o'rnatish */
    background: transparent; /* Scroll fon rangini transparent qilish */
  }
`;
