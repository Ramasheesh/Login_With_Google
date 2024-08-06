import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Header from "./Component/Header";
import Login from "./Component/Login";
import Home from "./Component/Home";
import SignUp from "./Component/SignUp";
import Error from "./Component/Error";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
