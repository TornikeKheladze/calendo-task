import { useState } from "react";
import { schedule } from "../data/data";

const ClockPicker = () => {
  const [activeTimeId, setActiveTimeId] = useState(1);
  return (
    <div className="my-5">
      <p className="mb-[18px] font-noto text-[15px] font-medium">
        აირჩიე საათი
      </p>
      <div className="grid grid-cols-5 gap-[10px]">
        {schedule.map(({ day, id, time }) => (
          <div
            key={id + time}
            className={`flex flex-col items-center h-[51px] justify-center cursor-pointer transition-all duration-300 rounded-[15px]
                ${
                  activeTimeId === id
                    ? "bg-secondaryBlack "
                    : "bg-white hover:bg-secondaryBlack group hover:text-white border border-pickerBorder box-border"
                }
                `}
            onClick={() => setActiveTimeId(id)}
          >
            <span
              className={`text-xs font-medium ${
                activeTimeId === id
                  ? "text-white"
                  : "text-secondaryBlack group-hover:text-white"
              }`}
            >
              {time}
            </span>
            <span className="text-[10px] text-secondaryGray">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClockPicker;
