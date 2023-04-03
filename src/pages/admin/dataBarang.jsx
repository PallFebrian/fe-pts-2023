import React from 'react';
import {
  deleteBarang,
  getBarang,
  updateBarang,
  updateBarangById,
} from '../../api/barangApi';
import * as dayjs from 'dayjs';
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { CustomInput } from '../../komponent';
import { Formik, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { actionUpdateBarang } from '../../redux/action/barangAction';
const convertRupiah = require('rupiah-format');

export default function DataBarang() {
  const dispatch = useDispatch();
  let [isLoading, setIsLoading] = React.useState();
  const [getBarangs, setGetBarangs] = React.useState([]);
  const [page, setPage] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const formikBarang = useFormik({
    initialValues: {
      id: '',
      namaBarang: '',
      hargaAwal: '',
      deskripsiBarang: '',
    },

    // }),
    onSubmit: async (values) => {
      console.log('object', values);

      try {
        setIsLoading(true);
        // alert(JSON.stringify(values, null, 2));

        const response = await dispatch(
          actionUpdateBarang(formikBarang.values.id, values)
        );
        console.log('baranggg', response);
        if (response?.data?.status === 'Success') {
          toast.success(response.data.msg);
          updateBarang('/dashboard/barang', { replace: true });
          getBarang();
          return setShowModal(false);
        }
      } catch (err) {
        console.log('err', err);
      } finally {
        setIsLoading(false);
      }
    },
  });
  const handleGetDetailBarang = async (id) => {
    try {
      setIsLoading(true);
      let response = await updateBarangById(id);
      console.log('detail', response);

      formikBarang.setValues({
        id: response.data.data.id,
        namaBarang: response.data.data.namaBarang,
        deskripsiBarang: response.data.data.deskripsiBarang,
        hargaAwal: response.data.data.hargaAwal,
      });
      console.log('responnya', response);
    } catch (err) {
      console.log('barangerr', err);
    } finally {
      setIsLoading(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      id: '',
      namaBarang: '',
      deskripsiBarang: '',
      hargaAwal: '',
    },

    onSubmit: (values) => {
      const handleSubmit = async (e) => {
        try {
          const response = await dispatch(actionUpdateBarang(values));
          console.log('responnya', response);
          if (response?.data?.status === 'Success') {
            toast.success(response?.data?.msg, {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
            setShowModal(false);
            return getBarang();
          }
          if (response?.response?.data?.status === 'Fail') {
            toast.error(response?.response?.data?.msg, {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
          }
        } catch (err) {
          console.log('authregisterErr =>', err);
        } finally {
        }
      };
      handleSubmit();
    },
  });
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
      if (response?.status === 200) {
        toast.success(response.data.message);
        getBarangHandle();
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
        <button className=" bg-[#395B64]  text-[#E7F6F2] rounded-md  w-[15%] h-[40px] mb-2">
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
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-[30%] my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#395B64] outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 ">
                      <h1 className="text-2xl font-semibold bg-[#A5C9CA] rounded py-2 px-5 text-[#395B64]">
                        Edit Barang
                      </h1>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <p className=" text-white h-6 w-6 text-2xl block outline-none focus:outline-none hover:text-red-500 transition-all ease-in-out">
                          &times;
                        </p>
                      </button>
                    </div>

                    <div className="relative p-6 flex-auto">
                      <form
                        action=""
                        className="space-y-10 w-full"
                        onSubmit={formikBarang.handleSubmit}
                      >
                        <CustomInput
                          placeholder={'Nama Barang'}
                          // inputStyle={'w-full border-[#00c29a] border bg-black'}
                          stylingInput="w-[405px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
                          inputType={'text'}
                          id={'namaBarang'}
                          name={'namaBarang'}
                          value={formikBarang.values.namaBarang}
                          onChange={formikBarang.handleChange}
                          isError={
                            formikBarang.touched.namaBarang &&
                            formikBarang.errors.namaBarang
                          }
                          textError={formikBarang.errors.namaBarang}
                          onBlur={formikBarang.handleBlur}
                        />
                        <CustomInput
                          placeholder={'Deskripsi Barang'}
                          // inputStyle={'w-full border-[#00c29a] border bg-black'}
                          stylingInput="w-[405px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
                          inputType={'text'}
                          id={'deskripsiBarang'}
                          name={'deskripsiBarang'}
                          value={formikBarang.values.deskripsiBarang}
                          onChange={formikBarang.handleChange}
                          isError={
                            formikBarang.touched.deskripsiBarang &&
                            formikBarang.errors.deskripsiBarang
                          }
                          textError={formikBarang.errors.deskripsiBarang}
                          onBlur={formikBarang.handleBlur}
                        />
                        <div className="w-full flex space-x-3">
                          <div className="  px-5 rounded  flex items-center">
                            <p className="font-bold text-[#E7F6F2]">Rp</p>
                          </div>
                          <CustomInput
                            placeholder={'Harga Awal'}
                            stylingInput="w-[330px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
                            inputType={'number'}
                            id={'hargaAwal'}
                            name={'hargaAwal'}
                            value={formikBarang.values.hargaAwal}
                            onChange={formikBarang.handleChange}
                            isError={
                              formikBarang.touched.hargaAwal &&
                              formikBarang.errors.hargaAwal
                            }
                            textError={formikBarang.errors.hargaAwal}
                            onBlur={formikBarang.handleBlur}
                          />
                        </div>
                        <div className="flex space-x-10">
                          <button
                            className="bg-[#E7F6F2] rounded-md  h-[50px] text-[#395B64] w-[40%] ml-4 mr-2 mt-1 mb-1"
                            onClick={() => setShowModal(false)}
                          >
                            Batal
                          </button>
                          <button
                            type="submit"
                            className="bg-[#A5c9ca] rounded-md  h-[50px] text-[#395B64] w-[40%] mt-1 mb-1"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
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
                        {convertRupiah.convert(item?.hargaAwal)}
                      </td>
                      <td className="line-clamp-2 w-[300px] flex items-center text-[#E7F6F2] ">
                        <p className="pt-3 text-center text-[#E7F6F2]">
                          {item?.deskripsiBarang}
                        </p>
                      </td>
                      <td className="mb-5 classNametext-center text-[#E7F6F2]">
                        <div className="flex pr-5 py-5 w-full justify-center space-x-3">
                          <button
                            className="bg-[#E7F6F2] rounded-md  h-[50px] text-[#395B64] w-[40%] mr-2 mt-1 mb-1"
                            onClick={() => {
                              handleGetDetailBarang(item.id);
                              return setShowModal(true);
                            }}
                          >
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
