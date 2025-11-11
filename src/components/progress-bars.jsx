export default function MacronutrientBar({ label, current, max, unit = "г" }) {
  const percentage = Math.min(100, (current / max) * 100);

  return (
    <div className="flex flex-col space-y-1 w-full">
      <div className="text-xs font-medium text-gray-700">{label}</div>

      <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-505 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="text-xs text-gray-600">
        {current} / {max} {unit}
      </div>
    </div>
  );
}
