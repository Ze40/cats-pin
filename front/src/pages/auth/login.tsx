import { FormEventHandler, useState } from "react";

import { NavLink, useNavigate } from "react-router";

import { api } from "@/api/api";

import classes from "./style.module.scss";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await api.post("/user/login", { login, password });

      if (response.data.success && response.data.token) {
        localStorage.setItem("authToken", response.data.token);

        if (response.data.userId) {
          localStorage.setItem("userId", response.data.userId);
        }
        navigate("/all-cats");
      } else {
        setError("Неверные учетные данные или сервер не вернул токен");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Ошибка при входе. Проверьте логин и пароль");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.box}>
      <div className={classes.wrapper}>
        <h4>Добро пожаловать!</h4>
        {error && <div className={classes.error}>{error}</div>}
        <form className="mt-xl text-md grid gap-xl" onSubmit={submitHandler}>
          <input
            placeholder="Логин"
            type="text"
            className={classes.input}
            onChange={({ target }) => setLogin(target.value)}
            value={login}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            className={classes.input}
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            required
          />
          <button type="submit" className={classes.btn} disabled={isLoading}>
            {isLoading ? "Вход..." : "Войти"}
          </button>
          <NavLink to="/register" className={classes.link}>
            Нет аккаунта?
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
