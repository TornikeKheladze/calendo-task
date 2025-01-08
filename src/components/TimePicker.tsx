import { useState } from "react";
import CalendarIcon from "../assets/icons/CalendarIcon";
import Modal from "./Modal";

const TimePicker = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-10 mt-5 flex justify-between items-center font-noto">
      <h2 className="font-[832] text-2xl my-5">აირჩიე დრო</h2>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-lightGray hover:bg-lightGrayHover transition-all duration-300 w-10 h-10 rounded-[15px] flex justify-center items-center"
      >
        <CalendarIcon />
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default TimePicker;
