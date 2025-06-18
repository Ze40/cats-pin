import { Route, Routes } from "react-router";

import { AllCatsPage, FavoritePage } from "./pages";
import { Header } from "./widgets";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<AllCatsPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
