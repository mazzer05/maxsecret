import { useMaxBridge } from "../contexts/maxBridgeContext";

function Test() {
  const webApp = useMaxBridge();
  return (
    <div>
      <h1>Привет, {webApp.initData}!</h1>
      <h1>{webApp.platform}</h1>
      <button
        onClick={() => {
          webApp.HapticFeedback.impactOccurred("heavy", false);
          webApp.openCodeReader();
        }}
      >
        Закрыть
      </button>
    </div>
  );
}

export default Test;
