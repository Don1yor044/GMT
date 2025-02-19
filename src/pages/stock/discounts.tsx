import {
  BreadcrumbTwo,
  CabinetSwiper,
  CategoriesSwiper,
  CatalogTovar,
  HomeBrand,
  HomeForm,
  HomeSubscription,
} from "components";
import { useTranslation } from "react-i18next";
import { Cards } from "./dicountsCards/dicountsCards";

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
