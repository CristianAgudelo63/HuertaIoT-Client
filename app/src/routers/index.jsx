import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../pages/Main";
import Page404 from "../pages/Page404";
import Switch from "./navBar/Controls/Switch";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Switch />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}