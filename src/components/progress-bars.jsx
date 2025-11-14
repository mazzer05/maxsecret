import { Typography } from "@maxhub/max-ui";

export default function MacronutrientBar({ label, current, max, unit = "г" }) {
  const percentage = Math.min(100, (current / max) * 100);

  return (
    <div className="flex flex-col space-y-1 content-center items-center w-20">
      <Typography.Label className="items-center">{label}</Typography.Label>

      <div className="w-full h-2 bg-[#cbdaed] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#137ff4] transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <Typography.Label className="">
        {current} / {max} {unit}
      </Typography.Label>
    </div>
  );
}
