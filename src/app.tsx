// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { HeaderBar } from "./Pages/Header/HeaderBar";
import { CreateMember } from "./Pages/CreateMember/CreateMember";
import Home from "./Pages/Home/Home";
import { MemberLists } from "./Pages/List/List";
import { Login } from "./Pages/Auth/Login/Login";
import { ViewPage } from "./Pages/List/ViewPage";
import { SignUpForm } from "./Pages/Auth/SignUp/SignUp";



const App: React.FC = () => {
  return (
      <Router>
        <HeaderBar></HeaderBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/create" element={<CreateMember />}></Route>
        <Route path="/details" element={<MemberLists />}></Route>
        <Route path="/details/:id" element={<MemberLists />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<SignUpForm/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
