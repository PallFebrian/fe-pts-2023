import React from 'react';

// import CustomButton from '../../komponent/CustomButton';
import CustomInput from '../../komponent/CustomInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { loginProses } from '../../API/auth';
export default function Login() {
    let navigate = useNavigate();
  //   let dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-[#4b5ae2] flex">
        <div className="bg-[#F9FCF8] h-full w-[100%] flex flex-col justify-center pr-64 pl-64 ">
          <div className="bg-[#D6E6D5] h-[75%] w-[50%]flex justify-center rounded-3xl shadow-lg">
            {/* <section className=" flex justify-center mt-24"></section> */}

            <h1 className=" flex flex-col justify-center items-center text-[#80917D] text-[30px] mt-20">
              Welcome back
            </h1>
            <h3 className=" flex flex-col justify-center items-center text-[#A3BD9E] text-[19px] mb-8">
              Please enter your details
            </h3>
            <form>
              <section className=" flex flex-col justify-center items-center">
                <CustomInput
                  name="email"
                  label={'Email'}
                  stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                  stylingLabel={'text-[#899988]'}
                />
              </section>
              <section className=" flex flex-col justify-center items-center">
                <CustomInput
                  name="password"
                  label={'Password'}
                  stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
                  stylingLabel={'text-[#899988]'}
                />
              </section>
            </form>

            <button
              className=" flex flex-col justify-end items-end text-[#A3BD9E] text-[19px] ml-[610px] mt-1 mb-1"
              onClick={() => {
                //   return navigate('/forgotPassword');
              }}
            >
              Forgot password?
            </button>
            <from className=" flex flex-col justify-center items-center">
              <button className="w-[500px] bg-[#80917D] py-[8px] border rounded focus:outline-none mt-3 text-[#F9FCF8] text-[27px]"
                onClick={() => {
                  return navigate('/home');
              }}>
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
        </div>
      </div>
    </React.Fragment>
  );
}
