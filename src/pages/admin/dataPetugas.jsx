import React from 'react';

import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getPetugsas } from '../../api/petugasApi';
import * as dayjs from 'dayjs';

export default function DataPetugas() {
  let [isLoading, setIsLoading] = React.useState();
  const [getPetugass, setGetPetugass] = React.useState([]);
  const [page, setPage] = React.useState([]);

  const getPetugasHandle = async () => {
    try {
      const response = await getPetugsas();
      console.log('Response =>', response);
      setGetPetugass(response.data.data.rows);
      // setPage(response.data.page);
    } catch (err) {
      console.log('error =>', err);
    }
  };

  React.useEffect(() => {
    getPetugasHandle();
  }, []);
  return (
    <div className="bg-[#2C3333] h-full w-[100%]">
      <section className="ml-10 mt-20 mr-20">
        <h1 className="text-[#E7F6F2] text-[30px] font-medium mb-20">
          Data petugas
        </h1>
        {/* <button className="border bg-[#395B64] border-[#E7F6F2] text-[#E7F6F2] rounded-md  w-[10%]">
      Create
    </button> */}
        <table class="table-fixed border-collapse border border-slate-500 w-[100%]  rounded-lg">
          <tr>
            <th className="bg-[#395B64] w-[5%] border-slate-600 text-[#E7F6F2]">
              #
            </th>
            <th className="bg-[#395B64] w-[5%] border-slate-600 text-[#E7F6F2]">
              Nama petugas
            </th>
            <th className="bg-[#395B64] border-slate-600 text-[#E7F6F2]">
              username
            </th>
            <th className="bg-[#395B64] border-slate-600 text-[#E7F6F2]">
              Level
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
                {getPetugass?.map((item, index) => {
                  return (
                    <tr key={index} className="mb-">
                      <td className="text-center text-[#E7F6F2]">{item?.id}</td>
                      <td className="text-center text-[#E7F6F2]">
                        {item?.namaPetugas}
                      </td>
                      <td className="text-center text-[#E7F6F2]">
                        {item?.username}
                      </td>
                      <td className="text-center text-[#E7F6F2]">
                        {item?.role.level}
                      </td>
                      <td className="mb-5 classNametext-center text-[#E7F6F2]">
                        <div className="flex pr-5 py-5 w-full justify-center space-x-3">
                          <button className="bg-[#E7F6F2] rounded-md  h-[50px] text-[#395B64] w-[70%] mr-2 mt-1 mb-1">
                            Edit
                          </button>
                          {/* <button className="bg-[#A5c9ca] rounded-md  h-[50px] text-[#395B64] w-[40%] mt-1 mb-1">
                            Delete
                          </button> */}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </>
        </table>
      </section>
    </div>
  );
}

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