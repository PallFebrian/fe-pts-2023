import React, { useState } from 'react';
import { CustomButton, CustomInput, SosmedLog } from '../../komponent';
import CustomSelect from '../../komponent/CustomSelect';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { authRegister, authRegisterP } from '../../redux/action/authAction';
import { tambahBarang } from '../../api/barangApi';
import { toast } from 'react-hot-toast';

export default function TambahBarang() {
  const [isLoading, setIsLoading] = useState(false);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const formikBarang = useFormik({
    initialValues: {
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

        const response = await tambahBarang(values);
        console.log('baranggg', response);
        if (response?.data?.status === 'Success') {
          
          toast.success(response.data.msg );
          return navigate('/dashboard/barang', { replace: true });
        }
      } catch (err) {
        console.log('err', err);
      } finally {
        setIsLoading(false);
      }
    },
  });
  return (
    <div className="flex justify-center mt-[10%]">
      <div className="flex flex-col  items-center bg-[#395B64] shadow-lg p-7 w-[700px] h-[500px] rounded-3xl justify-center">
        <form onSubmit={formikBarang.handleSubmit}>
          <CustomInput
            label={'Nama Barang'}
            inputStyle={'w-full'}
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
            stylingInput="w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
            stylingLabel={'text-[#e7f6f2]'}
          />
          
          <CustomInput
            label={'Harga awal'}
            inputStyle={'w-full'}
            inputType={'text'}
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
            stylingInput="w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
            stylingLabel={'text-[#e7f6f2]'}
          />
          
          <CustomInput
            label={'Seskripsi barang'}
            inputStyle={'w-full'}
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
            stylingInput="w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
            stylingLabel={'text-[#e7f6f2]'}
          />
          
          <button
            type={'submit'}
            title={isLoading ? 'proses' : 'creating'}
            className="w-[500px] bg-[#A5C9CA] py-[8px] border rounded focus:outline-none mt-3 text-[#395B64] text-[27px]"
          >
            Create 
          </button>
        </form>
      </div>
    </div>
  );
}
