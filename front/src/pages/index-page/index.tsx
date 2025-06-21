import { Navigate } from "react-router";

const IndexPage = () => {
  const isAuth = false; //Заглушка
  return <main>{!isAuth ? <Navigate to={"/login"} /> : <Navigate to={"/all-cats"} />}</main>;
};

export default IndexPage;
