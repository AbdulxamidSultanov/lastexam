"use client";
import {
  changeLoginStatus,
  changeTheme,
} from "@/app/lib/store/reducer/jobSlice";
import { RootState } from "@/app/lib/store/store";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { headerLogo } from "../../../public";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();
  const { isLoged } = useSelector((state: RootState) => state.job);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const handleLogout = () => {
    dispatch(changeLoginStatus(false));
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      dispatch(changeTheme("dark"));
    } else {
      setTheme("light");
      dispatch(changeTheme("dark"));
    }
  };

  return (
    <div className="flex justify-between items-center pt-[21px]">
      <div className="flex gap-12 items-center justify-center">
        <div className="flex items-center justify-center gap-2 font-bold text-2xl/[150%]">
          <Image src={headerLogo} alt="Header Logo" width={32} height={32} />
          <h1>JobHuntly</h1>
        </div>
        <ul className="flex gap-4 items-center justify-center">
          <li>
            <Link className="font-medium text-[16px]/[160%]" href="/findjobs">
              Find Jobs
            </Link>
          </li>
          <li>
            <Link className="font-medium text-[16px]/[160%]" href="./">
              Browse Companies
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-6 ">
        <button
          onClick={toggleTheme}
          className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#232333] text-gray-700 dark:text-yellow-300 transition hover:shadow-md"
          aria-label="Переключить тему"
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.657 17.657l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.657 6.343l1.061-1.061M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
              />
            </svg>
          )}
        </button>
        {isLoged === true ? (
          <div>
            <button onClick={handleLogout}>Log out</button>
          </div>
        ) : (
          <div className="flex items-center gap-8">
            <Link className="font-medium text-[16px]/[160%]" href="/login">
              Log in
            </Link>
            <div className="border-[0.5px] border-[#D6DDEB] h-12"></div>
            <Link
              href="/register"
              className="font-bold text-[16px]/[160%] px-6 py-3 cursor-pointer text-white bg-[#4640DE]"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
