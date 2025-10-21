import { Link } from "react-router-dom";
import classes from "./404.module.scss";

export const NotFound = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.errorCode}>404</h1>
      <h2 className={classes.title}>ERROR: PAGE NOT FOUND</h2>
      <p className={classes.subtitle}>
        Вы вступили в бездну. Бегите, пока можете!
      </p>
      <Link to="/" className={classes.link}>
        БЕГСТВО В БЕЗОПАСНОЕ МЕСТО
      </Link>
    </div>
  );
};
