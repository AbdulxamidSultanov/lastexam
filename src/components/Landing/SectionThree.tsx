"use client";

import { useGetJobsQuery } from "@/app/lib/store/api/apiSlice";
import { Job } from "@/app/lib/tools/types";
import Link from "next/link";

const SectionThree = () => {
  const { data, isError } = useGetJobsQuery({}) as { data?: Job[]; isError: boolean };

  if (isError) {
    return (
      <div className="text-red-600 text-2xl">
        Something went wrong, please try again.
      </div>
    );
  }

  return (
    <section className="p-6 flex flex-col gap-12 mt-[72px] ">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-5xl/[110%]">
          Featured <span className="text-[#26A4FF]">jobs</span>
        </h2>
        <Link className="text-[#4640DE]" href={"/findjobs"}>
          show all jobs
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data &&
          data.map((d: Job) => (
            <div
              key={d.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {d.title}
              </h4>
              <div className="flex items-center text-gray-600 mb-3">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span>{d.company}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{d.location}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-3">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{d.ish_vaqti}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{d.salary}</span>
              </div>
              <p className="text-gray-600 line-clamp-3">{d.description}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SectionThree;
