import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { NotFoundException } from "@zxing/library";
import { useNavigate } from "react-router-dom";

export default function BarcodeScannerPage() {
  const videoRef = useRef(null);
  const [isScanning, setIsScanning] = useState(true);
  const [error, setError] = useState(null);
  const [lastResult, setLastResult] = useState(null);
  const navigate = useNavigate();

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
              setIsScanning(false); // остановить после первого успешного скана
              codeReader.reset();

              // 💡 Здесь можно:
              // - отправить barcode на бэкенд
              // - сохранить в localStorage
              // - перейти на страницу продукта и т.д.
              console.log("Найден штрих-код:", barcode);

              // Пример: перейти назад с результатом (если нужно)
              // или показать уведомление и кнопку "Использовать"
            } else if (err && !(err instanceof NotFoundException)) {
              setError("Ошибка при сканировании: " + err.message);
            }
            // NotFoundException игнорируется — это просто "ничего не найдено"
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

    return () => {
      codeReader.reset();
    };
  }, [isScanning]);

  const handleUseResult = () => {
    if (lastResult) {
      // Пример: перейти на страницу добавления продукта с штрих-кодом
      // navigate(`/add-product?barcode=${lastResult}`);
      alert(`Штрих-код: ${lastResult}`);
    }
  };

  const handleRestart = () => {
    setLastResult(null);
    setError(null);
    setIsScanning(true);
  };

  return (
    <div style={{ padding: "16px", maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
        Сканирование штрих-кода
      </h2>

      {lastResult ? (
        <div style={{ textAlign: "center" }}>
          <p>✅ Найден штрих-код:</p>
          <p
            style={{ fontWeight: "bold", fontSize: "1.2em", margin: "12px 0" }}
          >
            {lastResult}
          </p>
          <div style={{ marginTop: "16px" }}>
            <button
              onClick={handleUseResult}
              style={{
                padding: "10px 20px",
                backgroundColor: "#1e40af",
                color: "white",
                border: "none",
                borderRadius: "6px",
                marginRight: "8px",
              }}
            >
              Использовать
            </button>
            <button
              onClick={handleRestart}
              style={{
                padding: "10px 20px",
                backgroundColor: "#6b7280",
                color: "white",
                border: "none",
                borderRadius: "6px",
              }}
            >
              Сканировать снова
            </button>
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "100%", // квадратный превью
              overflow: "hidden",
              borderRadius: "12px",
              backgroundColor: "#000",
            }}
          >
            <video
              ref={videoRef}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              autoPlay
              playsInline
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "240px",
                height: "160px",
                transform: "translate(-50%, -50%)",
                border: "2px solid #3b82f6",
                borderRadius: "8px",
                boxSizing: "border-box",
                pointerEvents: "none",
              }}
            >
              {/* Угловые маркеры (опционально) */}
              <div
                style={{
                  position: "absolute",
                  top: "-4px",
                  left: "-4px",
                  width: "20px",
                  height: "20px",
                  borderTop: "4px solid #3b82f6",
                  borderLeft: "4px solid #3b82f6",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "-4px",
                  right: "-4px",
                  width: "20px",
                  height: "20px",
                  borderTop: "4px solid #3b82f6",
                  borderRight: "4px solid #3b82f6",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: "-4px",
                  width: "20px",
                  height: "20px",
                  borderBottom: "4px solid #3b82f6",
                  borderLeft: "4px solid #3b82f6",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  right: "-4px",
                  width: "20px",
                  height: "20px",
                  borderBottom: "4px solid #3b82f6",
                  borderRight: "4px solid #3b82f6",
                }}
              ></div>
            </div>
          </div>

          {error && (
            <p style={{ color: "red", textAlign: "center", marginTop: "12px" }}>
              {error}
            </p>
          )}

          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                padding: "8px 16px",
                backgroundColor: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "6px",
              }}
            >
              Отмена
            </button>
          </div>
        </>
      )}
    </div>
  );
}
