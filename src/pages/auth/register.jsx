// import React from 'react';
// // import CustomButton from '../../komponent/CustomButton';
// import CustomInput from '../../komponent/CustomInput';
// import { useNavigate } from 'react-router-dom';
// // import { useDispatch } from 'react-redux';
// import CustomSelect from '../../komponent/CustomSelect';
// // import Swal from 'sweetalert2';
// export default function Register() {
//   let navigate = useNavigate();
//   // let dispatch = useDispatch();

//   return (
//     <React.Fragment>
//       <div className="w-screen h-screen bg-[#4b5ae2] flex">
//         <div className="bg-[#F9FCF8] h-[100%] w-[100%]  flex justify-center">
//           <div className="bg-[#D6E6D5] h-[100%] w-[90%] flex justify-center flex-col">
//             <div>
//               <h1 className=" flex flex-col justify-center items-center text-[#80917D] text-[30px]">
//                 Create new account
//               </h1>
//               <h3 className=" flex flex-col justify-center items-center text-[#A3BD9E] text-[19px] ">
//                 Please crate your account
//               </h3>
//             </div>
//             <form>
//               <section className=" flex flex-col justify-center items-center">
//                 <CustomInput
//                   name="name"
//                   label={'Name'}
//                   stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
//                   stylingLabel={'text-[#899988]'}
//                 />
//               </section>
//               <section className=" flex flex-col justify-center items-center">
//                 <CustomInput
//                   name="email"
//                   label={'Email'}
//                   stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
//                   stylingLabel={'text-[#899988]'}
//                 />
//               </section>
//               <section className=" flex flex-col justify-center items-center">
//                 <CustomInput
//                   name="password"
//                   label={'Password'}
//                   stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
//                   stylingLabel={'text-[#899988]'}
//                 />
//               </section>
//               <section className=" flex flex-col justify-center items-center">
//                 <CustomInput
//                   name="confirmPassword"
//                   label={'Confirm Password'}
//                   stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
//                   stylingLabel={'text-[#899988]'}
//                 />
//               </section>
//               <section className="flex justify-center">
//                 <CustomSelect
//                   name={'jenisKelamin'}
//                   opt1={'Jenis Kelamin'}
//                   opt2={'Laki - Laki'}
//                   opt3={'Perempuan'}
//                   value1={'Jenis Kelamin'}
//                   value2={'laki-laki'}
//                   value3={'perempuan'}
//                   label={'Jenis Kelamin'}
//                   stylingLabel={'text-[#899988]'}
//                   StylingSelect={
//                     'w-[225px] bg-[#B9C9B8] py-[13px] border focus:outline-none'
//                   }
//                 />
//                 <CustomSelect
//                   name={'status'}
//                   opt1={'Status'}
//                   opt2={'Active'}
//                   opt3={'Non Active'}
//                   value1={'Status'}
//                   value2={'active'}
//                   value3={'nonactive'}
//                   label={'Status'}
//                   stylingLabel={'text-[#899988]'}
//                   StylingSelect={
//                     'w-[225px] bg-[#B9C9B8] py-[13px] border focus:outline-none'
//                   }
//                 />
//               </section>
            

//               <section className=" flex flex-col justify-center items-center">
//                 <button className="w-[500px] bg-[#80917D] py-[6px] border rounded focus:outline-none mt-3 text-[#F9FCF8] text-[27px]">
//                   Sign up
//                 </button>
//               </section>
//               <p className="text-[#80917D] flex">
//                 Have an account?
//                 <button
//                   className="text-[#466443]"
//                   onClick={() => {
//                     return navigate('/login');
//                   }}
//                 >
//                   Sign in
//                 </button>
//               </p>
//             </form>
//             <form className=" flex flex-col justify-center items-center mt-3 on"></form>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

