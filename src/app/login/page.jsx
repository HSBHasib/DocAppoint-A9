"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   const formHandaler = async (data) => {
      const { email, password } = data;

      console.log('login form data', data);

    };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  bg-slate-50">
      {/* Left Side - (Simple Image and Some Text) */}
      <div className="hidden lg:flex flex-col items-center justify-center">
        <div className="max-w-sm w-full text-center space-y-5">
          <div className="bg-[#1A6FA8]/10 p-4 rounded-3xl shadow-xs">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden">
              <Image
                src="/assets/loginImg.png"
                alt="Registration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <h1 className="text-[26px] font-bold text-[#1A6FA8]">
              Welcome Back to DocAppoint
            </h1>
            <p className="text-sm text-[#404750]">
              Your wellness journey continues here. Log in to connect with your
              trusted specialists, manage appointments, and access your secure
              patient portal.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - (Login Form) */}
      <div className="flex flex-col justify-center px-10 py-10 sm:px-16 lg:px-20 bg-white">
        <div className="mx-auto w-full max-w-md ">
          <div className="mb-8 space-y-2 text-center lg:text-start ">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Login
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form onSubmit={handleSubmit(formHandaler)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FiMail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#1e73be] focus:bg-white transition-all text-slate-900"
                  {...register("email", {required: true})}
                />
              </div>
              {errors.email && (
              <p className="text-red-500 px-2 text-xs pt-0.5">
                Enter a valid email address
              </p>
            )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FiLock className="h-5 w-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="block w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#1e73be] focus:bg-white transition-all text-slate-900"
                  {...register("password", {required: true})}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <FiEyeOff className="h-4 w-4" />
                  ) : (
                    <FiEye className="h-4 w-4" />
                  )}
                </button>
                <p className="text-xs text-[#404750] absolute right-0 -bottom-9 py-3">Forget Password?</p>
              </div>
              {errors.password && (
              <p className="text-red-500 px-2 text-xs pt-0.5">
                Enter a valid password
              </p>
            )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#1e73be] hover:bg-[#165a94] text-white font-semibold py-3.5 px-4 rounded-xl shadow-md shadow-blue-500/10 transition-all duration-200 text-sm mt-4"
            >
              Login
            </button>
          </form>

          {/* Devider */}
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-slate-400 font-medium">
                OR
              </span>
            </div>
          </div>

          {/* Social Signup - (Google)  */}
          <div className="mt-6">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-3 px-4 border border-slate-200 rounded-xl transition-all duration-150 text-sm"
            >
              <FcGoogle className="h-5 w-5 " />
              <span>Sign up with Google</span>
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-[#1e73be] hover:text-[#165a94] transition-colors"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
