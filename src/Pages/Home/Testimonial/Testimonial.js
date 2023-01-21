import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from './Review';

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Topu Hossain",
      review:
        "Best Dentist and dental staff in the city ! The new office is amazing; state-of-the-art equipment & the doctor rivals any high end office around. I actually look forward to going to the dentist again & again",
      location: "Uttara",
      image: people1,
    },
    {
      _id: 2,
      name: "Rimi Hossain",
      review:
        "Just have to say a very caring Dentist who is excellent in reassuring their patient and gives excellent service, explains what they are doing every step of the way. The Best Dentist I have ever seen!",
      location: "Rajshahi",
      image: people2,
    },
    {
      _id: 3,
      name: "Shapla Khatun",
      review:
        "This is  the only dental clinic I have ever been to where I felt like they were telling me the truth about my teeth and not trying to get money out of me! Dr. Firoz Hossain is very gentle and told me exactly what he was doing and was very attentive to my needs",
      location: "Dhanmondi",
      image: people3,
    },
  ];

  return (
    <section className="my-20">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl  text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl font-semibold text-blue-900">
            What Our Patients Says
          </h2>
        </div>
        <figure>
          <img className="lg:w-48 w-24" src={quote} alt="" />
        </figure>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
                {
                    reviews.map(review =><Review
                    key={review._id}
                    review = {review}
                    ></Review>)
                }
      </div>
    </section>
  );
};

export default Testimonial;
