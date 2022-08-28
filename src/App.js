import React from 'react';
import './App.css';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import { Routes, Route } from "react-router-dom";
import UseToken from './Component/Services/UseToken';
import Header from "./Component/Layout/Header/Header";
import Footer from "./Component/Layout/Footer/Footer";
import Sidebar from "./Component/Layout/Sidebar/Sidebar";
import Logout from "./Component/Logout";
import User from "./Component/User/User";




function App() {
  const { token, setToken } = UseToken();

  if (token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <div className="page-container">
        <Sidebar />
        <div className="page-content">
          <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/userdetails" element={<User />}></Route>
        </Routes>
        <Footer />
      
        </div>
      </div>
    </>
  );
}

export default App;
