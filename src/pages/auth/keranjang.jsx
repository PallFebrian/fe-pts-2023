import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { GetDetailProduct, GetKeranjang, TambahKeranjang } from '../../API/produk';
import CustomKeranjang from '../../komponent/CustomKeranjang';

export default function Keranjang() {
  let navigate = useNavigate();

  const [listKeranjang, setListKeranjang] = React.useState([]);
  const author = useSelector((state) => state.auth);
  const [payload, setPayload] = React.useState({
    gambarProduk: '',
    namaProduk: '',
    deskripsi: '',
    harga: '',
  });

  const getKeranjang = async (e) => {
    try {
      const response = await GetKeranjang();
      setListKeranjang(response.data.data);
      setPayload(response.data.data);
      console.log('keranjang', response);
    } catch (err) {
      console.log('err =>', err);
    }
  };

  React.useEffect(() => {
    getKeranjang();
  }, []);

  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-[#4b5ae2] flex-col overflow-hidden">
        <div className=" bg-[#899988] h-[8%] w-screen p-5"></div>
        <div className="w-full h-[92%]  flex">
          <div className="bg-[#F9FCF8] h-full w-full ">
            <div className="p-24">
              {/* <section className="mt-10 ml-10 grid grid-cols-4 gap-y-7"> */}
                <section>
                {listKeranjang?.map((item, index) => {
                  // const poto = item.gambarProduk;
                  // const gambar = JSON.parse(poto);
                  return (
                    <CustomKeranjang
                      key={index}
                      namaProduk={item.namaProduk}
                      harga={item.harga}
                      // gambarProduk={gambar[0].gambar1}
                    />
                  );
                })}
              </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
