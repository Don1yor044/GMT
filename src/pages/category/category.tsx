import { BreadcrumbThree } from "@components/breadCrumb";
import { HomeBrand } from "@components/brend";
import { CabinetSwiper } from "@components/cabinetSwiper";
import { HomeCards } from "@components/cards";
import { CatalogTovar } from "@components/catalogTovar";
import { HomeCompany } from "@components/company";
import { Equipment } from "@components/equipment";
import { HomeForm } from "@components/form";
import { HomeSubscription } from "@components/subscription";

export const Category = () => {
  return (
    <>
      <div className="px-5 py-2 lg:px-14">
        <BreadcrumbThree
          twoPages="Каталог"
          currentPage="Лабораторное оборудование"
        />
        <div>
          <Equipment />
          <CabinetSwiper />
          <HomeCards />
        </div>
      </div>
      <div className="my-32">
        <CatalogTovar />
      </div>
      <HomeBrand />
      <HomeCompany />
      <HomeForm />
      <HomeSubscription />
    </>
  );
};
