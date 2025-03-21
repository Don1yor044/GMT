import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./I18n/I18";
import { ErrorBoundarayContainer, Layout, NotFound } from "components";
import {
  Account,
  Article,
  Basket,
  Blog,
  Brand,
  Catalog,
  Category,
  Certificates,
  Compare,
  Contact,
  Delivery,
  Discounts,
  Faq,
  Favorites,
  Guarantees,
  Hero,
  Home,
  Manufacturers,
  Payment,
  Product,
  Resuscitation,
  Reviews,
  Services,
  TurnkeyOffices,
  Vacancies,
} from "pages";
import { FloatButton } from "antd";
import { FcUpload } from "react-icons/fc";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FloatButton.BackTop
        visibilityHeight={1000}
        icon={<FcUpload />}
        style={{
          right: "20px",
          bottom: "70px",
        }}
      />

      <I18nextProvider i18n={i18n}>
        <ErrorBoundarayContainer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/vacancies" element={<Vacancies />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/services" element={<Services />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/guarantees" element={<Guarantees />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/manufacturers" element={<Manufacturers />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/product" element={<Product />} />
                <Route path="/turnkey" element={<TurnkeyOffices />} />
                <Route
                  path="turnkey/resuscitation"
                  element={<Resuscitation />}
                />
                <Route path="/article" element={<Article />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/brand" element={<Brand />} />
                <Route path="/category" element={<Category />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/discounts" element={<Discounts />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ErrorBoundarayContainer>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

export default App;
