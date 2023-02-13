import { useQuery } from "@tanstack/react-query";
import { Result } from "postcss";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   const imageHostKey = process.env.REACT_APP_imgbb_key;
  //  console.log(imageHostKey);
  const navigate = useNavigate();

  const {data: specialties, isLoading} = useQuery({
    queryKey: ['specialty'],
    queryFn: async () =>{
        const res = await fetch('http://localhost:5000/appointmentSpecialty');
        const data = await res.json();
        return data;
    }
  })

  const handleAddDoctor = (data) => {
    // console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url =`https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData =>{
      // console.log(imgData);
      if(imgData.success){
        console.log(imgData.data.url);
        const doctor = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          image: imgData.data.url

        }

        // save doctor information to the database
        fetch('http://localhost:5000/doctors', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(doctor)
        })
        .then(res => res.json())
        .then(result =>{
          console.log(result);
          toast.success(`${data.name} is added successfully`);
          navigate('/dashboard/managedoctors')
        })
      }
    })
  };

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div >
      <h2 className="text-4xl  ml-10 mt-6 mb-8"> Add A New Doctor</h2>
      <div className="w-96 p-8 shadow-2xl rounded-lg mt-6 ml-8">
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold text-lg">Name</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs mb-3"
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold text-lg">Email</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs mb-3"
              type="email"
              {...register("email", {
                required: "Email is Required",
              })}
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text font-bold text-lg">Specialty</span>
            </label>
            <select
            {...register('specialty')}
            
            className="select input-bordered w-full max-w-xs">
              
              {
                    specialties.map(specialty =><option
                        key={specialty._id}
                        value={specialty.name}
                    >{specialty.name}</option> )
              }
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold text-lg">Photo</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs mb-3"
              type="file"
              {...register("image", {
                required: "Photo is Required",
              })}
              placeholder="Enter Your Photo"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent w-full mt-8"
            value="Add A Doctor"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

/**
 * Three places to store images
 * 1. Third party image hosting server 
 * 2. File system of your server
 * 3. mongodb (database)
*/

export default AddDoctor;
