import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./I18n/I18";
import { ErrorBoundarayContainer } from "@components/errorBoundaries";
import { Services } from "@pages/services";
import { NotFound } from "@components/notFound";
import { Contact } from "@pages/contact";
import { Guarantees } from "@pages/guarantees/guarantees";
import { Catalog } from "@pages/catalog";
import { Hero } from "@pages/hero";
import { Vacancies } from "@pages/vacancies";
import { Delivery } from "@pages/delivery";
import { Payment } from "@pages/payment";
import { Blog } from "@pages/blog";
import { Manufacturers } from "@pages/manufacturers";
import { Certificates } from "@pages/certificates";
import { Product } from "@pages/product";
import { Home } from "@pages/home";
import { TurnkeyOffices } from "@pages/turnkeyOffices";
import { Resuscitation } from "@pages/resuscitation";
import { Article } from "@pages/article";
import { Layout } from "@components/layout/layout";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
