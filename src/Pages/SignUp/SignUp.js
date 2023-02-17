import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } }  = useForm();
    const {createUser, updateUser,signInWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();


    if(token){
      navigate('/');
    }

    const handleSignUp =(data) =>{
        console.log(data);
        setSignUpError(' ');
        createUser(data.email, data.password)
        .then(result =>{
          const user = result.user;
          console.log(user)
          toast.success('User Created Successfully.')
          // form.reset()
          // verifyEmail()
          const userInfo ={
            displayName: data.name
          }
          updateUser(userInfo)
          .then(() =>{ 
                  navigate('/'); 
                  saveUser(data.name, data.email);
           })
          .catch(err => console.log(err))
        })
        .catch( error => {
          console.error(error)
          setSignUpError(error.message)
        });
    }

    const saveUser = (name, email) =>{
      const user = {name,  email};
      console.log(user)
      fetch('https://doctors-portal-server-delta-virid.vercel.app/users', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        setCreatedUserEmail(email);
        // console.log( 'save user', data);
        // navigate('/');
      })
    }



    const handleGoogleSignIn = () =>{
      signInWithGoogle()
      .then(result =>{
        const user = result.user;
        if(user){
            toast.success("Successfully Login With Google");
           }
      })
      .catch(error => console.error(error))
     }
    
  
    return (
        <div className="h-[700px]  flex justify-center items-center">
      <div className="w-96 p-8 shadow-2xl rounded-lg bg-emerald-100 ">
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>

        <form onSubmit={handleSubmit(handleSignUp)} >
          <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text font-bold">Name</span></label>
                    <input
                    className="input input-bordered w-full max-w-xs mb-3"
                    type="text"
                    {...register("name", {
                        required: "Name is Required"
                    })}
                    placeholder="Enter Your Name"
                    />
                     {errors.name &&<p className='text-red-500' >{errors.name.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text font-bold">Email</span></label>
                    <input
                    className="input input-bordered w-full max-w-xs mb-3"
                    type="email"
                    {...register("email",{
                        required: "Email is Required"
                    })}
                    placeholder="Enter Your Email"
                    />
                      {errors.email &&<p className='text-red-500' >{errors.email.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text font-bold">Password</span></label>
                    <input
                    className="input input-bordered w-full max-w-xs mb-3"
                    type="password"
                    {...register("password",{
                        required: "Password is required",
                        minLength: {value: 6, message: "Password must be 6 character long"},
                        pattern: {value : /(?=.*[A-Z])(?=.*[!@#$&*])/, message: 'password must be one uppercase letters and one special case letter '},
                        
                    })}
                    placeholder="Enter Your Password"
                    />
                    {errors.password &&<p className='text-red-500' >{errors.password.message}</p>}
          </div>

          <input
            className="btn btn-accent w-full"
            value="Sign Up"
            type="submit"
          />
          {/* Error Message */}
        <div>
                  {signUpError && <p className='text-red-600'>{signUpError}</p> }
        </div>
        </form>
        
        <p className="my-4">
          Already have an account?
          <Link className="text-blue-500" to="/login">
             Please Login
          </Link>
        </p>
        <div className="divider mb-5 font-bold">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
    );
};

export default SignUp;