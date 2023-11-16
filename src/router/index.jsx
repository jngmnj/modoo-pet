import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import MainPage from "../pages/MainPage";
import BoardList from "../pages/BoardList";
import LoginPage from "../pages/Login";
import ProfilePage from "../pages/Profile";
import RegisterPage from "../pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="/hospitals" element={<BoardList />} />
          <Route path="/review" element={<BoardList />} />
          <Route path="/promotion" element={<BoardList />} />
          <Route path="/community" element={<BoardList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
