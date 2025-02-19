import {
  BreadcrumbFour,
  HomeSubscription,
  CatalogTovar,
  CabinetSwiper,
  CategoriesSwiper,
  HomeBrand,
} from "components";
import { TabsComp } from "./productTabs/tabs";
import { ProductProducts } from "./productProducts/productProducts";

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
          <ProductProducts />
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
