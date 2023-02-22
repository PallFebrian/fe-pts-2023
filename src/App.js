import React from 'react';
import Login from './pages/auth/login';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Register from './pages/auth/register';

// import Home from "./pages/auth/home";

function App() {
  // let Navigate = useNavigate()
  return (
    <React.Fragment>
      {/* <h1 className="bg-red-500">Latihan</h1> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to={'/login'} replace={true} />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="*" element={<Navigate to='/login' replace={true}/>}/> */}
        {/* <Route path="/" element={<Home/>}/> */}
      </Routes>
    </React.Fragment>
  );
}

// export nama bisa 1 komponen atau lebih

export default App;
