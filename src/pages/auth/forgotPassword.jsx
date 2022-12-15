import React from 'react';
import bg from '../../assets/image/OrangApel.png';
import CustomButton from '../../komponent/CustomButton';
import CustomInput from '../../komponent/CustomInput';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authForgot, authReset } from '../../redux/action/authAction';
import Swal from 'sweetalert2';


export default function ForgotPassword() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [payload, setPayload] = React.useState({
    email: '',
  });

  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const [messageError,setMessageError]= React.useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setIsLoading(true);
      const response = await dispatch(authForgot(payload));
      console.log('response', response);
      if (response.status === "Sucsess") {
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
          icon: 'success',
          title: 'Berhasil mengirik pesan',
        });
        // return navigate("/login", {replace: true})
        alert("yatta")
      }else{
        setMessageError(response.response.data.msg)
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
          title: 'Email tidak di temukan',
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      // setIsLoading(false);
    }
  };
  console.log('payload', payload);
  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-[#4b5ae2] flex">
        <div className="bg-[#F9FCF8] h-full w-[50%] flex flex-col justify-center">
          <h1 className=" flex flex-col justify-center items-center text-[#80917D] text-[30px]">
            Forgot password?
          </h1>
          <h3 className=" flex flex-col justify-center items-center text-[#A3BD9E] text-[19px] mb-11">
            No worries, we’ll send you reset intructions
          </h3>
          <form onSubmit={handleSubmit}>
            <section className=" flex flex-col justify-center items-center">
              <CustomInput
                label={'Email'}
                onChange={handleChange}
                type="email"
                name="email"
                value={payload.email}
                stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                stylingLabel={'text-[#899988]'}
              />
            </section>
            <section className="ml-36">
            <p className="error text-red-500 italic">{messageError}</p>
            </section>
            
            <from className=" flex flex-col justify-center items-center mt-5">
              <button
                className="w-[500px] bg-[#80917D] py-[8px] border rounded focus:outline-none mt-3 text-[#F9FCF8] text-[27px]"
                type="submit"
              >
                Send
              </button>
            </from>
          </form>

          <form className=" flex flex-col justify-center items-center mt-5">
            <p className="text-[#80917D] flex">
              Back to
              <button
                className="text-[#466443] ml-1"
                onClick={() => {
                  return navigate('/login');
                }}
              >
                Log in
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
