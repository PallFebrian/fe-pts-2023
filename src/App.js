import React from 'react';
import Login from './pages/auth/login';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Register from './pages/auth/register';
import Home from './pages/home/home';
import Dashboard from './pages/admin/dashboard';
import DataBarang from './pages/admin/dataBarang';
import DataPetugas from './pages/admin/dataPetugas';
import TambahPetugas from './pages/admin/tambahPetugas';
import TambahBarang from './pages/admin/tambahBarang';

// import Home from "./pages/auth/home";

function App() {
  // let Navigate = useNavigate()
  return (
    <React.Fragment>
      {/* <h1 className="bg-red-500">Latihan</h1> */}
      <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to={'/login'} replace={true} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/barang" element={<DataBarang />} />
          <Route path="/dashboard/barang/tambah" element={<TambahBarang />} />
          {/* </Route> */}
          <Route path="/dashboard/petugas" element={<DataPetugas />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/dashboard/tambah" element={<TambahPetugas />} />
        </Route>
        <Route path="/home" element={<Home />} />
        {/* <Route path="*" element={<Navigate to='/login' replace={true}/>}/> */}
      </Routes>
    </React.Fragment>
  );
}

// export nama bisa 1 komponen atau lebih

export default App;
