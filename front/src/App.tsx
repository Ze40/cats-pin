import { BrowserRouter, Route, Routes } from "react-router";

import { AllCatsPage, FavoritePage } from "./pages";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<AllCatsPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
