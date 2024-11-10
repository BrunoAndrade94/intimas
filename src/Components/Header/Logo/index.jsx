import { Link } from "react-router-dom";
import image from "../../../assest/image/logo.png";

const Logo = () => {
  return (
    <div className="main-logo">
      <div className="container">
        <div className="row">
          <div className="logo col-sm-2">
            <Link to={"/"}>
              <img src={image} alt="logo-image" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
