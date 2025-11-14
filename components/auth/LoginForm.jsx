"use client";
import { loginAction } from "@/app/actions/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoading(true);
      try {
        const res = await loginAction({ email, password });
        console.log({ email, password });
        if (res.success) {
          setEmail("");
          setPassword("");
          setErrors({});
          router.refresh();
          router.push("/dashboard");
        } else {
          setEmail("");
          setPassword("");
          window.alert(`Something's wrong: ${res.message}`);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="lg:w-[552px] sm:w-[400px] w-full p-3 rounded-[34px] bg-cardbg">
      <div className="flex flex-col items-center">
        <button className="w-full py-4 mb-3 bg-white hover:bg-cardbgSec border border-border rounded-full flex items-center justify-center gap-3">
          <Image
            src={"/imgs/google-logo.png"}
            width={20}
            height={20}
            alt="google"
            className="object-cover"
          />
          <p className="font-dm font-medium text-sm text-[#0E121B]">
            Continue with Google
          </p>
        </button>
        <button className="w-full py-4 bg-white hover:bg-cardbgSec border border-border rounded-full flex items-center justify-center gap-3">
          <Image
            src={"/imgs/git-logo.png"}
            width={20}
            height={20}
            alt="github"
            className="object-cover"
          />
          <p className="font-dm font-medium text-sm text-[#0E121B]">
            Continue with GitHub
          </p>
        </button>
      </div>
      <div className="flex items-center my-5">
        <div className="grow border-t border-border"></div>
        <span className="mx-4 text-[#525866] text-sm font-normal">
          Or continue with
        </span>
        <div className="grow border-t border-border"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl p-4 md:p-8 shadow-xl"
      >
        <div className="mb-5">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 border border-border-input rounded-xl placeholder:text-[#9CA3AF]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-6 relative">
          <label className="block mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 border border-border-input rounded-xl placeholder:text-[#9CA3AF]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-[55%] right-0 px-3 flex items-center gap-1 text-[#9CA3AF]"
          >
            {showPassword ? (
              <>
                <FiEyeOff size={16} />
                <p className="md:block hidden">Hide</p>
              </>
            ) : (
              <>
                <FiEye size={16} />
                <p className="md:block hidden">Show</p>
              </>
            )}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-btn hover:brightness-110 hover:scale-105 transition-all duration-150 ease-linear text-white rounded-xl cursor-pointer flex justify-center items-center gap-2"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
        <div className="flex items-center justify-center gap-1 mt-5">
          <p className="text-light text-sm font-normal">
            Don’t have an account?
          </p>
          <Link href={"/signup"} className="text-[#3758F9] text-sm font-medium">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
