import React, { useState } from 'react';
import { CustomButton, CustomInput, SosmedLog } from '../../komponent';

import { NavLink, useNavigate } from 'react-router-dom';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomSelect from '../../komponent/CustomSelect';
import { useDispatch } from 'react-redux';
import { authRegister, authRegisterP } from '../../redux/action/authAction';
import Swal from 'sweetalert2';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const formikMasyarakat = useFormik({
    initialValues: {
      namaLengkap: '',
      username: '',
      telp: '',
      password: '',
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
    //   confirmPasswordMasyarakat: Yup.string()
    //     .min(8, 'Password minimal 8 huruf')
    //     .required('Password wajib diisi'),
    // }),
    onSubmit: async (values) => {
      console.log('object', values);

      try {
        setIsLoading(true);
        alert(JSON.stringify(values, null, 2));

        const response = await dispatch(authRegister(values));
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
    <section className="bg-[#2C3333] h-screen">
      <body className="h-[90%] pt-[50px] ">
        <section className="h-[90%] px-[30px]">
          <div className="w-full justify-center flex ">
            <div className="flex flex-col  items-center bg-[#395B64] shadow-lg p-7 w-[700px]  rounded-3xl justify-center">
              <div className="">
                <h1 className="text-[#E7F6F2] text-[30px] mb-[7%]">
                  Daftar Akun Sebagai:
                </h1>
              </div>

              <div className="w-full flex flex-col items-center justify-center">
                {/* <TabPanel className={'w-full space-y-5 mt-5'}> */}
                <form onSubmit={formikMasyarakat.handleSubmit}>
                  <CustomInput
                    label={'Nama Lengkap'}
                    inputStyle={'w-full'}
                    inputType={'text'}
                    id={'namaLengkap'}
                    name={'namaLengkap'}
                    value={formikMasyarakat.values.namaLengkap}
                    onChange={formikMasyarakat.handleChange}
                    isError={
                      formikMasyarakat.touched.namaLengkap &&
                      formikMasyarakat.errors.namaLengkap
                    }
                    textError={formikMasyarakat.errors.namaLengkap}
                    onBlur={formikMasyarakat.handleBlur}
                    stylingInput="w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
                    stylingLabel={'text-[#e7f6f2]'}
                  />
                  <CustomInput
                    label={'Username'}
                    inputStyle={'w-full'}
                    inputType={'text'}
                    id={'username'}
                    name={'username'}
                    value={formikMasyarakat.values.username}
                    onChange={formikMasyarakat.handleChange}
                    isError={
                      formikMasyarakat.touched.username &&
                      formikMasyarakat.errors.username
                    }
                    textError={formikMasyarakat.errors.username}
                    onBlur={formikMasyarakat.handleBlur}
                    stylingInput="w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
                    stylingLabel={'text-[#e7f6f2]'}
                  />
                  <CustomInput
                    label={'Nomor Telpon'}
                    inputStyle={'w-full'}
                    inputType={'number'}
                    id={'telp'}
                    name={'telp'}
                    value={formikMasyarakat.values.telp}
                    onChange={formikMasyarakat.handleChange}
                    isError={
                      formikMasyarakat.touched.telp &&
                      formikMasyarakat.errors.telp
                    }
                    textError={formikMasyarakat.errors.telp}
                    onBlur={formikMasyarakat.handleBlur}
                    stylingInput="w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
                    stylingLabel={'text-[#e7f6f2]'}
                  />
                  {/* <div className="flex w-full space-x-3"> */}
                  <CustomInput
                    label={'Password'}
                    inputStyle={'w-full'}
                    inputType={'password'}
                    id={'password'}
                    name={'password'}
                    value={formikMasyarakat.values.password}
                    onChange={formikMasyarakat.handleChange}
                    isError={
                      formikMasyarakat.touched.password &&
                      formikMasyarakat.errors.password
                    }
                    textError={formikMasyarakat.errors.password}
                    onBlur={formikMasyarakat.handleBlur}
                    stylingInput="w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
                    stylingLabel={'text-[#e7f6f2]'}
                  />
                  <button
                    type={'submit'}
                    title={isLoading ? 'proses' : 'creating'}
                    className="w-[500px] bg-[#A5C9CA] py-[8px] border rounded focus:outline-none mt-3 text-[#395B64] text-[27px]"
                  >
                    Create Account
                  </button>
                </form>

                <div className="w-full flex justify-center mb-[5%]">
                  <NavLink to={'/login'} className={''}>
                    <p className="text-[#E7F6F2] mt-5 cursor-pointer hover:text-[#A5C9CA] transition-all ease-in-out w-fit text-[13px]">
                      have an account?
                    </p>
                  </NavLink>
                </div>
                <div className="flex justify-between w-full">
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
                    stylingDiv={' hover:bg-[#A5C9CA] w-[120px] justify-center'}
                  />
                </div>
                {/* </TabPanel> */}
              </div>
            </div>
          </div>
        </section>
      </body>
    </section>
  );
};

export default Register;
