import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section className="mt-36"
        style={{
            background: `url(${appointment})`
            
        }}
    >
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} alt="" className="-mt-36 hidden md:block lg:w-1/2  rounded-lg shadow-2xl" />
          <div className="ml-8">
            <h4 className="text-primary font-bold">Appointment</h4>
            <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
            <p className="py-6 font-semibold text-white">
              Helping patients achieve good dental health & beautiful smile is a
              privilege & responsibility. For over 10 years, my team & I have
              proudly provided the best dental experience in Bangladesh. Our
              comfort-first approach is designed to meet the needs of you & your
              entire family. At our dental office in Mirpur10, our philosophy of
              care is defined by our personalized service & advanced hi-tech
              treatments. We approach every patient with the same level of
              gentle, thorough care & attention we would give a member of our
              family- and it shows ! You will love the warm & friendly staff &
              relaxing environment.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
