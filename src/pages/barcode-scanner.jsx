import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { NotFoundException } from "@zxing/library";
import { useNavigate } from "react-router-dom";
import { useMaxBridge } from "../contexts/maxBridgeContext";

export default function BarcodeScannerPage() {
  const videoRef = useRef(null);
  const [isScanning, setIsScanning] = useState(true);
  const [error, setError] = useState(null);
  const [lastResult, setLastResult] = useState(null);
  const navigate = useNavigate();
  const webApp = useMaxBridge();

  useEffect(() => {
    if (!isScanning) return;

    const codeReader = new BrowserMultiFormatReader();

    const startScanning = async () => {
      try {
        await codeReader.decodeFromVideoDevice(
          undefined,
          videoRef.current,
          (result, err) => {
            if (result) {
              const barcode = result.getText();
              setLastResult(barcode);
              setIsScanning(true); // можно закомментировать, если нужно автоматически остановить
            } else if (err && !(err instanceof NotFoundException)) {
              setError("Ошибка при сканировании: " + err.message);
            }
          }
        );
      } catch (err) {
        if (err.name === "NotAllowedError") {
          setError(
            "Доступ к камере запрещён. Пожалуйста, разрешите доступ в настройках браузера."
          );
        } else {
          setError("Не удалось запустить камеру: " + err.message);
        }
      }
    };

    startScanning();
  }, [isScanning]);

  const handleUseResult = () => {
    if (lastResult) {
      webApp.openLink(
        `https://world.openfoodfacts.org/api/v0/product/${lastResult}.json`
      );
    }
  };

  const handleRestart = () => {
    setLastResult(null);
    setError(null);
    setIsScanning(true);
  };

  return (
    <div className="p-4 mx-auto min-h-dvh">
      <h2 className="text-center mb-4">Сканирование штрих-кода</h2>

      {lastResult ? (
        <div className="text-center">
          <p>✅ Найден штрих-код:</p>
          <p className="font-bold text-lg my-3">{lastResult}</p>
          <div className="mt-4 flex justify-center gap-2">
            <button
              onClick={handleUseResult}
              className="px-5 py-2.5 bg-blue-700 text-white rounded-md"
            >
              Использовать
            </button>
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 bg-gray-600 text-white rounded-md"
            >
              Сканировать снова
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="relative w-full pb-[100%] overflow-hidden rounded-xl bg-black">
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              playsInline
            />
            <div className="absolute top-1/2 left-1/2 w-60 h-40 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-500 rounded-md box-border pointer-events-none">
              <div className="absolute -top-1 -left-1 w-5 h-5 border-t-4 border-l-4 border-blue-500"></div>
              <div className="absolute -top-1 -right-1 w-5 h-5 border-t-4 border-r-4 border-blue-500"></div>
              <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-4 border-l-4 border-blue-500"></div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-4 border-r-4 border-blue-500"></div>
            </div>
          </div>

          {error && <p className="text-red-500 text-center mt-3">{error}</p>}

          <div className="text-center mt-4">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Отмена
            </button>
          </div>
        </>
      )}
    </div>
  );
}
