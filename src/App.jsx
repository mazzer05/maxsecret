import { Route, Routes } from "react-router-dom";
import TestRamzan from "./pages/test";
import Main from "./pages/main";
import BarcodeScanner from "./pages/barcode-scanner";

const App = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/test" element={<TestRamzan />} />
    <Route path="/barcode" element={<BarcodeScannerPage />} />
  </Routes>
);

export default App;
