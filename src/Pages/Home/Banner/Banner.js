import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import background from '../../../assets/images/bg.png';

const Banner = () => {
  return (
    <div
    style={{
      background: `url( ${background})`,
      
    }}
    className="hero bg-base-100 mt-5 ">
      <div className="hero-content flex-col  lg:flex-row-reverse ">
        <img src={chair} className=" rounded-lg  lg:w-1/2 shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6 ">
            Are you looking for Best Dentist or Dentist near me or Best Dental
            Clinic Bangladesh. Yes, you are in the right place. LASER DENTAL is
            one of the most hi-tech dental clinics in Bangladesh.
          </p>
         {/*  <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button> */}   
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
