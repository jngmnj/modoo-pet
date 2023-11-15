import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import MainPage from "../pages/MainPage";
import BoardList from "../pages/BoardList";
import LoginPage from "../pages/Login";
import ProfilePage from "../pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="/board" element={<BoardList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
