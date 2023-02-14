import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, price, slots } = appointmentOption;

  return (
    <div className="card shadow-xl mt-12 bg-teal-100">
      <div className="card-body text-center">
        <h2 className=" text-green-700 font-semibold text-3xl text-center">{name}</h2>
        <p className="font-bold">{ slots.length > 0 ? slots[0] : 'Tey Another Day' }</p>
        <p className="font-bold">{ slots.length } {slots.length >1 ? 'spaces': 'space'}Available</p>
        <p><small className="font-bold">Price ${price}</small></p>
        <div className="card-actions justify-center ">
          {/* <button className="btn  btn-primary  text-violet-700  font-bold">Book Appointment</button> */}
          <label 
          disabled ={slots.length === 0}
           htmlFor="booking-modal"
           className="btn btn-primary  text-violet-700  font-bold"
           onClick={ ()  => setTreatment(appointmentOption)}
           >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};
 
export default AppointmentOption;
