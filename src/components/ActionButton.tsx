import { ReactNode } from "react";

const ActionButton: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <button className="w-8 h-8 border shadow-button hover:shadow-buttonHover hover:bg-gray-100 transition-all duration-300 flex items-center justify-center rounded-full">
      {children}
    </button>
  );
};

export default ActionButton;
