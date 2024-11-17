import TextBox from "../Others/TextBox";
import Menu from "./Menu";
import MenuUser from "./UserMenu";

export default function Header() {
  return (
    <div className="main-header">
      <Menu />
      <TextBox />
      <MenuUser />
    </div>
  );
}
