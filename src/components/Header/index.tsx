/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsGlobe, BsSearch } from "react-icons/bs";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { LuBarChartBig, LuMapPin } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { PrimaryButton, TertiaryButton } from "../Buttons";

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
    <div>
      <div className="flex justify-between items-center px-14 py-3">
        <div className="text-[#7A7687] flex gap-3">
          <Link to={"/Окомпании"}>{t("Окомпании")}</Link>
          <Link to={"/Доставка"}>{t("Доставка")}</Link>
          <Link to={"/Оплата"}>{t("Оплата")}</Link>
          <Link to={"/Гарантии"}>{t("Гарантии")}</Link>
          <Link to={"/Блог"}>{t("Блог")}</Link>
        </div>
        <div className="flex gap-5 items-center">
          <Link to={"/"} className="!text-[#7A7687] ">
            info@mail.ru
          </Link>
          <Typography className="text-[#7A7687]">
            {t("г. Москва, ул. Московская, д. 35")}
          </Typography>
        </div>
      </div>
      <hr />
      <div className="px-14 py-4 flex justify-between">
        <div className="flex gap-10 items-center" style={{ width: "70%" }}>
          <img src="../public/HeaderLogo.svg" alt="" />
          <div className="p-0 w-full">
            <div className="flex items-center bg-gray-300 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow !text-[#7A7687] border border-gray-300">
              <div className="!bg-[#F8F7F3]">
                <div className="!rounded-3xl bg-gray-200 p-1 px-3 h-10">
                  <select
                    title="select"
                    className="cursor-pointer bg-transparent h-8 border-none outline-none"
                  >
                    <option value="all">Barcha kategoriyalar</option>
                    <option value="cat1">Kategoriya 1</option>
                    <option value="cat2">Kategoriya 2</option>
                    <option value="cat3">Kategoriya 3</option>
                  </select>
                </div>
              </div>

              <input
                type="text"
                placeholder={t("Поиск...")}
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
          <div className="min-w-52">
            <Typography className="!m-0 text-[#7A7687]">
              {t("Пн-Пт с 09:00-19:00")} <br />
              {t("Сб-Вс - выходной")}
            </Typography>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <StyledButton>
            <div className="flex flex-col items-center">
              <FaRegUser size={20} />
              <div className="text-gray-500">{t("Войти")}</div>
            </div>
          </StyledButton>
          <StyledButton>
            <div className="flex flex-col items-center">
              <FaRegHeart size={20} />
              <div className="text-gray-500">{t("Избранное")}</div>
            </div>
          </StyledButton>
          <StyledButton>
            <div className="flex flex-col items-center">
              <LuBarChartBig size={20} />
              <div className="text-gray-500">{t("Сравнить")}</div>
            </div>
          </StyledButton>
          <StyledButton>
            <div className="flex flex-col items-center">
              <SlBasket size={20} />
              <div className="text-gray-500">{t("Корзина")}</div>
            </div>
          </StyledButton>
          <div className="relative flex flex-col items-center">
            <StyledButton
              className="flex items-center gap-1 px-0 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <BsGlobe size={20} />
              <span>{selectedLanguage}</span>
              {showDropdown ? (
                <FiChevronUp size={16} />
              ) : (
                <FiChevronDown size={16} />
              )}
            </StyledButton>

            {showDropdown && (
              <div className="absolute top-full mt-2 w-28 bg-white border border-gray-300 rounded-lg shadow-lg">
                <div
                  className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange("Ru")}
                >
                  Ru
                </div>
                <div
                  className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange("Uz")}
                >
                  Uz
                </div>
                <div
                  className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange("En")}
                >
                  En
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className="px-14 py-4 flex justify-between">
        <div className="flex items-center font-semibold gap-4">
          <Button type="text" className="flex items-center justify-start px-0">
            <CgMenuLeftAlt size={20} />
            <Typography.Title level={5} className="!m-0">
              {t("Каталог")}
            </Typography.Title>
          </Button>
          <Link to={"/"}>{t("Производители")}</Link>
          <Link to={"/"}>{t("Кабинеты под ключ")}</Link>
          <Link to={"/"}>{t("Услуги")}</Link>
          <Link to={"/"}>{t("Акции")}</Link>
          <Link to={"/"}>{t("Покупателям")}</Link>
          <Link to={"/"}>{t("Контакты")}</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Typography.Title level={5} className="!m-0">
              {t("Москва")}
            </Typography.Title>
            <LuMapPin />
          </div>
          <TertiaryButton text={t("+7(495)000-00-00")} />
          <PrimaryButton text={t("Заказать звонок")} />
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