import React from 'react';
import { CustomButton, CustomInput ,SosmedLog} from '../../komponent';
import { NavLink } from 'react-router-dom';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      namaLengkap: '',
      username: '',
      nomorTelpon: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      namaLengkap: Yup.string()
        .min(2, 'Password minimal 2 huruf')
        .required('Nama Lengkap wajib diisi'),
      username: Yup.string()
        .min(4, 'Username minimal 4 huruf')
        .required('Username wajib diisi'),
      nomorTelpon: Yup.string()
        .min(10, 'Nomor Telpon minimal 10 huruf')
        .required('Nomor Telpon wajib diisi'),
      email: Yup.string().email('Email salah').required('Email wajib diisi'),
      password: Yup.string()
        .min(8, 'Password minimal 8 huruf')
        .required('Password wajib diisi'),
      confirmPassword: Yup.string()
        .min(8, 'Password minimal 8 huruf')
        .required('Password wajib diisi'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // formik.resetForm();
      // return navigate("/outlet/createOutlet", { replace: true });
    },
  });
  return (
    <section className="bg-[#F9FCF8] h-screen">

      <body className="h-[90%] pt-[50px] ">
        <section className="h-[90%] px-[30px]">
          <div className="w-full justify-center flex ">
            <div className="flex flex-col  justify-between items-center bg-[#D6E6D5] shadow-lg p-7 w-[500px] rounded-3xl">
              <div className="mb-5">
                <h1 className="text-[#80917D] text-[30px]">Daftar Akun Sebagai:</h1>
              </div>

              <div className="w-full">
                <Tabs className={'w-full'}>
                  <TabList
                    className={`flex border-b border-b-[#80917D] w-full`}
                  >
                    <Tab
                      className={`text-[#C9D1D9] w-full py-[11px] text-[14px] text-center`}
                      selectedClassName={`bg-transparent border-b-[2px] border-b-[#00c29a] font-semibold`}
                    >
                      <span className="  cursor-pointer hover:rounded transition-all ease-in-out px-[50px] w-full py-[5px] text-[#80917D]">
                        Pengguna
                      </span>
                    </Tab>

                    <Tab
                      className={`text-[#C9D1D9] w-full py-[11px] text-[14px] text-center`}
                      selectedClassName={`bg-transparent border-b-[2px] border-b-[#00c29a] font-semibold`}
                    >
                      <span className=" cursor-pointer hover:rounded transition-all ease-in-out px-[50px] w-full py-[5px] text-[#80917D]">
                        Administrator
                      </span>
                    </Tab>
                  </TabList>

                  <TabPanel className={'w-full space-y-5 mt-5'}>
                    <CustomInput
                      placeholder={'Nama Lengkap'}
                      inputStyle={'w-full'}
                      inputType={'text'}
                      id={'namaLengkap'}
                      name={'namaLengkap'}
                      value={formik.values.namaLengkap}
                      onChange={formik.handleChange}
                      isError={
                        formik.touched.namaLengkap && formik.errors.namaLengkap
                      }
                      textError={formik.errors.namaLengkap}
                      onBlur={formik.handleBlur}
                      stylingInput="w-[440px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                  stylingLabel={'text-[#899988]'}
                    />
                    <CustomInput
                      placeholder={'Username'}
                      inputStyle={'w-full'}
                      inputType={'text'}
                      id={'username'}
                      name={'username'}
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      isError={
                        formik.touched.username && formik.errors.username
                      }
                      textError={formik.errors.username}
                      onBlur={formik.handleBlur}
                      stylingInput="w-[440px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                      stylingLabel={'text-[#899988]'}
                    />
                    <CustomInput
                      placeholder={'Nomor Telpon'}
                      inputStyle={'w-full'}
                      inputType={'number'}
                      id={'nomorTelpon'}
                      name={'nomorTelpon'}
                      value={formik.values.nomorTelpon}
                      onChange={formik.handleChange}
                      isError={
                        formik.touched.nomorTelpon && formik.errors.nomorTelpon
                      }
                      textError={formik.errors.nomorTelpon}
                      onBlur={formik.handleBlur}
                      stylingInput="w-[440px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                      stylingLabel={'text-[#899988]'}
                    />
                    <div className="flex w-full space-x-3">
                      <CustomInput
                        placeholder={'Password'}
                        inputStyle={'w-full'}
                        inputType={'password'}
                        id={'password'}
                        name={'password'}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        isError={
                          formik.touched.password && formik.errors.password
                        }
                        textError={formik.errors.password}
                        onBlur={formik.handleBlur}
                        stylingInput="w-[214px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                      stylingLabel={'text-[#899988]'}
                      />
                      <CustomInput
                        placeholder={'Konfirmasi Password'}
                        inputStyle={'w-full'}
                        inputType={'password'}
                        id={'confirmPassword'}
                        name={'confirmPassword'}
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        isError={
                          formik.touched.confirmPassword && formik.errors.confirmPassword
                        }
                        textError={formik.errors.confirmPassword}
                        onBlur={formik.handleBlur}
                        stylingInput="w-[214px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                      stylingLabel={'text-[#899988]'}
                      />
                    </div>
                    <div className="w-full">
                      <CustomButton
                        label={'Buat Akun'}
                        stylingP={'text-black'}
                        stylingButton={
                          'w-full mb-1 py-3 border-none bg-gradient-to-r from-[#00c29a] to-[#e8cd70] hover:to-[#00c29a] hover:from-[#e8cd70]'
                        }
                      />
                      <div className="w-full flex justify-center">
                        <NavLink to={'/login'} className={''}>
                          <p className="text-[#80917D]    cursor-pointer hover:text-[#466443] transition-all ease-in-out w-fit text-[13px]">
                            have an account?
                          </p>
                        </NavLink>
                      </div>
                    </div>
                    <div className="flex justify-between w-full">
                      <SosmedLog
                        icon={<FaGoogle color="white" size={22} />}
                        stylingDiv={
                          ' hover:bg-[#466443] w-[120px] justify-center'
                        }
                      />
                      <SosmedLog
                        icon={<FaFacebook color="white" size={22} />}
                        stylingDiv={
                          ' hover:bg-[#466443] w-[120px] justify-center'
                        }
                      />
                      <SosmedLog
                        icon={<FaApple color="white" size={22} />}
                        stylingDiv={
                          ' hover:bg-[#466443] w-[120px] justify-center'
                        }
                      />
                    </div>
                  </TabPanel>
                  <TabPanel className={'w-full space-y-5'}>
                    <CustomInput
                      placeholder={'Nama Lengkap'}
                      inputStyle={'w-full'}
                      stylingInput="w-[440px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                      stylingLabel={'text-[#899988]'}
                    />
                    <CustomInput
                      placeholder={'Username'}
                      inputStyle={'w-full'}
                      stylingInput="w-[440px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                      stylingLabel={'text-[#899988]'}
                    />
                    <div className="flex w-full space-x-3">
                      <CustomInput
                        placeholder={'Password'}
                        inputStyle={'w-full'}
                        stylingInput="w-[214px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                        stylingLabel={'text-[#899988]'}
                      />
                      <CustomInput
                        placeholder={'Konfirmasi Password'}
                        inputStyle={'w-full'}
                        stylingInput="w-[214px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                        stylingLabel={'text-[#899988]'}
                      />
                    </div>
                    <div className="w-full">
                      <CustomButton
                        label={'Buat Akun'}
                        stylingP={'text-black'}
                        stylingButton={
                          'w-full mb-1 py-3 border-none bg-gradient-to-r from-[#00c29a] to-[#e8cd70] hover:to-[#00c29a] hover:from-[#e8cd70]'
                        }
                      />
                      <div className="w-full flex justify-center">
                        <NavLink to={'/login'} className={''}>
                          <p className="text-[#80917D]  cursor-pointer hover:text-[#466443] transition-all ease-in-out w-fit text-[13px]">
                            have an account?
                          </p>
                        </NavLink>
                      </div>
                    </div>
                    <div className="flex justify-between w-full">
                      <SosmedLog
                        icon={<FaGoogle color="white" size={22} />}
                        stylingDiv={
                          ' hover:bg-[#466443] w-[120px] justify-center'
                        }
                      />
                      <SosmedLog
                        icon={<FaFacebook color="white" size={22} />}
                        stylingDiv={
                          ' hover:bg-[#466443] w-[120px] justify-center'
                        }
                      />
                      <SosmedLog
                        icon={<FaApple color="white" size={22} />}
                        stylingDiv={
                          'hover:bg-[#466443]  w-[120px] justify-center'
                        }
                      />
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

      </body>
    </section>
  );
};

export default Register;