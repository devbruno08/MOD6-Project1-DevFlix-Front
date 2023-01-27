import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./components/pages/login/login";
import GlobalStyles from "./global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home/home";
import { Update } from "./components/atoms/update/update";
import { ChannelId } from "./components/atoms/channel/channel";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/channel/:id" element={<ChannelId />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
