import { Header } from "@components/header";
import Grid from "./components/grid";
import { CatalogTovar } from "@components/catalogTovar";
import { HomeCards } from "@components/cards";
import { HomeCompany } from "@components/company";
import { HomeSubscription } from "@components/subscription";
import { About } from "@components/about";
import { HomeForm } from "@components/form";
import { Footer } from "@components/footer";
import { BreadcrumbTwo } from "@components/breadCrumb";

export const Manufacturers = () => {
  return (
    <>
      <Header />
      <div className="px-4 py-2 lg:px-14">
        <BreadcrumbTwo currentPage="Производители" />
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
