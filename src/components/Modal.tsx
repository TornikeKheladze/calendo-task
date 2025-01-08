import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import ActionButton from "./ActionButton";
import CloseIcon from "../assets/icons/CloseIcon";
import ArrowIcon from "../assets/icons/ArrowIcon";
import { calendarData, weekDays } from "../data/modalData";
import { useState } from "react";

const Modal: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  const variants = {
    visible: { transform: "translateY(-110%)" },
    hidden: { transform: "translateY(0)" },
  };
  const [selectedDateId, setSelectedDateId] = useState<undefined | number>();
  const today = new Date().getDate();
  return (
    <>
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={variants}
        className="fixed rounded-[20px] h-[463px] inset-x-[15px] bg-white z-[101] -bottom-[463px]"
      >
        <div className="flex justify-between px-4 items-center h-[57px] border-b border-b-[#E2E8F0]">
          <span className="font-bold font-helvetica tracking-wide">
            აირჩიე თარიღი
          </span>
          <ActionButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </ActionButton>
        </div>
        <div className="font-helvetica flex justify-between mt-5 mb-3 px-9 items-center">
          <button className="w-6 h-6 hover:bg-lightGrayHover flex justify-center items-center rounded-full hover:shadow-buttonHover transition-all duration-300">
            <ArrowIcon />
          </button>
          <span className="text-sm font-bold tracking-wide text-textBlack">
            იანვარი 2025
          </span>
          <button className="w-6 h-6 hover:bg-lightGrayHover flex justify-center items-center rounded-full hover:shadow-buttonHover transition-all duration-300">
            <ArrowIcon className="rotate-180" />
          </button>
        </div>
        <div className="mx-4 h-10 flex justify-around items-center text-xs">
          {weekDays.map((day, index) => (
            <span key={index + day}>{day}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 mx-4">
          {calendarData.map((date) => (
            <div
              key={date.id + date.day}
              className={`h-[46px] flex relative items-center justify-center rounded-[15px] text-xs transition-all duration-300 ${
                date.isDisabled
                  ? "!text-disabled cursor-not-allowed"
                  : "text-textBlack cursor-pointer hover:bg-textBlackHover hover:text-white"
              } ${
                date.id === selectedDateId
                  ? "bg-textBlack text-white"
                  : "text-textBlack"
              } `}
              onClick={() => setSelectedDateId(date.id)}
            >
              {date.day}
              {date.day === today && (
                <div className="h-1 w-1 absolute bg-black mx-auto bottom-2 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
        <div className="px-4 mt-4">
          <button
            className="bg-primaryButton w-full font-medium text-white h-9 rounded-[15px] text-[13px] leading-[18px]"
            onClick={() => setIsOpen(false)}
          >
            დამატება
          </button>
        </div>
      </motion.div>
      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Modal;
