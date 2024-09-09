import { NavLink } from "react-router-dom";
import css from "../AuthNav/AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.link}>
      <NavLink to="/register"> Register</NavLink>
      <NavLink to="/login"> Login</NavLink>
    </div>
  );
};

export default AuthNav;
