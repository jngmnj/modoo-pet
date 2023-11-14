import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import MainPage from "../pages/MainPage";
import BoardList from "../pages/BoardList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="/board" element={<BoardList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
