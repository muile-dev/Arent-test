import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MyRecordPage from "./components/pages/MyRecordPage";
import ColumnPage from "./components/pages/ColumnPage";
import NotSupportPage from "./components/pages/NotSupportPage";

const AppRoutes = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-record" element={<MyRecordPage />} />
          <Route path="/columns" element={<ColumnPage />} />
          <Route path="/*" element={<NotSupportPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
