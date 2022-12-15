import React from 'react';
import bg from '../../assets/image/OrangApel.png';
import CustomButton from '../../komponent/CustomButton';
import CustomInput from '../../komponent/CustomInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authRegister } from '../../redux/action/authAction';
import CustomSelect from '../../komponent/CustomSelect';
import Swal from 'sweetalert2';

export default function Register() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [messageError, setMessageError] = React.useState('');
  // const [errorName, setErrorName] = React.useState('');
  // const [errorEmail, setErrorEmail] = React.useState('');
  // const [errorPassword, setErrorPassword] = React.useState('');
  // const [errorConfirmPassword, setErrorConfirmPassword] = React.useState('');
  const [payload, setPayload] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    status: '',
    jenisKelamin: '',
  });

  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const [error, setError] = React.useState('');

  const [errorPassword, setErrorPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [errorConfirmPassword, setErrorConfirmPasswo] = React.useState('');
  const [errorEmail, setErrorEmail] = React.useState('');
  const [errorName, setErrorName] = React.useState('');
  const [errorStatus, setErrorStatus] = React.useState('');
  const [errorJenisKelamin, setErrorJenisKelamin] = React.useState('');
  const [isLoading, setIsLoading] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await dispatch(authRegister(payload));
      console.log("response", response);
      if (response?.status === "Success") {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Berhasil Login'
        })
        return navigate("/dashboard", { replace: true });
      } else {
        setErrorMessage(response?.response?.data?.msg);
        setErrorName(response?.response?.data?.errors?.name?.msg);
        setErrorEmail(response?.response?.data?.errors?.email?.msg);
        setErrorPassword(response?.response?.data?.errors?.password?.msg);
        setErrorConfirmPasswo(response?.response?.data?.errors?.confirmPassword?.msg);
        setErrorStatus(response?.response?.data?.errors?.status?.msg);
        setErrorJenisKelamin(response?.response?.data?.errors?.jenisKelamin?.msg);
      
        Swal.fire(
          'Error!',
          errorMessage,
          'error'
        )
      }
      if (payload.password === "") {
        setErrorPassword("Password wajib diisi")
      } else if (payload.password.length < 8) {
        setErrorEmail("Password harus 8 karakter")
      } if (payload.email === "") {
        setErrorEmail("Email wajib diisi")
      } 
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    setPayload(() => {
      return {
        name: "",
        email: "",
        password: "",
        status: "",
        jenisKelamin: "",
      };
    });
    console.log("running", payload);
  };
  const handleBlur = (e) => {
    if (e.target.value === '')
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    else
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: false,
        };
      });
  };
  console.log('payload', payload);
  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-[#4b5ae2] flex">
        <div className="bg-[#F9FCF8] h-full w-[50%] flex flex-col justify-center">
          <h1 className=" flex flex-col justify-center items-center text-[#80917D] text-[30px]">
            Create new account
          </h1>
          <h3 className=" flex flex-col justify-center items-center text-[#A3BD9E] text-[19px] ">
            Please crate your account
          </h3>
          <form onSubmit={handleSubmit}>
            <section className=" flex flex-col justify-center items-center">
              <CustomInput
                name="name"
                label={'Name'}
                onChange={handleChange}
                onBlur={handleBlur}
                isError={error.name}
                value={payload.name}
                stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                stylingLabel={'text-[#899988]'}
              />
               <section className="mr-[48%]">
              <p className='"error text-red-500 italic"'>{errorName}</p>
            </section>
            </section>
            <section className=" flex flex-col justify-center items-center">
              <CustomInput
                name="email"
                label={'Email'}
                onChange={handleChange}
                onBlur={handleBlur}
                isError={error.email}
                value={payload.email}
                stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                stylingLabel={'text-[#899988]'}
              />
               <section className="mr-[48%]">
              <p className='"error text-red-500 italic"'>{errorEmail}</p>
            </section>
            </section>
            <section className=" flex flex-col justify-center items-center">
              <CustomInput
                name="password"
                label={'Password'}
                onChange={handleChange}
                onBlur={handleBlur}
                isError={error.password}
                value={payload.password}
                stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                stylingLabel={'text-[#899988]'}
              />
               <section className="mr-[48%]">
              <p className='"error text-red-500 italic"'>{errorPassword}</p>
            </section>
            </section>
            <section className=" flex flex-col justify-center items-center">
              <CustomInput
                name="confirmPassword"
                label={'Confirm Password'}
                onChange={handleChange}
                onBlur={handleBlur}
                isError={error.confirmPassword}
                value={payload.confirmPassword}
                stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                stylingLabel={'text-[#899988]'}
              />
               <section className="mr-[48%]">
              <p className='"error text-red-500 italic"'>{errorConfirmPassword}</p>
            </section>
            </section>
            <section className="flex">
              <section className=" ml-[133px] mr-[50px]">
                <CustomSelect
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isError={error.jenisKelamin}
                  value={payload.jenisKelamin}
                  name={'jenisKelamin'}
                  opt1={'Jenis Kelamin'}
                  opt2={'Laki - Laki'}
                  opt3={'Perempuan'}
                  value1={'Jenis Kelamin'}
                  value2={'laki-laki'}
                  value3={'perempuan'}
                  label={'Jenis Kelamin'}
                  stylingLabel={'text-[#899988]'}
                  StylingSelect={
                    'w-[225px] bg-[#B9C9B8] py-[13px] border focus:outline-none'
                  }
                />
                <section className="mr-[48%]">
              <p className='"error text-red-500 italic"'>{errorJenisKelamin}</p>
            </section>
              </section>
              <section className="  justify-center items-center  ">
                <CustomSelect
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isError={error.status}
                  value={payload.status}
                  name={'status'}
                  opt1={'Status'}
                  opt2={'Active'}
                  opt3={'Non Active'}
                  value1={'Status'}
                  value2={'active'}
                  value3={'nonactive'}
                  label={'Status'}
                  stylingLabel={'text-[#899988]'}
                  StylingSelect={
                    'w-[225px] bg-[#B9C9B8] py-[13px] border focus:outline-none'
                  }
                />
              </section>
              <section className="mr-[48%]">
              <p className='"error text-red-500 italic"'>{errorStatus}</p>
            </section>
            </section>

            <section className=" flex flex-col justify-center items-center">
              <button className="w-[500px] bg-[#80917D] py-[6px] border rounded focus:outline-none mt-3 text-[#F9FCF8] text-[27px]">
                Sign up
              </button>
            </section>
          </form>
          <from className=" flex flex-col justify-center items-center mt-5"></from>
          <form className=" flex flex-col justify-center items-center mt-3 on">
            <p className="text-[#80917D] flex">
              Have an account?
              <button
                className="text-[#466443]"
                onClick={() => {
                  return navigate('/login');
                }}
              >
                Sign in
              </button>
            </p>
          </form>
        </div>

        <div className="bg-[#D6E6D5] h-screen w-[50%]">
          <section className=" flex justify-center mt-24">
            <img src={bg} alt="" className="w-[45%] h-[45%] " />
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}
