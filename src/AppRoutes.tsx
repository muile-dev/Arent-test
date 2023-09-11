import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MyRecordPage from "./components/pages/MyRecordPage";
import ColumnPage from "./components/pages/ColumnPage";
import NotSupportPage from "./components/pages/NotSupportPage";

const AppRoutes = () => {
  const navigate = useNavigate();
  const handleOnNavLink = (url: string) => navigate(url);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<HomePage handleOnNavLink={handleOnNavLink} />}
        />
        <Route
          path="/my-record"
          element={<MyRecordPage handleOnNavLink={handleOnNavLink} />}
        />
        <Route
          path="/columns"
          element={<ColumnPage handleOnNavLink={handleOnNavLink} />}
        />
        <Route
          path="/*"
          element={<NotSupportPage/>}
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
