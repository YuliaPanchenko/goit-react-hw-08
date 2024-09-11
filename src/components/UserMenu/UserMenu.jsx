import css from "../UserMenu/UserMenu.module.css";

import { useDispatch } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(apiLogout());
  };

  return (
    <div>
      <button className={css.logOutBtn} type="button" onClick={onClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
