import { BreadcrumbTwo } from "components";
import { BasketProducts } from "./basketProducts/basketProducts";

export const Basket = () => {
  return (
    <div className="px-5 py-2 lg:px-14">
      <BreadcrumbTwo currentPage="Корзина" />
      <div className="mt-5 my-20">
        <BasketProducts />
      </div>
    </div>
  );
};
