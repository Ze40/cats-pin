export const isAuth = () => {
  return !!localStorage.getItem("authToken");
};
