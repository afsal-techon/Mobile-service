import React from "react";
import imgLogin from "../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from '../services/axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const vaildationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {

  const navigate = useNavigate()


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema : vaildationSchema,

    onSubmit: async(values) => {
      try {
        const { data } = await axios.post("/login",values);
        toast.success(data.message)
        localStorage.setItem('token',data.token);
        navigate('/admin-dashboard')
        
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message)
      }
    },
  });

  return (
    <div className="relative w-full h-screen bg-zinc-900/90 flex justify-center items-center">
      {/* Background Image */}
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={imgLogin}
        alt="Background"
      />

      {/* Login Card */}
      <form
        onSubmit={formik.handleSubmit}
        className="relative z-10 max-w-[420px] w-full mx-auto bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-200"
      >
        <h2 className="text-4xl text-center font-extrabold text-gray-800 mb-6">
          Sign In
        </h2>

        {/* Social Login */}
        <div className="flex justify-between gap-4 mb-8">
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-1/2 py-2 border border-gray-300 rounded-md hover:shadow-md transition"
          >
            <AiFillFacebook className="text-blue-600 text-xl" /> Facebook
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-1/2 py-2 border border-gray-300 rounded-md hover:shadow-md transition"
          >
            <FcGoogle className="text-xl" /> Google
          </button>
        </div>

        {/* Email */}
        <div className="flex flex-col mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            className={`${formik.errors.email ? "border border-red-500":"border border-gray-300" } rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Enter your email"
          />
          {formik.errors.email && (
             <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col mb-4">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            className={`${formik.errors.password ? "border border-red-500" : "border border-gray-300"} rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter your password"
          />
           {formik.errors.password && (
              <p className="text-red-500 text-sm ">{formik.errors.password}</p>
            )}
        </div>

        {/* Remember Me + Forgot Password */}
        <div className="flex items-center justify-between text-sm mb-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="accent-indigo-600 cursor-pointer"
            />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-indigo-600 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full cursor-pointer py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition"
        >
          Sign In
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-gray-700 mt-6">
          Not a member?{" "}
          <a href="#" className="text-indigo-600 hover:underline font-medium">
            Sign up now
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
