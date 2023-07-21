import { ToastContainer } from "react-toastify";

import Register from "./components/Register";

import "react-toastify/dist/ReactToastify.min.css";

import Dashboard from "./components/Dashboard";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminLogin from "./components/AdminLogin";

import axios from "axios";

import React, { useState } from "react";

import { toast } from "react-toastify";

import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";

import base_url from "./api/API";
// import Logout from "./components/Logout";

import ValidationLogin from "./components/ValidationLogin";





function App() {







  return (

    <>
<>
<BrowserRouter>

        <ToastContainer />

        <Routes>

          {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}

          <Route path="/" element={<Register />}></Route>

          <Route path="/admin-login" element={<AdminLogin />}></Route>
          <Route path="/ValidationLogin" element={<ValidationLogin />}></Route>


        </Routes>

      </BrowserRouter>
      </>

      






      

    </>



  );

}




export default App;