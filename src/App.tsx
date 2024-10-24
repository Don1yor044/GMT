import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { I18nextProvider } from "react-i18next";
import i18n from "./I18n/I18";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

export default App;
