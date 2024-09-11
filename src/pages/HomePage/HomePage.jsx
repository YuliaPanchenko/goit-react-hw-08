import css from "../HomePage/HomePage.module.css";
import { MdOutlineContactPhone } from "react-icons/md";

const HomePage = () => {
  return (
    <>
      <h1 className={css.title}>
        Welcome to your contacts manager page <MdOutlineContactPhone />
      </h1>
    </>
  );
};

export default HomePage;
