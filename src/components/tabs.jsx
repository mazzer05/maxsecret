import { useTab } from "../contexts/TabContext";
import DiaryIcon from "../assets/diary.svg?react";
import ProfileIcon from "../assets/profile.svg?react";
import ReceptsIcon from "../assets/recepts.svg?react";
import StatisticIcon from "../assets/statistic.svg?react";
import { useNavigate } from "react-router-dom";

const tabs = [
  { id: "diary", label: "Дневник", Icon: <DiaryIcon /> },
  { id: "statistic", label: "Статистика", Icon: <StatisticIcon /> },
  { id: "recepts", label: "Рецепты", Icon: <ReceptsIcon /> },
  { id: "profile", label: "Профиль", Icon: <ProfileIcon /> },
];

export default function TabBar() {
  const { activeTab, setActiveTab } = useTab();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 p-4 border-t-1 border-gray-200">
      <div className="flex justify-around items-center h-14 px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const textColor = isActive ? "text-blue-600" : "text-gray-500";
          const navigate = useNavigate();

          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id == "profile") {
                  navigate("/test");
                } else if (tab.id == "recepts") {
                  navigate("/barcode");
                }
              }}
              className={`flex flex-col items-center text-xs ${textColor}`}
            >
              <div className="w-6 h-6">{tab.Icon}</div>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
