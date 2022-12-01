import React from 'react';
import bg from '../assets/image/OrangApel.png';
import CustomButton from '../komponent/CustomButton';
import CustomInput from '../komponent/CustomInput';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  let navigate = useNavigate();
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
          <form className=" flex flex-col justify-center items-center">
            <CustomInput
              label={'New password'}
              stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
              stylingLabel={'text-[#899988]'}
            />
          </form>
          <form className=" flex flex-col justify-center items-center">
            <CustomInput
              label={'Confirm password'}
              stylingInput="w-[500px] bg-[#B9C9B8] py-[13px] border focus:outline-none"
              stylingLabel={'text-[#899988]'}
            />
          </form>
          <from className=" flex flex-col justify-center items-center mt-5">
            <button
              className="w-[500px] bg-[#80917D] py-[8px] border rounded focus:outline-none mt-3 text-[#F9FCF8] text-[27px]"
              onClick={() => {
                return navigate('/login');
              }}
            >
              Save
            </button>
          </from>
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