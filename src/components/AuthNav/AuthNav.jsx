import { NavLink } from "react-router-dom";
import css from "../AuthNav/AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  return (
    <div className={css.link}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.linkActive)}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.linkActive)}
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
