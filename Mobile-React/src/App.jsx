import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectdRoute from "./Helpers/ProtectdRoute";
import AdminDashbaord from "./pages/AdminDashbaord";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
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
