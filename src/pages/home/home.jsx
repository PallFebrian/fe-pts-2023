import React from 'react';
// import CustomButton from '../../komponent/CustomButton';
// import CustomInput from '../../komponent/CustomInput';


import { NavLink, useNavigate } from 'react-router-dom';
// import { MdAccountCircle } from 'react-icons/md';
// import { SlBasket } from 'react-icons/sl';

// import { useSelector } from 'react-redux';

export default function Home() {
  // let navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-[#2C3333] flex-col">
        <div className="w-full h-full flex ju">
          <div className="bg-[#384040]  rounded-lg h-full w-[20%]">
            <div className="ml-10 mt-10  text-[20px]">
              <div className="bg-[#395B64] rounded-md p-2 h-[50px] mb-10 w-[80%] justify-center"></div>
              <div className="hover:bg-[#2C3333] text-[#E7F6F2] rounded-md p-2  w-[100%] justify-center">
                Barang
              </div>
              <div className="hover:bg-[#2C3333] text-[#E7F6F2] rounded-md p-2  w-[100%] justify-center">
                Beranda
              </div>
              <div className="px-5 cursor-pointer">
          <NavLink to={'/login'} replace={true}>
            <div className=" w-[75%] flex  items-center space-x-2 rounded py-1 justify-center transition-all ease-in-out bg-[#395b64]">
              <p className="transition-all ease-in-out text-[#E7F6F2]">Logout</p>
            </div>
          </NavLink>
        </div>
            </div>
          </div>
          {/* <div className="bg-[#395B64] h-full w-[2px]"></div> */}
          <div className="bg-[#2C3333] h-full w-[80%] overflow-auto">
            <section className="ml-10 mt-10 mr-20 w-[90%]">
              <h1 className="text-[#A5C9CA] text-[20px] font-medium">
                Get whatever you want.no pitfalls
              </h1>
              <h1 className="text-[#E7F6F2] text-[55px] font-bold ">
                Transtparent Auctions
              </h1>
              <h1 className="text-[#A5C9CA] text-[50px] font-bold ">
                Players vs Players
              </h1>
              <button className=" bg-[#395B64]  text-[#E7F6F2] rounded-md  mt-10 w-[300px] h-[50px]">
                Lihat lainnya
              </button>
              <p className="text-[#E7F6F2] text-[25px] mt-20 font-medium ">
                Auctions
              </p>

              <div className="grid grid-cols-4  items-center w-full gap-7 ">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                  return (
                    
                    <div className=" w-[200px] h-[270px] rounded-xl bg-[#E7F6F2] shadow-xl ">
                      <div className="w-[100%] h-[50%] bg-[#A5C9CA] rounded-xl "></div>
                      <p>p</p>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
