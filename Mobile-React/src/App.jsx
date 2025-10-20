import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectdRoute from "./Helpers/ProtectdRoute";
import AdminDashbaord from "./pages/AdminDashbaord";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectdRoute>
                <AdminDashbaord />
              </ProtectdRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
