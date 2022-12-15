import React from 'react';
import bg from '../../assets/image/OrangApel.png';
import CustomButton from '../../komponent/CustomButton';
import CustomInput from '../../komponent/CustomInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginProses } from '../../API/auth';
import { authLogin } from '../../redux/action/authAction';
import Swal from 'sweetalert2';

export default function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [payload, setPayload] = React.useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    e.preventDefault();
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const [error, setError] = React.useState('');
  const [errorPassword, setErrorPassword] = React.useState('');
  const [errorEmail, setErrorEmail] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await dispatch(authLogin(payload));
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
        return navigate("/home", { replace: true });
      } else {
        
        setErrorMessage(response?.response?.data?.msg);
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
            Welcome back
          </h1>
          <h3 className=" flex flex-col justify-center items-center text-[#A3BD9E] text-[19px] mb-11">
            Please enter your details
          </h3>
          <form onSubmit={handleSubmit}>
            <section className=" flex flex-col justify-center items-center">
              <CustomInput
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                isError={error.email}
                value={payload.email}
                label={'Email'}
                stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                stylingLabel={'text-[#899988]'}
              />
            </section>
            <section className="ml-36">
              <p className='"error text-red-500 italic"'>{errorEmail}</p>
            </section>

            <section className=" flex flex-col justify-center items-center">
              <CustomInput
                onChange={handleChange}
                name="password"
                label={'Password'}
                onBlur={handleBlur}
                isError={error.password}
                value={payload.password}
                stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                stylingLabel={'text-[#899988]'}
              />
            </section>
            <section className="ml-36">
              <p className='"error text-red-500 italic"'>{errorPassword}</p>
            </section>
          </form>

          <button
            className=" flex flex-col justify-end items-end text-[#A3BD9E] text-[19px] mr-[132px] mt-1 mb-1"
            onClick={() => {
              return navigate('/forgotPassword');
            }}
          >
            Forgot password?
          </button>
          <from className=" flex flex-col justify-center items-center">
            <button
            title={isLoading ? "Proses" : "Sign in"}
              className="w-[500px] bg-[#80917D] py-[8px] border rounded focus:outline-none mt-3 text-[#F9FCF8] text-[27px]"
              onClick={handleSubmit}
            >
              Sign in
            </button>
          </from>
          <form className=" flex flex-col justify-center items-center mt-3">
            <p className="text-[#80917D] flex">
              Don't have an account?
              <button
                className="text-[#466443]"
                onClick={() => {
                  return navigate('/register');
                }}
              >
                Sign up
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
