import clsx from "clsx";
import { NavLink } from "react-router";

import classes from "./style.module.scss";

const RegisterPage = () => {
  return (
    <div className={classes.box}>
      <div className={classes.wrapper}>
        <h4>Зарегистрироваться</h4>
        <form className={"mt-xl text-md grid gap-xl"}>
          <input placeholder="Логин" type="text" className={classes.input} />
          <input type="text" placeholder="Пароль" className={classes.input} />
          <input type="text" placeholder="Подтверждение пароля" className={classes.input} />
          <button type="submit" className={classes.btn}>
            Зарегистрироваться
          </button>
          <NavLink to={"/login"} className={classes.link}>
            Уже зарегистрированны?
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
