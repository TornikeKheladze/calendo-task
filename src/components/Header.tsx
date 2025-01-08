import ArrowIcon from "../assets/icons/ArrowIcon";
import CalendoLogo from "../assets/icons/CalendoLogo";
import CloseIcon from "../assets/icons/CloseIcon";
import ActionButton from "./ActionButton";

const Header = () => {
  return (
    <header className="flex justify-between">
      <ActionButton>
        <ArrowIcon />
      </ActionButton>
      <CalendoLogo />
      <ActionButton>
        <CloseIcon />
      </ActionButton>
    </header>
  );
};

export default Header;
