import { Link } from "react-router-dom";
import imageDesktop from "../../../assest/image/logo-desktop.svg";
import imageMobile from "../../../assest/image/logo-mobile.svg";

const Logo = () => {
  return (
    <div className="logo col-sm-2">
      <Link to={"/"}>
        <img className="image-desktop" src={imageDesktop} alt="logo-image" />
        <img className="image-mobile" src={imageMobile} alt="logo-image" />
      </Link>
    </div>
  );
};

export default Logo;
