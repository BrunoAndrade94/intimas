import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import { LOCALIZACAO, SUA_LOCALIZACAO } from "../../../assest/var-const";
import CepDialog from "../CepDialog";
import { flagCepDialog } from "../../../redux/features/dialog/dialogSlice";
const CepDropdown = () => {
  const dispatch = useDispatch();

  const openDialogCep = () => {
    dispatch(flagCepDialog());
  };

  return (
    <div className="cep-dropdown">
      <Button onClick={openDialogCep}>
        <div className="cep-info d-flex flex-column">
          <span className="sua-localizacao">{SUA_LOCALIZACAO}</span>
          <span className="localizacao">{LOCALIZACAO}</span>
        </div>
        <span className="ml-auto cep-icone">
          <CiLocationOn />
        </span>
      </Button>
      <CepDialog />
    </div>
  );
};

export default CepDropdown;
