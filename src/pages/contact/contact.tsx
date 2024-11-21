import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Footer } from "@components/footer/footer";
import { Header } from "@components/header";
import { Cards } from "./components";
import { BreadcrumbTwo } from "@components/breadCrumb";
export const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="px-4 py-2 lg:px-14">
        <BreadcrumbTwo currentPage="Контакты" />
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
