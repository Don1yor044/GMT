import { BreadcrumbFour } from "@components/breadCrumb";
import { Products } from "./products";
import { TabsComp } from "./tabs";
import { CatalogTovar } from "@components/catalogTovar";
import { CabinetSwiper } from "@components/cabinetSwiper";
import { CategoriesSwiper } from "@components/categoriesSwiper";
import { HomeBrand } from "@components/brend";
import { HomeSubscription } from "@components/subscription";

export const Product = () => {
  return (
    <>
      <div className="px-5 py-2 lg:px-14">
        <BreadcrumbFour
          currentPage="Лабораторное оборудование"
          twoPages="Каталог"
          threePages="Анализатор мочи MINDRAY UA-66"
        />
        <div className="mt-3">
          <Products />
        </div>
        <TabsComp />
      </div>
      <CatalogTovar />
      <div className="px-5 py-2 lg:px-14">
        <CabinetSwiper />
      </div>
      <CategoriesSwiper />
      <HomeBrand />
      <HomeSubscription />
    </>
  );
};
