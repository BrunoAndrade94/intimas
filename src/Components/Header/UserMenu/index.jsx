import UserAvatar from "./UserAvatar";
import MenuBadge from "./UserBadge";

export default function UserMenu() {
  return (
    <div className="user-menu">
      <MenuBadge />
      <UserAvatar />
    </div>
  );
}
