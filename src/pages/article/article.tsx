import {
  BreadcrumbThree,
  HomeForm,
  HomeBrand,
  CabinetSwiper,
  CatalogTovar,
} from "components";
import { ArticleInfo } from "./articleInfo";

export const Article = () => {
  return (
    <>
      {" "}
      <div className="px-5 py-2 lg:px-14">
        <BreadcrumbThree twoPages="Блог" currentPage="Информационная статья" />
        <ArticleInfo />
      </div>
      <CatalogTovar />
      <div className="px-5 py-2 lg:px-14">
        <CabinetSwiper />
      </div>
      <HomeBrand />
      <div className="mb-20">
        <HomeForm />
      </div>
    </>
  );
};
