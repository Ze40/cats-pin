import { FormEventHandler, useState } from "react";

import { NavLink, useNavigate } from "react-router";

import { api } from "@/api/api";

import classes from "./style.module.scss";

const RegisterPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError("");

    // Валидация
    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    if (password.length < 6) {
      setError("Пароль должен содержать минимум 6 символов");
      return;
    }

    setIsLoading(true);

    try {
      const response = await api.post("/user/register", {
        login,
        password,
      });

      if (response.data.success && response.data.token) {
        localStorage.setItem("authToken", response.data.token);

        navigate("/all-cats");
      } else {
        setError("Ошибка регистрации. Попробуйте другой логин");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("Ошибка при регистрации. Попробуйте позже");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.box}>
      <div className={classes.wrapper}>
        <h4>Зарегистрироваться</h4>
        {error && <div className={classes.error}>{error}</div>}
        <form className="mt-xl text-md grid gap-xl" onSubmit={submitHandler}>
          <input
            placeholder="Логин"
            type="text"
            className={classes.input}
            onChange={({ target }) => setLogin(target.value)}
            value={login}
            required
            minLength={3}
          />
          <input
            type="password"
            placeholder="Пароль"
            className={classes.input}
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            required
            minLength={6}
          />
          <input
            type="password"
            placeholder="Подтверждение пароля"
            className={classes.input}
            onChange={({ target }) => setConfirmPassword(target.value)}
            value={confirmPassword}
            required
            minLength={6}
          />
          <button type="submit" className={classes.btn} disabled={isLoading}>
            {isLoading ? "Регистрация..." : "Зарегистрироваться"}
          </button>
          <NavLink to="/login" className={classes.link}>
            Уже зарегистрированы?
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
