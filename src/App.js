 import React from "react";
import Login from "./pages/auth/login";
import {Routes,Route, useNavigate, Navigate} from "react-router-dom"
import Register from "./pages/auth/register"
import ForgotPassword from "./pages/auth/forgotPassword";
import ResetPassword from "./pages/auth/resetPassword";
import Home from "./pages/auth/home";
import Detail from "./pages/auth/detail";
import ProtectedRoute from "./routers/protectRoute";
import Keranjang from "./pages/auth/keranjang";


function App() {
  let Navigate = useNavigate()
  return (
    <React.Fragment>
      {/* <h1 className="bg-red-500">Latihan</h1> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route path="/keranjang" element={<Keranjang/>}/>
        <Route path="/reset-password/:id/:token" element={<ResetPassword/>}/>
        
        <Route path="/home" element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>
        <Route path="/produk/detailProduk/:uuid" element={<Detail/>}/>
        <Route path="*" element={<Navigate to='/login' replace={true}/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
      </Routes>
    </React.Fragment>
  );
}

// export nama bisa 1 komponen atau lebih

export default App;
