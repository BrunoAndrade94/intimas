import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import MyButton from "../MyButton";

const NotificationDialog = ({
  open,
  onClose,
  title = "Notificação",
  message = "Oi, eu sou um NotificationDialog (:",
  dialogColor = "#fff",
  myButtonProps = {},
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ style: { backgroundColor: dialogColor } }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <p>{message}</p>
      </DialogContent>
      <DialogActions>
        <MyButton {...myButtonProps} />
      </DialogActions>
    </Dialog>
  );
};

export default NotificationDialog;
