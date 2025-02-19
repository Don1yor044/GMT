import {
  CatalogTovar,
  HomeCards,
  HomeCompany,
  HomeSubscription,
  About,
  HomeForm,
  BreadcrumbTwo,
} from "components";
import { ManufacturersGrid } from "./manufacturersGrid/manufacturersGrid";

export const Manufacturers = () => {
  return (
    <>
      <div className="px-4 py-2 lg:px-14">
        <BreadcrumbTwo currentPage="Производители" />
        <div className="mt-3">
          <ManufacturersGrid />
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
    </>
  );
};
