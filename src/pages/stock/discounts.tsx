import { BreadcrumbTwo } from "@components/breadCrumb";
import { Cards } from "./cards";
import { CabinetSwiper } from "@components/cabinetSwiper";
import { CategoriesSwiper } from "@components/categoriesSwiper";
import { CatalogTovar } from "@components/catalogTovar";
import { HomeBrand } from "@components/brend";
import { HomeForm } from "@components/form";
import { HomeSubscription } from "@components/subscription";
import { useTranslation } from "react-i18next";

export const Discounts = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-5 py-2 lg:px-14 mb-40">
        <BreadcrumbTwo currentPage={t("Акции")} />
        <Cards />
        <CabinetSwiper />
      </div>
      <CatalogTovar />
      <div className="mt-36">
        <CategoriesSwiper />
      </div>
      <HomeBrand />
      <HomeForm />
      <HomeSubscription />
    </>
  );
};
