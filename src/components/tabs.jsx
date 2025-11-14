import { useTab } from "../contexts/TabContext";
import DiaryIcon from "../assets/diary.svg?react";
import ProfileIcon from "../assets/profile.svg?react";
import ReceptsIcon from "../assets/recepts.svg?react";
import StatisticIcon from "../assets/statistic.svg?react";
import { useNavigate } from "react-router-dom";
import { Panel } from "@maxhub/max-ui";

const tabs = [
  { id: "diary", label: "Дневник", Icon: <DiaryIcon /> },
  { id: "statistic", label: "Статистика", Icon: <StatisticIcon /> },
  { id: "recepts", label: "Рецепты", Icon: <ReceptsIcon /> },
  { id: "profile", label: "Профиль", Icon: <ProfileIcon /> },
];

export default function TabBar() {
  const { activeTab, setActiveTab } = useTab();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 p-4 bg-inherit border-t border-[#cbdaed]">
      <div className="flex justify-around items-center h-14 px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const textColor = isActive ? "text-[#137ff4]" : "text-gray-500";

          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id === "profile") navigate("/test");
                else if (tab.id === "recepts") navigate("/barcode");
              }}
              className={`flex flex-col items-center ${textColor} transition-all duration-00 ease-out`}
            >
              <div className="w-6 h-6 ">{tab.Icon}</div>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
