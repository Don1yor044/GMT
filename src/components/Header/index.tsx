/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsGlobe, BsSearch } from "react-icons/bs";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiChevronDown, FiChevronUp, FiMenu } from "react-icons/fi";
import { LuBarChartBig, LuMapPin } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { PrimaryButton, PrimaryButtonMini, TertiaryButton } from "../Buttons";
import { PiPhoneLight } from "react-icons/pi";
import "./index.css";
export const Header = () => {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Ru");

  const handleLanguageChange = (language: any) => {
    i18n
      .changeLanguage(language)
      .then(() => {
        setSelectedLanguage(language);
        setShowDropdown(false);
      })
      .catch((error) => {
        console.error("Error changing language: ", error);
      });
  };
  return (
    <div className="StyledHeader">
      <div className="hidden md:flex justify-between items-center px-5 lg:px-14 py-3">
        <div className="text-[#7A7687] flex gap-3  text-xs md:text-md lg:text-sm xl:text-base">
          <Link to={"/Окомпании"}>{t("Окомпании")}</Link>
          <Link to={"/Доставка"}>{t("Доставка")}</Link>
          <Link to={"/Оплата"}>{t("Оплата")}</Link>
          <Link to={"/Гарантии"}>{t("Гарантии")}</Link>
          <Link to={"/Блог"}>{t("Блог")}</Link>
        </div>
        <div className="flex gap-5 items-center text-xs md:text-md lg:text-sm xl:text-base">
          <Link to={"/"} className="!text-[#7A7687]">
            info@mail.ru
          </Link>
          <Typography className="text-[#7A7687]">{t("Аддрес")}</Typography>
        </div>
      </div>
      <hr />
      <div className="px-5 lg:px-14 py-4 flex  justify-between items-center gap-5 sm:flex-col xs:flex-col md:flex-row">
        <div className="flex items-center justify-between xs:w-full md:w-32">
          <img src="../public/HeaderLogo.svg" alt="Logo" />
          <div className="md:hidden flex items-center gap-1">
            <Button type="text" className="text-black font-semibold p-2">
              <PiPhoneLight size={22} />
            </Button>
            <Button type="text" className="text-black font-semibold p-2">
              <FiMenu size={22} />
            </Button>
          </div>
        </div>

        <div className="w-full lg:flex-grow mt-4 lg:mt-0 md:w-full">
          <div
            className="flex items-center bg-gray-300 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow !text-[#7A7687] border border-gray-300 searchInput"
            style={{ width: "70%" }}
          >
            <div className="!bg-[#F8F7F3]">
              <div className="!rounded-3xl bg-gray-200 p-1 px-3 h-10">
                <select
                  title="select"
                  className="cursor-pointer bg-transparent h-8 border-none outline-none"
                >
                  <option value="all">{t("ВсеКатегории")}</option>
                  <option value="cat1">категории 1 </option>
                  <option value="cat2">категории 2</option>
                  <option value="cat3">категории 3</option>
                </select>
              </div>
            </div>

            <input
              type="text"
              placeholder={t("Поиск")}
              className="flex-1 px-4 py-2 bg-[#F8F7F3] border-none outline-none text-gray-800 placeholder-gray-500 rounded-e-3xl"
            />

            <Button
              type="text"
              className="p-2 rounded-full mr-2 transition-colors text-[#7A7687]"
            >
              <BsSearch size={19} />
            </Button>
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
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <BsGlobe size={20} />
              <span className="text">{selectedLanguage}</span>
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
      </div>

      <hr />
      <div className="hidden px-5 lg:px-0 xl:px-14 py-4 md:flex justify-between">
        <div className="flex items-center font-semibold xl:gap-4 lg:gap-1 md:gap-3 gap-2 text-xs md:text-md lg:text-sm xl:text-sm">
          <Button type="text" className="flex items-center justify-start px-0 ">
            <CgMenuLeftAlt size={20} />
            <Typography.Title level={5} className="!m-0">
              {t("Каталог")}
            </Typography.Title>
          </Button>
          <Link to={"/"}>{t("Производители")}</Link>
          <Link to={"/"}>{t("КабинетыКлюч")}</Link>
          <Link to={"/"}>{t("Услуги")}</Link>
          <Link to={"/"}>{t("Акции")}</Link>
          <Link to={"/"}>{t("Покупателям")}</Link>
          <Link to={"/"}>{t("Контакты")}</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Typography.Title
              level={5}
              className="!m-0 text-xs md:text-md lg:text-sm xl:text-sm"
            >
              {t("Москва")}
            </Typography.Title>
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
    </div>
  );
};

const StyledButton = styled.button`
  border: none;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: inherit;
  }

  &:focus {
    outline: none;
  }
  &:active {
    background-color: inherit;
  }
`;
