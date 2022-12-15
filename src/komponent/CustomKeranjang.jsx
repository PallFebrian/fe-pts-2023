import React from 'react';

export default function CustomKeranjang({
  gambarProduk,
  namaProduk,
  stok,
  rating,
  deskripsi,
  harga,
  ...props
}) {
  return (
    <React.Fragment>
      <div className="h-full w-full flex p-10">
       <div className='rounded  bg-[#f5f5f5] shadow-lg'>
       <div className="h-[200px] w-[300px] rounded shadow-lg grid grid-cols-1 ">
          <div className="h-full w-full bg-[#f5f5f5]">
            <img src={gambarProduk} alt="" className="h-full w-full rounded" />
          </div>
        </div>
        <div className="h-[65%] w-[30%] ml-10 flex justify-between ">
          <div>
            <h1 className="text-[#80917D] text-3xl font-medium mb-2">
              {namaProduk} nama
            </h1>
            <div className=" flex space-x-5 mt-14">
              <button className="border border-[#80917d] w-[30px] h-[30px] text-[#80917d]">
                -
              </button>
              <h1 className="text-[#80917d]">2</h1>
              <button className="border border-[#80917d] w-[30px] h-[30px] text-[#80917d]">
                +
              </button>
            </div>
          </div>

          <div className=" ml-[650px]">
            <p className="font-semibold text-3xl text-[#80917D]">Rp.{harga}</p>
            <button className=" rounded w-[200px] h-[80px] shadow-lg bg-[#f5f5f5] text-[#80917D] text-2xl font-medium mt-10">
              Hapus
            </button>
          </div>
        </div>
       </div>
      </div>
    </React.Fragment>
  );
}
