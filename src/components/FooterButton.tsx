import { ReactNode } from "react";

const FooterButton: React.FC<{ children: ReactNode; active: boolean }> = ({
  children,
  active,
}) => {
  return (
    <button
      className={`${
        active
          ? "text-black"
          : "text-inactive hover:text-black hover:text-opacity-80 transition-all duration-300"
      } h-[50px] flex flex-col items-center`}
    >
      {children}
    </button>
  );
};
export default FooterButton;
