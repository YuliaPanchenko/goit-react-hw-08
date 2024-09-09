import AuthNav from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "../AppBar/AppBar.module.css";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
