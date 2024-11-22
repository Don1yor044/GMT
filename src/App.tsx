import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./I18n/I18";
import { ErrorBoundarayContainer } from "@components/errorBoundary";
import { Services } from "@pages/services";
import { Home } from "@pages/home";
import { NotFound } from "@components/notFound";
import { Contact } from "@pages/contact";
import { Guarantees } from "@pages/Guarantees/guarantees";
import { Catalog } from "@pages/Catalog";
import { Hero } from "@pages/hero";
import { Vacancies } from "@pages/vacancies";
import { Delivery } from "@pages/Delivery";
import { Payment } from "@pages/payment";
import { Blog } from "@pages/blog";
import { Manufacturers } from "@pages/manufacturers";
import { Certificates } from "@pages/certificates";
import { Product } from "@pages/product";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ErrorBoundarayContainer>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ErrorBoundarayContainer>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

export default App;
