import { Route, Routes } from "react-router-dom";
import Test from "./pages/test-max-bridge";
import Main from "./pages/main";

const App = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/test" element={<Test />} />
  </Routes>
);

export default App;
