import Logo from "./Logo";
import TopStrip from "./TopStrip";

const Header = () => {
  return (
    <div className="main-header">
      <TopStrip />
      <div className="header">
        <Logo />
      </div>
    </div>
  );
};

export default Header;
