import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../MyButton";
import { Dialog, DialogTitle } from "@mui/material";
import { getCEP } from "../../../services/apis/apiCEP";
import SearchBox from "../SearchBox";
import DialogNotification from "../../DialogNotification";
import { CEP, CONSULTAR_FRETE, VALOR_E_PRAZO } from "../../../assets/var-const";
import { closeCepDialog } from "../../../redux/features/dialog/dialogSlice";
import {
  closeNotification,
  flagNotification,
} from "../../../redux/features/notification/notificationSlice";

const CepDialog = () => {
  const dispatch = useDispatch();
  const [isOpenNotification, setOpenNotification] = useState(false);

  const cep = useSelector((state) => state.input.value);
  const isOpenDialogSelector = useSelector((state) => state.dialog.isOpen);
  const isOpenNotificationSelector = useSelector(
    (state) => state.notification.isOpen
  );

  const handleSetOpenNotification = () => setOpenNotification(true);
  const handleSetCloseNotification = () => setOpenNotification(false);

  const closeDialog = () => {
    dispatch(closeCepDialog());
    dispatch(closeNotification());
  };

  const openCloseNotification = () => {
    dispatch(flagNotification());
  };

  useEffect(() => {
    if (cep) {
      const fetchCepData = async () => {
        try {
          const data = await getCEP(cep);
          console.log(data);
        } catch (error) {
          return error.message;
        }
      };
      fetchCepData();
    }
  }, [cep]);

  return (
    <>
      <div>
        <Dialog className="locationModal" open={isOpenDialogSelector}>
          <DialogTitle>{CONSULTAR_FRETE}</DialogTitle>
          <span className="valor-e-prazo">{VALOR_E_PRAZO}</span>

          <SearchBox className="w-100" placeHolder={CEP} />

          {/* <MyButton className="mt-3" onClick={handleSetOpenNotification} /> */}

          <MyButton label="FECHAR" className="mt-3" onClick={closeDialog} />
        </Dialog>

        <DialogNotification
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
