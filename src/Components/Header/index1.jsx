import { PESQUISAR_PRODUTO } from "../../assest/var-const";
import Navigation from "../Navigation";
import TextBox from "../Others/TextBox";
import CepDropdown from "./CepDrodown";
import Logo from "./Logo";
import UserBox from "./UserBox";

const Header = () => {
  return (
    <header className="main-header">
      {/* <TopStrip /> */}
      <div className="header">
        <div className="container">
          <div className="row">
            <Logo />
            <div className="div-cep col-sm-10 d-flex align-items-center">
              <CepDropdown />
              <TextBox placeHolder={PESQUISAR_PRODUTO} icon={"search"} />
              <UserBox />
            </div>
          </div>
        </div>
      </div>
      {/* <Navigation /> */}
    </header>
  );
};

export default Header;
