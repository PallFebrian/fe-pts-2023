import React from 'react';
import bg from '../assets/image/OrangApel.png';
import CustomButton from '../komponent/CustomButton';
import CustomInput from '../komponent/CustomInput';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();
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
          <form className=" flex flex-col justify-center items-center">
            <CustomInput
              label={'Email'}
              stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
              stylingLabel={'text-[#899988]'}
            />
          </form>
          <form className=" flex flex-col justify-center items-center">
            <CustomInput
              label={'Password'}
              stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
              stylingLabel={'text-[#899988]'}
            />
          </form>
          <button className=" flex flex-col justify-end items-end text-[#A3BD9E] text-[19px] mr-[132px] mt-1"  onClick={() => {
                  return navigate('/forgotPassword');
                }}>
            Forgot password?
          </button>
          <from className=" flex flex-col justify-center items-center">
            <button className="w-[500px] bg-[#80917D] py-[8px] border rounded focus:outline-none mt-3 text-[#F9FCF8] text-[27px]">
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
