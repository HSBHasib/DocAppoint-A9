"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiUser,
  FiMail,
  FiLink,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  // Google singnUp
  const googleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();



  const formHandaler = async (data) => {
  try {
    const { name, image, email, password } = data;

    const response = await authClient.signUp.email({
      name,
      image,
      email,
      password,
    });

    if (response.error) {
      toast.error(response.error.message || "Registration failed");
      return;
    }

    toast.success("Register Successful");
    reset();

    setTimeout(() => {
      router.push("/login");
    }, 600);

  } catch (err) {
    console.log(err);

    toast.error(
      err?.message || "Something went wrong"
    );
  }
};


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-slate-50">
      {/* Left Side - (Simple Image and Some Text) */}
      <div className="hidden lg:flex flex-col items-center justify-center">
        <div className="max-w-[450px] w-full text-center space-y-6">
          <div className="bg-[#1A6FA8]/10 p-5 rounded-3xl shadow-xs">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden">
              <Image
                src="/assets/register.png"
                alt="Registration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <h1 className="text-[32px] font-bold text-[#1A6FA8]">
              Your Health, Our Priority
            </h1>
            <p className="text-sm text-[#404750]">
              Join our community of healthcare experts and patients today.
              Experience clinical authority with a soft minimalist approach.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - (Register Form) */}
      <div className="flex flex-col justify-center px-10 py-10 sm:px-16 lg:px-20 bg-white">
        <div className="mx-auto w-full max-w-md ">
          <div className="mb-8 space-y-2 text-center lg:text-start ">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Register
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Start your journey with DocAppoint today.
            </p>
          </div>

          <form onSubmit={handleSubmit(formHandaler)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Name
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FiUser className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#1e73be] focus:bg-white transition-all text-slate-900"
                  {...register("name", {
                    required: true,
                    pattern: /^[a-zA-Z\s]{3,25}$/,
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 px-2 text-xs pt-0.5">
                    Only letters allowed (min. 3 chars)
                  </p>
                )}
              </div>
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Photo URL
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FiLink className="h-5 w-5" />
                </div>
                <input
                  type="url"
                  placeholder="Enter your photo url"
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#1e73be] focus:bg-white transition-all text-slate-900"
                  {...register("image")}
                />
                {errors.image ? (
                  <p className="text-red-500 px-2 text-xs pt-0.5">
                    Enter a valid image url
                  </p>
                ) : (
                  <p className="text-gray-700 px-2 text-xs pt-0.5">Optional</p>
                )}
              </div>
            </div>

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
                  {...register("email", {
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 px-2 text-xs pt-0.5">
                    Enter a valid email address
                  </p>
                )}
              </div>
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
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  })}
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
              </div>
              {errors.password && (
                <p className="text-red-500 px-2 text-xs pt-0.5">
                  Min. 8 chars, must include A-z and 0-9
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1e73be] hover:bg-[#165a94] text-white font-semibold py-3.5 px-4 rounded-xl shadow-md shadow-blue-500/10 transition-all duration-200 text-sm mt-4"
            >
              Register
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
              onClick={() => googleSignUp()}
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold py-3 px-4 border border-slate-200 rounded-xl transition-all duration-150 text-sm"
            >
              <FcGoogle className="h-5 w-5 " />
              <span>Sign up with Google</span>
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#1e73be] hover:text-[#165a94] transition-colors"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
