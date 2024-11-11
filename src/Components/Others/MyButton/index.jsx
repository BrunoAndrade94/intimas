import { Button } from "@mui/base";

const MyButton = ({ placeHolder }) => {
  return (
    <div className="button">
      <Button>{placeHolder}</Button>
    </div>
  );
};

export default MyButton;
