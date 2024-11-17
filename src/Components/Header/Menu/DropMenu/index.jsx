import { IconButton, Menu, MenuItem } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { RiMenuFold2Fill } from "react-icons/ri";
export function DropMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="drop-menu">
      <ColorButton
        size="small"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <RiMenuFold2Fill />
      </ColorButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Promoção</MenuItem>
        <MenuItem onClick={handleClose}>Moda Praia</MenuItem>
        <MenuItem onClick={handleClose}>Moda Sex</MenuItem>
      </Menu>
    </div>
  );
}

const ColorButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple.A700,
  },
}));
