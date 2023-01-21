import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
const ContactUs = () => {
  return (
    <div
      className="my-20"
      style={{
        background: `url(${appointment})`,
      }}
    >
      {/* <div className="text-center">
        <h3 className="text-xl font-bold  text-primary uppercase">
          Contact Us
        </h3>
        <h2 className="text-3xl font-bold text-white">
          Stay Connected with us
        </h2>
      </div> */}
      <div className="hero-content  flex-col flex-row ">
      <div className="text-center">
        <h3 className="text-xl font-bold  text-primary uppercase">
          Contact Us
        </h3>
        <h2 className="text-3xl font-bold text-white">
          Stay Connected with us
        </h2>
      </div>
                <div className="form-control mt-6 w-full max-w-sm shadow-2xl   ">
                        <input
                            type="text"
                            placeholder="email"
                            className="input input-bordered"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered my-6"
                        />
                        <textarea className="textarea textarea-accent mb-6" placeholder="Your Message"></textarea>
                        <PrimaryButton >Submit</PrimaryButton>
                        
                </div>
      </div>
    </div>
  );
};

export default ContactUs;
