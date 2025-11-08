import { createRoot } from "react-dom/client";
import { MaxUI } from "@maxhub/max-ui";
import "@maxhub/max-ui/dist/styles.css";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TabProvider } from "./contexts/TabContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TabProvider>
      <MaxUI colorScheme="dark" platform="ios">
        <App />
      </MaxUI>
    </TabProvider>
  </BrowserRouter>
);
