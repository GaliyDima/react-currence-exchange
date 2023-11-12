import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home/Home";
import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout";
import AboutPage from "./pages/About/About";
import RatesPage from "./pages/Rates/Rates";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/rates" element={<RatesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
