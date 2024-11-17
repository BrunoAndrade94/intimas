import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { CiSearch } from "react-icons/ci";

export default function TextBox() {
  return (
    <Box className="text-box" component="form" autoComplete="on">
      <TextField size="small" label="Produtos..." className="label-text-box" />
      <IconButton size="small" className="icon-text-box">
        <CiSearch />
      </IconButton>
    </Box>
  );
}
