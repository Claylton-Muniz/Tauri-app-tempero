import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom/client";

import Home from "./views/Home";
import Test from "./views/Test";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Test />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
