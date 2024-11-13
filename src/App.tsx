import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import { I18nextProvider } from "react-i18next";
import i18n from "./I18n/I18";
import Login from "./pages/login";
import Catalog from "./pages/Catalog";
import Hero from "./pages/hero";
import Delivery from "./pages/Delivery";
import { Services } from "./pages/services";
import Payment from "./pages/payment";
import Guarantees from "./pages/Guarantees";
import New from "./pages/new";
import Vacancies from "./pages/vacancies";
import { NotFound } from "./components/notFound";
import { ErrorBoundarayContainer } from "./components/errorBoundary";
import Blog from "./pages/blog";
import Contact from "./pages/contact";

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
              <Route path="/catalog/new" element={<New />} />
              <Route path="/hero" element={<Hero />} />
              <Route path="/vacancies" element={<Vacancies />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/services" element={<Services />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/guarantees" element={<Guarantees />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ErrorBoundarayContainer>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

export default App;
