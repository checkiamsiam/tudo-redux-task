import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard.index";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <div>
      <Routes>
      <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<h1 className="text-red-600 text-3xl text-center">Page not Found</h1>}></Route>
      </Routes>
    </div>
  );
};

export default App;
