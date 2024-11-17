import { Button } from "@mui/material";
import { FaCheck } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
const TextBox = ({ placeHolder, icon = "default" }) => {
  return (
    <div className="text-box">
      <input type="text" placeholder={placeHolder}></input>
      <Button className="button-box">{iconTextBox[icon]}</Button>
    </div>
  );
};

const iconTextBox = {
  default: <FaCheck />,
  search: <IoSearchOutline />,
};

export default TextBox;
