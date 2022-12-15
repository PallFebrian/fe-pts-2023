// import React from 'react';
// import { FaStar } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { GetDetailProduct, TambahKeranjang } from '../API/produk';
// import { actionKeranjang } from '../redux/action/keranjangAction';

// export default function CustomDetail({
//   gambarProduk,
//   namaProduk,
//   stok,
//   rating,
//   deskripsi,
//   harga,
//   ...props
// }) {
//   const [payload, setPayload] = React.useState({ produkId: '' });
//   let { uuid } = useParams();
//   const dispatch = useDispatch();

//   const getDetail = async () => {
//     try {
//       const response = await GetDetailProduct(uuid);
//       console.log('custom detail', response);
//       const dataProduk = response.data.data;
//       setPayload({ produkId: response.data.data.id });
//       console.log('dataProduk =>', dataProduk);
//     } catch (error) {}
//   };
//   React.useEffect(() => {
//     getDetail();
//   }, []);

//   const handleKeranjang = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await dispatch(actionKeranjang(payload));
//       console.log("responseKeranjang", response)
//       if (response?.data.status === 'Success') {
//         const Toast = Swal.mixin({
//           toast: true,
//           position: 'top-end',
//           showConfirmButton: false,
//           timer: 3000,
//           timerProgressBar: true,
//           didOpen: (toast) => {
//             toast.addEventListener('mouseenter', Swal.stopTimer);
//             toast.addEventListener('mouseleave', Swal.resumeTimer);
//           },
//         });

//         Toast.fire({
//           icon: 'success',
//           title: 'Berhasil tambahkan ke keranjang',
//         });
//       }
//     } catch {}
//     console.log("Tambah keranjang")
//   };

//   console.log('payload', payload);
//   return (
//     <React.Fragment>
//       <div className="h-full w-full flex">
//         <div className="h-[65%] w-[30%] rounded shadow-lg  ">
//           <div className="h-full w-full bg-[#f5f5f5]">
//             <img src={gambarProduk} alt="" className="h-full w-full rounded" />
//           </div>
//         </div>
//         <div className="h-[65%] w-[30%] ml-10 ">
//           <h1 className="text-[#80917D] text-3xl font-medium mb-2">
//             {namaProduk}
//           </h1>
//           <section className="flex">
//             <FaStar color="yellow " />
//             <p className="ml-1 text-[#80917D] mb-3">{rating}</p>
//           </section>
//           <p className="font-semibold text-3xl text-[#80917D] mb-9">
//             Rp{harga}
//           </p>
//           <p className="text-[#80917D]">{deskripsi}</p>
//         </div>
//         <div className=" rounded bg-[#f5f5f5] w-[20%] h-[40%] ml-20 shadow-lg p-4">
//           <div className="p-4">
//             <p className="text-[#80917D] font-medium">Catatan</p>
//             <p className="text-slate-400 mt-3">Stok total : {stok}</p>
//             <div className="flex justify-between">
//               <p className="text-[#80917D] font-normal">Subtotal </p>
//               <p className="text-[#80917D] font-semibold text-lg flex justify-end mr-[1px]">
//                 Rp.{harga}
//               </p>
//             </div>
//             <button
//               className="bg-[#80917D] text-[#F9FCF8] rounded w-[100%] h-[45px] mt-5"
//               onClick={handleKeranjang}
//             >
//               + Keranjang
//             </button>
//             <button className="border border-[#80917D] text-[#80917D] rounded w-[100%] h-[45px] mt-5">
//               Beli
//             </button>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }
