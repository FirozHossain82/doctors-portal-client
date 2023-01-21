import { format } from "date-fns/esm";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment; // treatment means appointment option
  const date = format(selectedDate, "PP");

  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking ={
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot: slot,
      email: email,
      phone: phone,
    }
    /* 
        TODO: send data to the server and once data is saved then close the modal 
        and display Success toast
    */
    console.log(booking);
    setTreatment(null)
  }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative bg-cyan-200">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold">{name}</h3>

          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5 mt-12 ">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered input-info w-full  font-bold"
            />
            <select name="slot" className="select select-info w-full ">
              {
                slots.map((slot, i) => <option 
                  value={slot}
                  key={i}
                  >{slot}</option>)
              }
            </select>
            <input
            name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-info w-full  "
            />
            <input
            name="email"
              type="email"
              placeholder="Email Address"
              className="input input-bordered input-info w-full "
            />
            <input
            name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-info w-full "
            />
            <input
              className="btn btn-accent w-full mt-4 "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
