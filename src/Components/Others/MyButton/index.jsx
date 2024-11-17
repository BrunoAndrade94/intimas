import { Button } from "@mui/material";
import React from "react";

const MyButton = ({
  label = null,
  color = "info",
  onClick,
  variant = variantOptions.default,
  className,
  iconOnly = false,
}) => {
  return (
    <>
      <Button
        className={className}
        color={color}
        variant={variantOptions[variant]}
        onClick={onClick}
        style={{ borderRadius: "50px" }}
        // endIcon={null}
        // startIcon={null}
      >
        <span className="my-button-label">{label}</span>
      </Button>
    </>
  );
};

const variantOptions = {
  default: "info",
};

export default MyButton;
