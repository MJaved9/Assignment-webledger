import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Faviourate from "../Pages/Faviourate";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/fav" element={<Faviourate/>} />
      <Route path="/register" element={<Register/>}/>
    </Routes>
  );
};

export default AllRoutes;