import React from "react";

const Review = ({ review }) => {
  const { name, review: userReview, location, image } = review;
  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <p className="font-semibold">{userReview}</p>

        <div className="flex items-center mt-6">
                <div className="avatar mr-8">
                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={image} alt="" />
                            </div>
                </div>
                <div>
                    <h5 className="text-lg font-bold text-blue-600">{name}</h5>
                    <p className="text-bold text-pink-500">{location}</p>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
