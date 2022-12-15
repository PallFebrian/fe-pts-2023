import React from 'react';
import bg from '../../assets/image/OrangApel.png';
import CustomButton from '../../komponent/CustomButton';
import CustomInput from '../../komponent/CustomInput';
import { useNavigate, useParams } from 'react-router-dom';
import { authReset } from '../../redux/action/authAction';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { loginProses } from '../../API/auth';
import Cookies from 'js-cookie';

export default function ResetPassword() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { id, token } = useParams();
  const [payload, setPayload] = React.useState({
    passwordBaru: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      if (payload.passwordBaru === '' || payload.confirmPassword === '') {
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

        return Toast.fire({
          icon: 'error',
          title: 'Password / konfirmasi password tidak boleh kosong',
        });
      }
      if (payload.confirmPassword !== payload.passwordBaru) {
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

        return Toast.fire({
          icon: 'error',
          title: 'Password dan konfirmasi password tidak sama',
        });
      }
      if (
        payload.passwordBaru.length < 8 ||
        payload.confirmPassword.length < 8
      ) {
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

        return Toast.fire({
          icon: 'error',
          title: 'Password kurang dari 8 huruf',
        });
      }
      if (
        payload.passwordBaru.length > 8 &&
        payload.confirmPassword.length > 8 &&
        payload.confirmPassword === payload.passwordBaru &&
        payload.passwordBaru !== '' &&
        payload.confirmPassword !== ''
      ) {
        const response = await dispatch(authReset(id, token, payload));
        console.log('responseResetPassword =>', response);
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
      }

      // if (response?.response?.data?.status === 'fail') {

      // }
      // const response = await loginProses(payload);
      // const data = response

      // Cookies.set("myapps_token", data?.token);
    } catch (err) {
      console.log('ResetPasswordProses =>', err);
    } finally {
      setIsLoading(false);
    }
  };
  console.log('payload', payload);
  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-[#4b5ae2] flex">
        <div className="bg-[#F9FCF8] h-full w-[50%] flex flex-col justify-center">
          <h1 className=" flex flex-col justify-center items-center text-[#80917D] text-[30px]">
            Reset password?
          </h1>
          <h3 className=" flex flex-col justify-center items-center text-[#A3BD9E] text-[19px] mb-11">
            No worries, we’ll send you reset intructions
          </h3>
          <form onSubmit={handleSubmit}>
            <section className=" flex flex-col justify-center items-center">
              <CustomInput
                name="passwordBaru"
                value={payload.passwordBaru}
                onChange={handleChange}
                label={'Password'}
                stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                stylingLabel={'text-[#899988]'}
              />
            </section>
            <section className=" flex flex-col justify-center items-center">
              <CustomInput
                name="confirmPassword"
                value={payload.confirmPassword}
                onChange={handleChange}
                label={'Confirm Password'}
                stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                stylingLabel={'text-[#899988]'}
              />
            </section>
            <section className=" flex flex-col justify-center items-center mt-5">
              <button className="w-[500px] bg-[#80917D] py-[8px] border rounded focus:outline-none mt-3 text-[#F9FCF8] text-[27px]">
                Save
              </button>
            </section>
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
