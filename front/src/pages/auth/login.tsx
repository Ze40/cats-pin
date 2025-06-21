import { NavLink } from "react-router";

import classes from "./style.module.scss";

const LoginPage = () => {
  return (
    <div className={classes.box}>
      <div className={classes.wrapper}>
        <h4>Добро пожаловать!</h4>
        <form className={"mt-xl text-md grid gap-xl"}>
          <input placeholder="Логин" type="text" className={classes.input} />
          <input type="text" placeholder="Пароль" className={classes.input} />
          <button type="submit" className={classes.btn}>
            Войти
          </button>
          <NavLink to={"/register"} className={classes.link}>
            Нет аккаунта?
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
