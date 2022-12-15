import React, { useState } from 'react';
import CustomButton from '../../komponent/CustomButton';
import CustomInput from '../../komponent/CustomInput';
import { useNavigate, useParams } from 'react-router-dom';
import CustomCard from '../../komponent/CustomCard';
import CustomDetail from '../../komponent/CustomDetail';
import { GetDetailProduct } from '../../API/produk';
import { BsFillBackspaceFill } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { actionKeranjang } from '../../redux/action/keranjangAction';




export default function Detail() {
  let navigate = useNavigate()
  let { uuid } = useParams();
  const [gambar, setGambar] = useState()
  const [ListProduk, setListProduk] = useState([]);
const convertRupiah = require('rupiah-format')
  // const poto = item.gambarProduk;
  // const gambar = JSON.parse(poto);
  const [payload, setPayload] = React.useState({ produkId: '' });

  const dispatch = useDispatch();


  const getDetail = async () => {
    try {


      const response = await GetDetailProduct(uuid);
      const dataProduk = response.data.data;
      console.log('dataProduk =>', dataProduk);
      const json = response.data.data.gambarProduk
      const obj = JSON.parse(json)
      setGambar(obj[0].gambar1)
      setListProduk(response.data.data);
      setPayload({produkId : response.data.data.id})
      // const dataHarga = response.data.data.harga;
      // const number = product.harga;
      // console.log('dataHarga =>', dataHarga);
      // const uang = convertRupiah.convert(number);
      // setHarga(uang);
    } catch (error) {}
  };

  const handleKeranjang = async (e) => {
    console.log("keranjang di klik")
    e.preventDefault()
    try{
      const response = await dispatch(actionKeranjang(payload));
      console.log("responseKeranjang", response)
      if (response?.data.status === 'Success') {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Berhasil tambahkan ke keranjang',
        });
      }
    } catch {}
    console.log("Tambah keranjang")
  };
  React.useEffect(() => {
    getDetail();
  }, []);

  

  // const convertRupiah = require('rupiah-format');

  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-[#4b5ae2] flex-col overflow-hidden">
        <div className=" bg-[#899988] h-[8%] w-screen "></div>
        <div className="w-full h-[92%]  flex">
          <div className="bg-[#F9FCF8] h-full w-full ">
            <div className="w-full h-full ">
                {/* <p>{ListProduk.namaProduk}</p> */}
                <section>
                <BsFillBackspaceFill color='#899988' size='30px' className=' mt-14 ml-[5%]'
                 onClick={() => {
                  return navigate('/home');
                }}
                />
                </section>
              <section className="w-[100%] h-[100%] mt-5 ml-[5%]">
               
              <div className="h-full w-full flex">
        <div className="h-[65%] w-[30%] rounded shadow-lg  ">
          <div className="h-full w-full bg-[#f5f5f5]">
            <img src={gambar} alt="" className="h-full w-full rounded" />
          </div>
        </div>
        <div className="h-[65%] w-[30%] ml-10 ">
          <h1 className="text-[#80917D] text-3xl font-medium mb-2">
            {ListProduk?.namaProduk}
          </h1>
          <section className="flex">
            <FaStar color="yellow " />
            <p className="ml-1 text-[#80917D] mb-3">{ListProduk?.rating}</p>
          </section>
          <p className="font-semibold text-3xl text-[#80917D] mb-9">
          {convertRupiah.convert(ListProduk.harga)}
          </p>
          <p className="text-[#80917D]">{ListProduk?.deskripsi}</p>
        </div>
        <div className=" rounded bg-[#f5f5f5] w-[20%] h-[40%] ml-20 shadow-lg p-4">
          <div className="p-4">
            <p className="text-[#80917D] font-medium">Catatan</p>
            <p className="text-slate-400 mt-3">Stok total : {ListProduk?.stok}</p>
            <div className="flex justify-between">
              <p className="text-[#80917D] font-normal">Subtotal </p>
              <p className="text-[#80917D] font-semibold text-lg flex justify-end mr-[1px]">
                {convertRupiah.convert(ListProduk.harga)}
              </p>
            </div>
            <button
            onClick={handleKeranjang}
              className="bg-[#80917D] text-[#F9FCF8] rounded w-[100%] h-[45px] mt-5"
              
            >
              + Keranjang
            </button>
            <button className="border border-[#80917D] text-[#80917D] rounded w-[100%] h-[45px] mt-5">
              Beli
            </button>
          </div>
        </div>
      </div>
                
              </section>
            </div>
            <div className="w-[60%] h-full"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
