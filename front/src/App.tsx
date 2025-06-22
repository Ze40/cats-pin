import { Route, Routes } from "react-router";

import { AllCatsPage, FavoritePage, IndexPage, RegisterPage } from "./pages";
import LoginPage from "./pages/auth/login";
import ContentPageLayout from "./pages/content-pages/layout";

function App() {
  return (
    <>
      <main className="relative">
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/all-cats"
            element={
              <ContentPageLayout>
                <AllCatsPage />
              </ContentPageLayout>
            }
          />
          <Route
            path="/favorite"
            element={
              <ContentPageLayout>
                <FavoritePage />
              </ContentPageLayout>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
