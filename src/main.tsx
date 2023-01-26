import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./components/pages/login/login";
import GlobalStyles from "./global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home/home";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
