import Image from "next/image";
import { bgMan, grafik, loginLogo, quote } from "../../../public";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex flex-col justify-between items-center bg-[#F8F8FD] w-1/2 p-10">
        <div className="flex items-center justify-center gap-2 font-bold text-2xl/[150%]">
          <Image src={loginLogo} alt="Header Logo" width={160} height={36} />
        </div>
        <div className="absolute">
          <Image src={bgMan} alt="User" width={386} height={670} />
          <div className="">
            <Image src={grafik} alt="icon" width={233} height={176} />
          </div>
          <div className="">
            <Image
              src={quote}
              alt="Adam Sandler"
              width={301}
              height={238}
              className="rounded-full"
            />
          </div>
        </div>
        <div />
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-4">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Get more opportunities
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded px-4 py-2"
            />
            <button
              type="submit"
              className="bg-[#635BFF] text-white font-bold py-2 rounded mt-2"
            >
              Continue
            </button>
          </form>
          <div className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-[#635BFF] font-semibold">
              Login
            </a>
          </div>
          <div className="text-xs text-gray-400 mt-4 text-center">
            By clicking &apos;Continue&apos;, you acknowledge that you have read and
            accept the{" "}
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
