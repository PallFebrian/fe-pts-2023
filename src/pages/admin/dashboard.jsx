import React from 'react';
// import CustomButton from '../../komponent/CustomButton';
// import CustomInput from '../../komponent/CustomInput';
import { FiLogOut } from 'react-icons/fi';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl';

// import { useSelector } from 'react-redux';

export default function Dashboard() {
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-[#2C3333] flex-col">
        <div className="w-full h-full flex justify-center">
          <div className="bg-[#384040]  rounded-lg h-full w-[20%]">
            <div className="ml-10 mt-20  text-[20px]">
              <div className="hover:bg-[#2C3333] text-[#E7F6F2] rounded-md p-2  w-[100%] justify-center" >
               <a href="/dashboard/barang"> Data barang</a>
              </div>
              <div className="hover:bg-[#2C3333] text-[#E7F6F2] rounded-md p-2  w-[100%] justify-center">
               <a href="/dashboard/petugas">Data petugas</a>
              </div>
              <div className="hover:bg-[#2C3333] text-[#E7F6F2] rounded-md p-2  w-[100%] justify-center ">
                Laporan
              </div>
              <div className="hover:bg-[#2C3333] text-[#E7F6F2] rounded-md p-2  w-[100%] justify-center ">
                <a href="/dashboard/tambah">Register petugas</a>
              </div>
              <div className="px-5 cursor-pointer">
          <NavLink to={'/login'} replace={true}>
            <div className=" w-[75%] flex mt-[400px] items-center space-x-2 rounded py-1 justify-center transition-all ease-in-out bg-[#395b64]">
              <p className="transition-all ease-in-out text-[#E7F6F2]">Logout</p>
            </div>
          </NavLink>
        </div>
            </div>
          </div>
          {/* <div className="bg-[#395B64] h-full w-[2px]"></div> */}
         <div className='w-[80%] overflow-auto'>
          <Outlet/>
         </div>
        </div>
      </div>
    </React.Fragment>
  );
}
