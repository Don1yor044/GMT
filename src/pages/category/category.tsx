import {
  HomeSubscription,
  HomeForm,
  Equipment,
  HomeCompany,
  CatalogTovar,
  HomeCards,
  CabinetSwiper,
  HomeBrand,
  BreadcrumbThree,
} from "components";

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
