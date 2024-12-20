import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { CssTransition } from "@mui/base/Transitions";
import { PopupContext } from "@mui/base/Unstable_Popup";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import * as React from "react";
import { CiViewList } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { GiCaltrops } from "react-icons/gi";
import { IoWomanOutline } from "react-icons/io5";
import { MdOutlineContactSupport, MdOutlineDensitySmall } from "react-icons/md";
import { PiPersonSimpleSwim, PiPlusBold } from "react-icons/pi";
import { TbShoppingCartPlus } from "react-icons/tb";
import { TfiMoney } from "react-icons/tfi";
export default function Categories({
  categoria = {
    icon: "default",
    name: "Abrir Menu",
    goTo: "/",
    categories: [],
  },
}) {
  const onClickCategory = (goTo) => {
    return () => {
      // categoria.goTo ? categoria.goTo : "/";
    };
  };

  return (
    <div className="categories">
      <Dropdown>
        <MenuButton className="menu-button">
          <span>{iconMap[categoria.icon]}</span>
          <span className={"categories-name"}>
            {categoria.name.toUpperCase()}
          </span>
        </MenuButton>
        <Menu slots={{ listbox: AnimatedListbox }}>
          {categoria.categories.map((category) => {
            return (
              <MenuItem
                onClick={onClickCategory(categoria.goTo)}
                className="menu-item"
              >
                {category.toUpperCase()}
              </MenuItem>
            );
          })}
        </Menu>
      </Dropdown>
    </div>
  );
}

const iconMap = {
  default: <FaCheck />,
  shop: <TbShoppingCartPlus />,
  contato: <MdOutlineContactSupport />,
  modaPraia: <PiPersonSimpleSwim />,
  list: <CiViewList />,
  sutia: <IoWomanOutline />,
  conjunto: <GiCaltrops />,
  maisVendidos: <PiPlusBold />,
  promo: <TfiMoney />,
  allCategories: <MdOutlineDensitySmall />,
};

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E6",
  700: "#0059B3",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Listbox = styled("ul")(
  ({ theme }) => ` 
  font-family: 'Lato', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 0px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 9px 30px ${theme.palette.mode === "dark" ? grey[900] : grey[200]};
  z-index: 1;

  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 400ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `
);

const AnimatedListbox = React.forwardRef(function AnimatedListbox(props, ref) {
  const { ownerState, ...other } = props;
  const popupContext = React.useContext(PopupContext);

  if (popupContext == null) {
    throw new Error("Erro no componente da animação.");
  }

  const verticalPlacement = popupContext.placement.split("-")[0];

  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <Listbox {...other} ref={ref} />
    </CssTransition>
  );
});

AnimatedListbox.propTypes = {
  ownerState: PropTypes.object.isRequired,
};

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 0px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }
  `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 0px 10px;
  border-radius: 8px;
  color: white;
  transition: all 200ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid rgba(0, 0, 0, 0.0);
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};

  &:hover {
	color: var(--cor-principal-lilas);
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
    outline: none;
  }
  `
);
