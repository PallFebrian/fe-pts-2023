import React from 'react';

export default function CustomCard({
  gambarProduk,
  namaProduk,
  stok,
  rating,
  harga,
  kategori,
  ...props
}) {
  return (
    <React.Fragment>
      <div className="h-[300px] w-[250px] rounded shadow-lg">
        <div className="h-[180px] w-[250px] bg-[#f5f5f5]">
          {gambarProduk}
        </div>
        <div className="h-[120px] w-[250px] bg-[#D6E6D5]">
          <div className="w-full h-full p-3">
            <p className="text-slate-400 text-left truncate">{kategori}</p>
            <p className="text-[#80917D] text-left truncate font-medium">{namaProduk}</p>
            {/* <p className='text-[#80917D]'>{deskripsi}</p> */}
            <p className="text-[#80917D] text-left truncate">stok tersisa {stok}</p>
            <div className='flex'>
          <p className="text-[#80917D] text-left ">{harga}</p>
            <p className="text-[#80917D] text-left ml-[55px] ">{rating}</p>
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
