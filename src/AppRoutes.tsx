import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MyRecordPage from "./components/pages/MyRecordPage";
import ColumnPage from "./components/pages/ColumnPage";

const AppRoutes = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-record" element={<MyRecordPage />} />
          <Route path="/columns" element={<ColumnPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
