import { Button } from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import { LOCALIZACAO, SUA_LOCALIZACAO } from "../../../assest/var-const";
const CepDropdown = () => {
  return (
    <div className="cep-dropdown">
      <Button>
        <div className="cep-info d-flex flex-column">
          <span className="sua-localizacao">{SUA_LOCALIZACAO}</span>
          <span className="localizacao">{LOCALIZACAO}</span>
        </div>
        <span className="ml-auto cep-icone">
          <CiLocationOn />
        </span>
      </Button>
    </div>
  );
};

export default CepDropdown;
