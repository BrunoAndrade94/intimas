import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
const UserBox = () => {
  return (
    <div className="user-box">
      <Button className="icon-box">
        <FaRegUser />
      </Button>
      <div className="user-cart">
        <span className="price">R$ 420,00</span>
        <Button className="icon-box">
          <GiGymBag />
        </Button>
      </div>
    </div>
  );
};

export default UserBox;
