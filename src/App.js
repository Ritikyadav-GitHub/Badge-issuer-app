import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import Dash from "./Components/Dash";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify"
import checkAuth from "./checkAuth";
import Dashboard from "./Components/Dashboard";
import InitiateBadgeRequest from "./Components/InitiateBadgeRequest";
import ProtectedRoute from "./Components/protectedRoute";








function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Login /> */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/initiaterequest" element={<InitiateBadgeRequest />} />
          <Route
            path="/dash"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
