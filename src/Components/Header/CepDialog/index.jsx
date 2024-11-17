import { Dialog, DialogTitle } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CEP, CONSULTAR_FRETE, VALOR_E_PRAZO } from "../../../assest/var-const";
import { flagCepDialog } from "../../../redux/features/dialog/dialogSlice";
import MyButton from "../../Others/MyButton";
import NotificationDialog from "../../Others/NotificationDialog";
import TextBox from "../../Others/TextBox";

const CepDialog = () => {
  const dispatch = useDispatch();

  const isOpenNotificationSelector = "";

  const isOpenDialogFlag = useSelector((state) => state.dialog.isOpen);

  const closeDialog = () => {
    dispatch(flagCepDialog());
  };

  const openCloseNotification = () => {
    dispatch(flagCepDialog());
  };

  // useEffect(() => {
  //   if (cep) {
  //     const fetchCepData = async () => {
  //       try {
  //         const data = await getCEP(cep);
  //         console.log(data);
  //       } catch (error) {
  //         return error.message;
  //       }
  //     };
  //     fetchCepData();
  //   }
  // }, [cep]);

  return (
    <>
      <div>
        <Dialog
          className="locationModal"
          open={isOpenDialogFlag}
          onClose={closeDialog}
        >
          <DialogTitle>{CONSULTAR_FRETE}</DialogTitle>
          <span className="valor-e-prazo">{VALOR_E_PRAZO}</span>

          <TextBox className="w-100" placeHolder={CEP} />

          {/* <MyButton className="mt-3" onClick={handleSetOpenNotification} /> */}

          <MyButton label="FECHAR" className="mt-3" onClick={closeDialog} />
        </Dialog>

        <NotificationDialog
          open={isOpenNotificationSelector}
          onClose={openCloseNotification}
          title="Aviso"
          message={""}
          dialogColor="#fff"
          myButtonProps={{
            onClick: openCloseNotification,
          }}
        />
      </div>
    </>
  );
};

export default CepDialog;
