import React, { useState } from 'react';
import { CustomButton, CustomInput, SosmedLog } from '../../komponent';
import CustomSelect from '../../komponent/CustomSelect';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { authRegister, authRegisterP } from '../../redux/action/authAction';

export default function TambahPetugas() {
  const [isLoading, setIsLoading] = useState(false);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const formikPetugas = useFormik({
    initialValues: {
      namaPetugas: '',
      username: '',
      password: '',
      role: '',
    },
    // validationSchema: Yup.object().shape({
    //   namaLengkap: Yup.string()
    //     .min(2, 'Nama minimal 2 huruf')
    //     .required('Nama Lengkap wajib diisi'),
    //   username: Yup.string()
    //     .min(4, 'Username minimal 4 huruf')
    //     .required('Username wajib diisi'),
    //   telp: Yup.string()
    //     .min(10, 'Nomor Telpon minimal 10 huruf')
    //     .required('Nomor Telpon wajib diisi'),
    //   password: Yup.string()
    //     .min(8, 'Password minimal 8 huruf')
    //     .required('Password wajib diisi'),
    //   confirmPasswordMasyarakat: Ymup.string()
    //     .min(8, 'Password minimal 8 huruf')
    //     .required('Password wajib diisi'),
    // }),
    onSubmit: async (values) => {
      console.log('object', values);

      try {
        setIsLoading(true);
        alert(JSON.stringify(values, null, 2));

        const response = await dispatch(authRegisterP(values));
        console.log(response);
        if (response?.status === 'Success') {
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
            title: response?.msg,
          });
          return navigate('/login', { replace: true });
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
        <form onSubmit={formikPetugas.handleSubmit}>
          <CustomInput
            label={'Nama petugas'}
            inputStyle={'w-full'}
            inputType={'text'}
            id={'namaPetugas'}
            name={'namaPetugas'}
            value={formikPetugas.values.namaPetugas}
            onChange={formikPetugas.handleChange}
            isError={
              formikPetugas.touched.namaLengkap &&
              formikPetugas.errors.namaLengkap
            }
            textError={formikPetugas.errors.namaPetugas}
            onBlur={formikPetugas.handleBlur}
            stylingInput="w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
            stylingLabel={'text-[#e7f6f2]'}
          />
          <CustomInput
            label={'Username'}
            inputStyle={'w-full'}
            inputType={'text'}
            id={'username'}
            name={'username'}
            value={formikPetugas.values.username}
            onChange={formikPetugas.handleChange}
            isError={
              formikPetugas.touched.username && formikPetugas.errors.username
            }
            textError={formikPetugas.errors.username}
            onBlur={formikPetugas.handleBlur}
            stylingInput="w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
            stylingLabel={'text-[#e7f6f2]'}
          />
          <CustomInput
            label={'Password'}
            inputStyle={'w-full'}
            inputType={'password'}
            id={'password'}
            name={'password'}
            value={formikPetugas.values.password}
            onChange={formikPetugas.handleChange}
            isError={
              formikPetugas.touched.password && formikPetugas.errors.password
            }
            textError={formikPetugas.errors.password}
            onBlur={formikPetugas.handleBlur}
            stylingInput="w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
            stylingLabel={'text-[#e7f6f2]'}
          />
          {/* <CustomInput
                    label={'Role'}
                    inputStyle={'w-full'}
                    inputType={'role'}
                    id={'role'}
                    name={'role'}
                    value={formikPetugas.values.telp}
                    onChange={formikPetugas.handleChange}
                    isError={
                      formikPetugas.touched.telp &&
                      formikPetugas.errors.telp
                    }
                    textError={formikPetugas.errors.telp}
                    onBlur={formikPetugas.handleBlur}
                    stylingInput="w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
                    stylingLabel={'text-[#e7f6f2]'}
                  /> */}
          {/* <div className="flex w-full space-x-3"> */}

          <CustomSelect
             label={'Role'}
            id={'role'}
            name={'role'}
            value={formikPetugas.values.telp}
            onChange={formikPetugas.handleChange}
            isError={formikPetugas.touched.telp && formikPetugas.errors.telp}
            textError={formikPetugas.errors.telp}
            onBlur={formikPetugas.handleBlur}
            selectStyle={'w-full'}
            StylingSelect={
              'w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none text-grey'
            }
          >
            <option value={'1'}>pilih role</option>
            <option value={'2'}>admin</option>
            <option value={'3'}>petugas</option>
          </CustomSelect>
          <button
            type={'submit'}
            title={isLoading ? 'proses' : 'creating'}
            className="w-[500px] bg-[#A5C9CA] py-[8px] border rounded focus:outline-none mt-3 text-[#395B64] text-[27px]"
          >
            Create Account
          </button>
        </form>

        {/* <CustomInput
        placeholder={'Konfirmasi Password'}
        inputStyle={'w-full'}
        stylingInput="w-[214px] bg-[#E7F6F2] py-[13px] border focus:outline-none"
        stylingLabel={'text-[#395B64]'}
      /> */}
        {/* </div> */}

        {/* <div className="flex justify-between w-full">
          <SosmedLog
            icon={<FaGoogle color="white" size={22} />}
            stylingDiv={' hover:bg-[#A5C9CA] w-[120px] justify-center'}
          />
          <SosmedLog
            icon={<FaFacebook color="white" size={22} />}
            stylingDiv={' hover:bg-[#A5C9CA] w-[120px] justify-center'}
          />
          <SosmedLog
            icon={<FaApple color="white" size={22} />}
            stylingDiv={'hover:bg-[#A5C9CA]  w-[120px] justify-center'}
          />
        </div> */}
      </div>
    </div>
  );
}
