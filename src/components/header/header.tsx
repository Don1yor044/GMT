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
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

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
    setShowDropdown(false);
    localStorage.setItem("selectLanguage", language); // Tanlangan tilni saqlash
  };
  const language = localStorage.getItem("selectLanguage") || "Ru";

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    } else {
      i18n.changeLanguage("Ru");
    }
  }, [language, i18n]);

  const items: MenuProps["items"] = [
    {
      label: <Link to="/hero">{t(`Окомпании`)}</Link>,
      key: "0",
    },
    {
      label: <Link to="/vacancies">{t(`Вакансии`)}</Link>,
      key: "1",
    },
    {
      label: <Link to="/reviews">{t(`Отзывы`)}</Link>,
      key: "2",
    },
    {
      label: <Link to="/certificates">{t(`Сертификаты`)}</Link>,
      key: "3",
    },
  ];
  const blogItems: MenuProps["items"] = [
    {
      label: <Link to="/blog">{t(`Блог`)}</Link>,
      key: "0",
    },
    {
      label: <Link to="/article">{t(`Статья`)}</Link>,
      key: "1",
    },
  ];
  const categories: MenuProps["items"] = [
    {
      label: <Link to="/catalog">Реанимация</Link>,
      key: "0",
    },
    {
      label: <Link to="/">Хирургия</Link>,
      key: "1",
    },
    {
      label: <Link to="/">Офтальмология</Link>,
      key: "2",
    },
    {
      label: <Link to="/">Лабораторная диагностика</Link>,
      key: "3",
    },
    {
      label: <Link to="/">Акушерство</Link>,
      key: "4",
    },
    {
      label: <Link to="/">Гинекология</Link>,
      key: "5",
    },
    {
      label: <Link to="/">Гистология</Link>,
      key: "6",
    },
    {
      label: <Link to="/">Косметология</Link>,
      key: "7",
    },
    {
      label: <Link to="/">Оториноларингология</Link>,
      key: "8",
    },
    {
      label: <Link to="/">Рентгенология и томография</Link>,
      key: "9",
    },
    {
      label: <Link to="/">Стерилизация</Link>,
      key: "10",
    },
    {
      label: <Link to="/">Физиотерапия и реабилитация</Link>,
      key: "11",
    },
    {
      label: <Link to="/">Функциональная диагностика</Link>,
      key: "12",
    },
    {
      label: <Link to="/">Эндоскопия</Link>,
      key: "13",
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/">Новинки</Link>,
      key: "14",
    },
    {
      label: <Link to="/">Распродажи</Link>,
      key: "15",
    },
    {
      label: <Link to="/">Кабинеты под ключ</Link>,
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
      label: <Link to="/">Офтальмология</Link>,
      key: "2",
    },
    {
      label: <Link to="/">Лабораторная диагностика</Link>,
      key: "3",
    },
    {
      label: <Link to="/">Акушерство</Link>,
      key: "4",
    },
    {
      label: <Link to="/">Гинекология</Link>,
      key: "5",
    },
    {
      label: <Link to="/">Гистология</Link>,
      key: "6",
    },
    {
      label: <Link to="/">Косметология</Link>,
      key: "7",
    },
    {
      label: <Link to="/">Оториноларингология</Link>,
      key: "8",
    },
    {
      label: <Link to="/">Рентгенология и томография</Link>,
      key: "9",
    },
    {
      label: <Link to="/">Стерилизация</Link>,
      key: "10",
    },
    {
      label: <Link to="/">Физиотерапия и реабилитация</Link>,
      key: "11",
    },
    {
      label: <Link to="/">Функциональная диагностика</Link>,
      key: "12",
    },
    {
      label: <Link to="/">Эндоскопия</Link>,
      key: "13",
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/">Новинки</Link>,
      key: "14",
    },
    {
      label: <Link to="/">Распродажи</Link>,
      key: "15",
    },
    {
      label: <Link to="/">Кабинеты под ключ</Link>,
      key: "16",
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
              <Space
                className={
                  isActive("/hero") ||
                  isActive("/vacancies") ||
                  isActive("/certificates") ||
                  isActive("/reviews")
                    ? "text-[#07745E]"
                    : "hover:text-[#07745E]"
                }
              >
                {t(`Окомпании`)}
              </Space>
            </a>
          </Dropdown>
          <Link
            to={"/delivery"}
            className={
              isActive("/delivery") ? "text-[#07745E]" : "hover:text-[#07745E]"
            }
          >
            {t("Доставка")}
          </Link>
          <Link
            to={"/payment"}
            className={
              isActive("/payment") ? "text-[#07745E]" : "hover:text-[#07745E]"
            }
          >
            {t("Оплата")}
          </Link>
          <Link
            to={"/guarantees"}
            className={
              isActive("/guarantees")
                ? "text-[#07745E]"
                : "hover:text-[#07745E]"
            }
          >
            {t("Гарантии")}
          </Link>
          <Dropdown
            menu={{ items: blogItems }}
            trigger={["click"]}
            className="cursor-pointer"
          >
            <Link to={""} onClick={(e) => e.preventDefault()}>
              <Space
                className={
                  isActive("/blog") || isActive("/article")
                    ? "text-[#07745E]"
                    : "hover:text-[#07745E]"
                }
              >
                {t(`Блог`)}
              </Space>
            </Link>
          </Dropdown>
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
          <div
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
            className="cursor-pointer"
          >
            <img src="../HeaderLogo.svg" alt="Logo" />
          </div>
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
        <div className="flex w-full justify-center gap-7">
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
            <div
              className={`flex flex-col items-center ${
                isActive("/favorites") ? "text-[#07745E]" : ""
              }`}
              onClick={() => navigate("favorites")}
            >
              <FaRegHeart size={20} />
              <div
                className={`text-gray-500 text ${
                  isActive("/favorites") ? "!text-[#07745E]" : ""
                }`}
              >
                {t("Избранное")}
              </div>
            </div>
          </StyledButton>
          <StyledButton>
            <div
              className={`flex flex-col items-center ${
                isActive("/compare") ? "text-[#07745E]" : ""
              }`}
              onClick={() => navigate("compare")}
            >
              <LuBarChartBig size={20} />
              <div
                className={`text-gray-500 text ${
                  isActive("/compare") ? "!text-[#07745E]" : ""
                }`}
              >
                {t("Сравнить")}
              </div>
            </div>
          </StyledButton>
          <StyledButton>
            <div
              className={`flex flex-col items-center ${
                isActive("/basket") ? "text-[#07745E]" : ""
              }`}
              onClick={() => navigate("basket")}
            >
              <SlBasket size={20} />
              <div
                className={`text-gray-500 text ${
                  isActive("/basket") ? "!text-[#07745E]" : ""
                }`}
              >
                {t("Корзина")}
              </div>
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
                  <img
                    src="../ru.png"
                    className="h-3 w-6 object-cover"
                    alt=""
                  />
                  <Typography>Ru</Typography>
                </div>
                <hr />
                <div
                  className="px-2 py-1 hover:bg-gray-200 cursor-pointer flex items-center gap-2 font-semibold"
                  onClick={() => handleLanguageChange("Uz")}
                >
                  <img src="../uz.png" className="h-3 object-cover" alt="" />
                  <Typography>Uz</Typography>
                </div>
                <hr />
                <div
                  className="px-2 py-1 hover:bg-gray-200 cursor-pointer flex items-center gap-2 font-semibold"
                  onClick={() => handleLanguageChange("En")}
                >
                  <img src="../en.png" className="h-3 object-cover" alt="" />
                  <Typography>En</Typography>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Telefon uchun layout  */}
        <div className="hidden gap-3 items-center phoneMenu w-full">
          <StyledButton onClick={() => navigate("/")}>
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
          <StyledButton onClick={() => navigate("/basket")}>
            <div className="flex flex-col items-center hover:text-[#088269]">
              <SlBasket size={20} />
              <div className="text-gray-500 text hover:text-[#088269]">
                {t("Корзина")}
              </div>
            </div>
          </StyledButton>
          <StyledButton onClick={() => navigate("/favorites")}>
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
      <div className="hidden px-5 lg:px-14 py-4 md:flex justify-between">
        <div className="flex items-center font-semibold xl:gap-5 lg:gap-3 md:gap-3 gap-2 text-xs md:text-sm lg:text-md xl:text-base ">
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
          <Link
            to={"/manufacturers"}
            className={`hover:!text-[#07745E] ${
              isActive("/manufacturers") ? "!text-[#07745E]" : ""
            }`}
          >
            {t("Производители")}
          </Link>
          <Link
            to={"/turnkey"}
            className={`hover:!text-[#07745E] ${
              isActive("/turnkey") ? "!text-[#07745E]" : ""
            }`}
          >
            {t("КабинетыКлюч")}
          </Link>
          <Link
            to={"/services"}
            className={`hover:!text-[#07745E] ${
              isActive("/services") ? "!text-[#07745E]" : ""
            }`}
          >
            {t("Услуги")}
          </Link>
          <Link
            to={"/discounts"}
            className={`hover:!text-[#07745E] ${
              isActive("/discounts") ? "!text-[#07745E]" : ""
            }`}
          >
            {t("Акции")}
          </Link>
          <Link
            to={"/contact"}
            className={`hover:!text-[#07745E] ${
              isActive("/contact") ? "!text-[#07745E]" : ""
            }`}
          >
            {t("Контакты")}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Typography className="!m-0 text-xs md:text-sm lg:text-base xl:text-sm font-semibold">
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
