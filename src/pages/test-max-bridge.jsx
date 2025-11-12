import { useEffect, useState } from "react";

function Test() {
  const [webApp, setWebApp] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (window.WebApp) {
      window.WebApp.ready();
      const app = window.WebApp;
      setWebApp(app);
      setUserData(app.initDataUnsafe); // ✅ теперь app — это window.WebApp
    }
  }, []);

  if (!webApp) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>Привет, {userData}!</h1>
      <button onClick={() => webApp.close()}>Закрыть</button>
    </div>
  );
}

export default Test;
