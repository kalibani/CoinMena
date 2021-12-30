import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TrendingRepositories from "../containers/pages/TrendingRepositories";
import TrendingDevelopers from "../containers/pages/TrendingDevelopers";

const AppRoute: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/trending" />} />
        <Route path="trending" element={<TrendingRepositories />} />
        <Route path="trending/developers" element={<TrendingDevelopers />} />
        <Route path="*" element={<div>Not found </div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
