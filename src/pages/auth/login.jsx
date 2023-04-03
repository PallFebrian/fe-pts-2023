import React from 'react';

// import CustomButton from '../../komponent/CustomButton';
import CustomInput from '../../komponent/CustomInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../redux/action/authAction';
import { reach } from 'yup';
import { toast } from 'react-hot-toast';
// import { loginProses } from '../../API/auth';
export default function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [errorUsername, setErrorUsername] = React.useState('');
  const [errorPassword, setErrorPassword] = React.useState('');

  const [payload, setPayload] = React.useState({
    username: '',
    password: '',
  });
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const Swal = require('sweetalert2');

  const [isLoading, setIsLoading] = React.useState(false);
  let [messageError, setMessageError] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await dispatch(authLogin(payload));
      console.log('response => ', response);
      if (response?.status === 'Success') {
        toast.success(response.msg);
        if (response?.user?.id_level === undefined) {
          return navigate('/home', { replace: true });
        } else {
          return navigate('/dashboard/barang', { replace: true });
        }
      } else {
        setErrorUsername(response?.response?.data?.msg);
        setErrorPassword(response?.response?.data?.msg);
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
          icon: 'error',
          title: response?.response?.data?.msg,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
    console.log('jalan cuy');
  };
  //   let dispatch = useDispatch();
  console.log('payload', payload);
  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-[#4b5ae2] flex">
        <div className="bg-[#2C3333] h-full w-[100%] flex flex-col justify-center pr-[390px] pl-[390px] ">
          <div className="bg-[#395B64] h-[75%] w-[50%]flex justify-center rounded-3xl shadow-lg">
            {/* <section className=" flex justify-center mt-24"></section> */}

            <h1 className=" flex flex-col justify-center items-center text-[#E7F6F2] text-[30px] mt-20">
              Welcome back
            </h1>
            <h3 className=" flex flex-col justify-center items-center text-[#E7F6F2] text-[19px] mb-8">
              Please enter your details
            </h3>
            <form onSubmit={handleSubmit}>
              <section className=" flex flex-col justify-center items-center">
                <CustomInput
                  name="username"
                  id="username"
                  onChange={handleChange}
                  value={payload.username}
                  label={'Username'}
                  stylingInput="w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none"
                  stylingLabel={'text-[#E7F6F2]'}
                />
              </section>
              <section className=" flex flex-col justify-center items-center">
                <CustomInput
                 type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={payload.password}
                  label={'Password'}
                  stylingInput="w-[500px] bg-[#E7F6F2] py-[13px] border focus:outline-none "
                  stylingLabel={'text-[#E7F6F2]'}
                />
              </section>

              <button
                className=" flex flex-col justify-end items-end text-[#E7F6F2] text-[19px] ml-[480px] mt-1 mb-1"
                onClick={() => {
                  //   return navigate('/forgotPassword');
                }}
              >
                Forgot password?
              </button>
              <section
                className=" flex flex-col justify-center items-center"
                // onClick={() => {
                //   return navigate('/home');
                // }}
              >
                <button
                  type={'submit'}
                  title={isLoading ? 'proses' : 'login'}
                  className="w-[500px] bg-[#A5C9CA] py-[8px] border rounded focus:outline-none mt-3 text-[#395B64] text-[27px]"
                >
                  Sign in
                </button>
              </section>
              <section className=" flex flex-col justify-center items-center mt-3">
                <p className="text-[#E7F6F2] flex">
                  Don't have an account?
                  <button
                    className="text-[#A5C9CA] ml-1"
                    onClick={() => {
                      return navigate('/register');
                    }}
                  >
                    Sign up
                  </button>
                </p>
              </section>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
