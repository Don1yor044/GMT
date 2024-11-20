import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Footer } from "@components/footer/footer";
import { Header } from "@components/header";
import { Cards } from "./components";
export const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="px-4 py-2 lg:px-14">
        <div className="flex gap-3 items-center py-2">
          <Link to={"/"} className="text-[#7A7687]">
            {t(`Главная`)}
          </Link>
          <div className="text-[#7A7687]">
            <RiArrowRightSLine size={20} />{" "}
          </div>
          <Typography className="font-semibold">{t(`Контакты`)}</Typography>
        </div>
        <div className="mt-5 md:mt-10 lg:mt-20">
          <Typography className="font-semibold text-3xl sm:text-5xl">
            {t(`Контакты`)}
          </Typography>

          <Cards />
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};
