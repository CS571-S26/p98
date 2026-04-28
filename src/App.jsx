import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CalculatorPage from "./pages/Calculator";
import CarbonFootprintPage from "./pages/articles/CarbonFootprint";
import GlobalWarmingPage from "./pages/articles/GlobalWarming";
import HomePage from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="calculator" element={<CalculatorPage />} />
            <Route path="articles">
              <Route path="carbon-footprint" element={<CarbonFootprintPage />} />
              <Route path="global-warming" element={<GlobalWarmingPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
