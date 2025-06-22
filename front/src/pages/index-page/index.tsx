import { Navigate } from "react-router";

import { isAuth } from "@/shared/helpers";

const IndexPage = () => {
  return <main>{!isAuth() ? <Navigate to={"/login"} /> : <Navigate to={"/all-cats"} />}</main>;
};

export default IndexPage;
