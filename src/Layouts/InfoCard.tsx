import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  bgColor: string;
  borderColor: string;
  iconBg: string;
  textColor?: string;
}

export default function InfoCard({
  title,
  value,
  icon,
  bgColor,
  borderColor,
  iconBg,
  textColor = "text-black",
}: InfoCardProps) {
  return (
    <div
      className={`rounded-md p-5 border ${bgColor} ${textColor} ${borderColor} flex justify-between items-center shadow-sm`}
    >
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>
    </div>
  );
}
