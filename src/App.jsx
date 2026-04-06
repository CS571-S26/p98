import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CalculatorPage from "./pages/Calculator";
import CarbonFootprintPage from "./pages/articles/CarbonFootprint";
import GlobalWarmingPage from "./pages/articles/GlobalWarming";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <HashRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="articles">
            <Route path="carbon-footprint" element={<CarbonFootprintPage />} />
            <Route path="global-warming" element={<GlobalWarmingPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;