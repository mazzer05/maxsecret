import { Route, Routes } from "react-router-dom";
import Test from "./pages/test-max-bridge";
import Main from "./pages/main";
import BarcodeScannerPage from "./pages/barcode-scanner";

const App = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/test" element={<Test />} />
    <Route path="/barcode" element={<BarcodeScannerPage />} />
  </Routes>
);

export default App;
