import { useState } from "react";
import { weekData } from "../data/data";

const DayPicker = () => {
  const [activeDayId, setActiveDayId] = useState<number>(1);
  return (
    <div className="mt-5">
      <p className="font-medium text-[15px] leading-[21px] mb-5">
        აირჩიე სასურველი თარიღი
      </p>
      <div className="flex gap-3">
        {weekData.map((day) => (
          <div
            key={day.id + day.number}
            className={`cursor-pointer flex flex-1 flex-col items-center justify-center gap-[2px]
                transition-all duration-300 h-[51px] rounded-[15px] font-medium
                ${
                  activeDayId === day.id
                    ? "bg-primaryButton text-white"
                    : "bg-lightGray text-secondaryBlack hover:bg-primaryButton hover:text-white"
                }`}
            onClick={() => setActiveDayId(day.id)}
          >
            <span className="text-xs">{day.day}</span>
            <span className="text-sm">{day.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DayPicker;
