"use client";

import { useLoginMutation } from "@/app/lib/store/api/apiSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bgMan, grafik, loginLogo, quote } from "../../../public";
import { changeLoginStatus } from "../lib/store/reducer/jobSlice";

interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
  };
}

export default function LoginPage() {
  const router = useRouter();
  const [login, { isLoading, isError }] = useLoginMutation();
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({
        username: fullName,
        password,
      }).unwrap() as LoginResponse;
      
      if (response.token) {
        dispatch(changeLoginStatus(true));
        localStorage.setItem("token", response.token);
        router.push("/");
      } else {
        dispatch(changeLoginStatus(false));
        localStorage.removeItem("token");
        router.push("/login/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      dispatch(changeLoginStatus(false));
      localStorage.removeItem("token");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex ">
      <div className="hidden md:flex flex-col justify-between items-center bg-[#F8F8FD] w-1/2 p-10 relative">
        <div className="flex items-center justify-center gap-2 font-bold text-2xl/[150%] ">
          <Image
            className=""
            src={loginLogo}
            alt="Header Logo"
            width={160}
            height={36}
          />
        </div>
        <div className="">
          <Image
            src={bgMan}
            className="absolute bottom-0 left-[140px]"
            alt="User"
            width={386}
            height={670}
          />
          <div className="">
            <Image
              src={grafik}
              className="absolute top-[169px] left-[67px]"
              alt="icon"
              width={233}
              height={176}
            />
          </div>
          <div className="">
            <Image
              src={quote}
              alt="Adam Sandler"
              width={301}
              height={238}
              className="absolute bottom-10"
            />
          </div>
        </div>
        <div />
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-4">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#202430] dark:text-white">
            Get more opportunities
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full name"
              className="border border-gray-300 text-[#202430] rounded px-4 py-2 dark:text-white placeholder:dark:text-white placeholder:text-[#A8ADB7]"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 text-[#202430] rounded px-4 py-2 dark:text-white placeholder:dark:text-white placeholder:text-[#A8ADB7]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#635BFF] text-white font-bold py-2 rounded mt-2 cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Continue"}
            </button>
            {isError && (
              <div className="text-red-500 text-sm mt-2">
                Неверные данные для входа
              </div>
            )}
          </form>
          <div className="text-center mt-4 text-sm dark:text-white text-[#202430]">
            Already have an account?{" "}
            <a href="/login" className="text-[#635BFF] font-semibold">
              Login
            </a>
          </div>
          <div className="text-xs text-gray-400 mt-4 text-center">
            By clicking &apos;Continue&apos;, you acknowledge that you have read
            and accept the{" "}
            <a href="#" className="underline text-[#635BFF]">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-[#635BFF]">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
