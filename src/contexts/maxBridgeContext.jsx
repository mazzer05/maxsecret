import { createContext, useContext, useState, useEffect } from "react";

const MaxBridgeContext = createContext();

export const useMaxBridge = () => {
  const context = useContext(MaxBridgeContext);
  if (!context) {
    throw new Error("useMaxBridge must be used within a MaxBridgeProvider");
  }
  return context;
};

export const MaxBridgeProvider = ({ children }) => {
  const [webApp, setWebApp] = useState(null);

  useEffect(() => {
    if (window.WebApp) {
      window.WebApp.ready();
      const app = window.WebApp;
      setWebApp(app);
    }
  }, []);

  if (!webApp) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <MaxBridgeContext.Provider value={webApp}>
        {children}
      </MaxBridgeContext.Provider>
    );
  }
};
