import { Button } from "@mui/base";
import { RiMenuFold2Fill } from "react-icons/ri";
import logo from "../../../assest/image/logo.svg";
import logoEx from "../../../assest/image/logoEx.svg";
export default function Menu({ open = false }) {
  return (
    <div className="flex items-center mr-auto flex-shrink-0">
      <Button className="bg-gray-800 text-gray-200 w-10 h-10 hidden lg:flex items-center justify-center rounded hover:bg-gray-700 transition mr-4">
        <RiMenuFold2Fill />
      </Button>

      <button
        type="button"
        class="bg-gray-800 relative lg:hidden text-gray-200 w-10 h-10 rounded hover:bg-gray-700 transition mr-3"
        id="menu-toggle"
        aria-label="Abrir Menu"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:r1:"
        data-state="closed"
      ></button>
      <a className="h-[20px] overflow-hidden" href="/">
        <img
          alt="Rocketseat"
          loading="lazy"
          width="202"
          height="20"
          decoding="async"
          data-nimg="1"
          class="hidden lg:block"
          srcset=""
          src={logoEx}
          style={{ color: "transparent" }}
        ></img>
        <img
          alt="Rocketseat"
          loading=""
          width="29"
          height="20"
          decoding="async"
          data-nimg="1"
          class=""
          srcset={logo}
          style={{ color: "transparent" }}
        ></img>
      </a>
    </div>
  );
}
