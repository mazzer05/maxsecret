import { Typography } from "@maxhub/max-ui";

export default function CircularProgress({
  value = 0,
  max = 100,
  label = "",
  className = "",
}) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <div className={`relative ${className}`}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="transform -rotate-90"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#cbdaed"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#137ff4"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Typography.Title variant="custom" className="font-bold ">
          {value}
        </Typography.Title>
        {label && <Typography.Label className="mt-1">{label}</Typography.Label>}
      </div>
    </div>
  );
}
