import React from "react";
import { Routes, Route } from "react-router-dom";

// Components;
import NavBarComponent from "../Components/NavBarComponent";
import Footer from "../Components/Footer";

// Views;
import NotFound from "../Views/NotFound";
import Landing from "../Views/Landing/index";

const AppRouter = () => {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
