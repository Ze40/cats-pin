import { Route, Routes } from "react-router";

import { AllCatsPage, FavoritePage, IndexPage, RegisterPage } from "./pages";
import LoginPage from "./pages/auth/login";

function App() {
  return (
    <>
      <main className="relative">
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/all-cats" element={<AllCatsPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
