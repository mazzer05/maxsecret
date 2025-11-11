import { Typography } from "@maxhub/max-ui";

export default function NormStatic({ value = 0, label = "" }) {
  return (
    <div className={`relative`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Typography.Title variant="custom" className="font-bold ">
          {value}
        </Typography.Title>
        {label && (
          <Typography.Label className="text-gray-550 mt-1">
            {label}
          </Typography.Label>
        )}
      </div>
    </div>
  );
}
