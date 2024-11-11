import { Link } from "react-router-dom";
import image from "../../../assest/image/logo.png";

const Logo = () => {
  return (
    <div className="logo d-flex align-items-center col-sm-2">
      <Link to={"/"}>
        <img src={image} alt="logo-image" />
      </Link>
    </div>
  );
};

export default Logo;
