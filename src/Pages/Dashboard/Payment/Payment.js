import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useLoaderData } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
//   const navigation = useNavigation();
  // console.log('booking data', booking);
  const { treatment, price, appointmentDate, slot } = booking;
/*   if(navigation.state === 'loading'){
    return <Loading></Loading>
  } */
  return (
    <div>
      <h3 className="text-3xl text-center my-4 font-semibold">
        Payment for {treatment}
      </h3>
      <p className="text-xl text-center font-medium">
        {" "}
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div className=" w-96 my-12 ml-24">
        <Elements stripe={stripePromise}>
          <CheckoutForm 
           booking ={booking}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
