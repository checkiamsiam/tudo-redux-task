import React from "react";
import { useForm } from "react-hook-form";
import { BsFillEyeFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BiLock } from "react-icons/bi";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../StateManagement/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);

  const onSubmit = async (data) => {
    const { email, password } = data;
    await signInWithEmailAndPassword(email, password);
    dispatch(setUser({ email, password }));
    navigate("/dashboard");
  };

  return (
    <>
      <div className="card max-w-md mx-auto my-5   bg-accent backdrop-blur-xl bg-opacity-40">
        <div className="card-body">
          <h2 className="text-3xl font-bold mb-5">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div>
              <label className="ml-3 mb-2">Email Adress</label>
              <div className="form-control w-full  relative">
                <HiOutlineMail className="absolute left-3 top-4 text-xl"></HiOutlineMail>
                <input
                  type="email"
                  placeholder="tudo@test.com"
                  className="p-3 pl-10 bg-white border-2 border-secondary focus:outline-primary  w-full  rounded-xl"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please provide your email",
                    },
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                  {errors.email?.type === "pattern" && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                </label>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="ml-3 mb-2">Password</label>
              <div className="form-control w-full  relative">
                <BiLock className="absolute left-3 top-4 text-xl"></BiLock>
                <input
                  type="password"
                  placeholder="* * * * * * *"
                  className="p-3 pl-10 bg-white border-2 border-secondary  focus:outline-primary w-full  rounded-xl"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Please enter your password",
                    },
                  })}
                />
                <span className="absolute top-4 right-3 cursor-pointer text-xl">
                  <BsFillEyeFill />
                </span>
                <label className="label">
                  {errors.password?.type === "required" && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
                </label>
                <label for="forgetPass" class="text-black text-right  cursor-pointer text-xs hover:underline mb-5 ">
                  Forgot Password?
                </label>
              </div>
            </div>

            <input className="btn w-full btn-primary text-white" type="submit" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
