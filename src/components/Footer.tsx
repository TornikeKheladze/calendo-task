import ActivityButton from "../assets/icons/ActivityButton";
import HomeIcon from "../assets/icons/HomeIcon";
import ProfileIcon from "../assets/icons/ProfileIcon";
import FooterButton from "./FooterButton";

const Footer = () => {
  return (
    <footer className="h-20 flex justify-between items-center fixed bottom-0 left-[25px] right-[25px]">
      <FooterButton active={false}>
        <HomeIcon />
        <span>მთავარი</span>
      </FooterButton>
      <FooterButton active>
        <ActivityButton />
        <span>აქტივობები</span>
      </FooterButton>
      <FooterButton active={false}>
        <ProfileIcon />
        <span>პროფილი</span>
      </FooterButton>
    </footer>
  );
};
export default Footer;
