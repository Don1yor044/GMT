import { Header } from "@components/header";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Grid from "./components/grid";
import { CatalogTovar } from "@components/catalogTovar";
import { HomeCards } from "@components/cards";
import { HomeCompany } from "@components/company";
import { HomeSubscription } from "@components/subscription";
import { About } from "@components/about";
import { HomeForm } from "@components/form";
import { Footer } from "@components/footer";

export const Manufacturers = () => {
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
          <Typography className="font-semibold">
            {t(`Производители`)}
          </Typography>
        </div>
        <div className="mt-3">
          <Grid />
        </div>
      </div>
      <CatalogTovar />
      <div className="px-4 py-2 lg:px-14">
        <HomeCards />
      </div>
      <HomeCompany />
      <About />
      <HomeForm />
      <HomeSubscription />
      <Footer />
    </>
  );
};
