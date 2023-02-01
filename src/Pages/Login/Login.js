import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, signInWithGoogle, verifyEmail, resetPassword } =
    useContext(AuthContext);
  const [loginError, setLoginError] = useState(" ");
  const [userEmail, setUserEmail] = useState(" ");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError(" ");

    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // verifyEmail();
        toast.success("LogIn Successfully.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };



  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        if (user) {
          toast.success("Successfully Login With Google");
        }
      })
      .catch((error) => console.error(error));
  };

/*    //  reset password
  const handleReset = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success('Please check your email for reset link')
      })
      .catch(err => {
        toast.error(err.message)
        console.log(err)
        // setLoading(false)
      })
  } */


  return (
    <div className="h-[700px]  flex justify-center items-center">
      <div className="w-96 p-8 shadow-2xl rounded-lg bg-emerald-100 ">
        <h2 className="text-3xl font-bold text-center">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              onBlur={(event) => setUserEmail(event.target.value)}
              className="input input-bordered w-full max-w-xs mb-3"
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500 ">{errors.email?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs mb-3"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password at lest 6 Characters",
                },
              })}
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p className="text-red-500 ">{errors.password?.message}</p>
            )}
            <label className="label">
              {/* {<span className="label-text font-semibold">Forget Password?</span>} */}
            </label>
            {/*      
             <div className='mb-4'>
                  <button
                    // onClick={handleReset}
                    className='text-xs hover:underline text-gray-400'
                  >
                    Forgot password?
                  </button>
            </div> */}
          </div>

          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
          {/* login error */}
          <div>
            {loginError && <p className="text-red-500">{loginError}</p>}
          </div>
        </form>
        <p className="my-4">
          New to Doctors Portal?{" "}
          <Link className="text-blue-500" to="/signup">
            Create New Account
          </Link>
        </p>
        <div className="divider mb-5">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-success w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
