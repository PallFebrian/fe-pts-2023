import React from 'react';
import { deleteBarang, getBarang } from '../../api/barangApi';
import * as dayjs from 'dayjs';
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function DataBarang() {
  let [isLoading, setIsLoading] = React.useState();
  const [getBarangs, setGetBarangs] = React.useState([]);
  const [page, setPage] = React.useState([]);

  const getBarangHandle = async () => {
    try {
      const response = await getBarang();
      console.log('Response =>', response);
      setGetBarangs(response.data.data.rows);
      // setPage(response.data.page);
    } catch (err) {
      console.log('error =>', err);
    }
  };

  const deleteHandle = async (id) => {
    try {
      const response = await deleteBarang(id);
      console.log(response);
      if(response?.status === 200){
        toast.success(response.data.message);
        getBarangHandle()
      }
    } catch (err) {
      console.log(err);
      // toast.error();
    }
  };

  React.useEffect(() => {
    getBarangHandle();
  }, []);
  return (
    <div className="bg-[#2C3333] h-full w-[100%]">
      <section className="ml-10 mt-20 mr-20">
        <h1 className="text-[#E7F6F2] text-[30px] font-medium mb-20">
          Data produk
        </h1>
        <button className=" bg-[#395B64]  text-[#E7F6F2] rounded-md  w-[15  %] h-[40px] mb-2">
          <a href="/dashboard/barang/tambah">Create</a>
        </button>
        <table class="table-fixed border-collapse border border-slate-500 w-[100%]  rounded-lg">
          <tr>
            <th className="bg-[#395B64] w-[5%] border-slate-600 text-[#E7F6F2]">
              #
            </th>
            <th className="bg-[#395B64] w-[5%] border-slate-600 text-[#E7F6F2]">
              Gambar barang
            </th>
            <th className="bg-[#395B64] border-slate-600 text-[#E7F6F2]">
              Nama barang
            </th>
            <th className="bg-[#395B64] border-slate-600 text-[#E7F6F2]">
              Tanggal
            </th>
            <th className="bg-[#395B64] border-slate-600 text-[#E7F6F2]">
              Harga awal
            </th>
            <th className="bg-[#395B64] border-slate-600 text-[#E7F6F2]">
              Deskripsi barang
            </th>
            <th className="bg-[#395B64] border-slate-600 text-[#E7F6F2] mb-5">
              Aksi
            </th>
          </tr>

          <>
            {isLoading ? (
              'loading'
            ) : (
              <>
                {getBarangs.map((item, index) => {
                  return (
                    <tr key={index} className="mb-10">
                      <td className="text-center text-[#E7F6F2]">{item?.id}</td>
                      <td className="text-center text-[#E7F6F2]">No image</td>
                      <td className="text-center text-[#E7F6F2]">
                        {item?.namaBarang}
                      </td>
                      <td className="text-center text-[#E7F6F2]">
                        {dayjs(item?.tanggal).format('DD MMM YYYY')}
                      </td>
                      <td className="text-center text-[#E7F6F2]">
                        {item?.hargaAwal}
                      </td>
                      <td className="line-clamp-2 w-[300px] flex items-center text-[#E7F6F2] ">
                        <p className="pt-3 text-center text-[#E7F6F2]">
                          {item?.deskripsiBarang}
                        </p>
                      </td>
                      <td className="mb-5 classNametext-center text-[#E7F6F2]">
                        <div className="flex pr-5 py-5 w-full justify-center space-x-3">
                          <button className="bg-[#E7F6F2] rounded-md  h-[50px] text-[#395B64] w-[40%] mr-2 mt-1 mb-1">
                            Edit
                          </button>
                          <button
                            className="bg-[#A5c9ca] rounded-md  h-[50px] text-[#395B64] w-[40%] mt-1 mb-1"
                            onClick={() => deleteHandle(item?.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
            {/* <tr className="text-[#E7F6F2]">
            <td className="text-center">1</td>
            <td className=" text-center">Produk</td>
            <td className='text-center'>2023-02-02</td>
            <td className="text-center">Rp100.000.00</td>
            <td className="text-center">Lorem ipsum ase sit amet</td>
            <td className="flex justify-center">
              <button className="bg-[#E7F6F2] rounded-md  h-[50px] text-[#395B64] w-[40%] mr-2 mt-1 mb-1">
                Edit
              </button>
              <button className="bg-[#A5c9ca] rounded-md  h-[50px] text-[#395B64] w-[40%] mt-1 mb-1">
                Delete
              </button>
            </td>
          </tr> */}
          </>
        </table>
      </section>
    </div>
  );
}
