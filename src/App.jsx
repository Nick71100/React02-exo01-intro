import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/partials/header";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Register from "./components/pages/Register";
import Footer from "./components/partials/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
