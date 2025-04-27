"use client";
import { useGetJobsQuery } from "@/app/lib/store/api/apiSlice";
import { Job } from "@/app/lib/tools/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { headerLogo, listicon, squareicon } from "../../../public";
import Header from "@/components/Landing/Header";

export default function FindJobsPage() {
  const { data: jobs, isLoading } = useGetJobsQuery({});
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Florence, Italy");
  const [filteredJobs, setFilteredJobs] = useState<Job[] | undefined>(jobs);

  const employments = [
    { label: "Full-time", count: 3 },
    { label: "Part-Time", count: 5 },
    { label: "Remote", count: 2 },
    { label: "Internship", count: 4 },
    { label: "Contract", count: 3 },
  ];
  const categories = [
    { label: "Design", count: 24 },
    { label: "Sales", count: 3 },
    { label: "Marketing", count: 3 },
    { label: "Business", count: 3 },
    { label: "Human Resource", count: 6 },
    { label: "Finance", count: 4 },
    { label: "Engineering", count: 4 },
    { label: "Technology", count: 5 },
  ];
  const jobLevels = [
    { label: "Entry Level", count: 57 },
    { label: "Mid Level", count: 3 },
    { label: "Senior Level", count: 5 },
    { label: "Director", count: 12 },
    { label: "VP or Above", count: 8 },
  ];
  const salaryRanges = [
    { label: "$700 - $1000", count: 4 },
    { label: "$1000 - $1500", count: 6 },
    { label: "$1500 - $2000", count: 10 },
    { label: "$3000 or above", count: 4 },
  ];

  const handleSearch = () => {
    if (!jobs) return;
    setFilteredJobs(
      jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(search.toLowerCase()) &&
          job.location.toLowerCase().includes(city.toLowerCase())
      )
    );
  };

  React.useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  return (
    <div className="min-h-screen bg-[#F8F8FD]">
        <div className="px-10">
      <Header />

        </div>
      <section className="py-12 px-8 bg-[#F8F8FD]">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Find your <span className="text-[#26A4FF]">dream job</span>
        </h1>
        <p className="text-center text-lg text-[#7C8493] mb-8">
          Find your next career at companies like HubSpot, Nike, and Dropbox
        </p>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow flex items-center px-4 py-2 gap-2">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="flex-1 px-3 py-2 outline-none bg-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <span className="text-gray-400">|</span>
          <select
            className="px-3 py-2 bg-transparent outline-none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option>Uzbekista, Tashkent</option>
            <option>Uzbekistan, Namangan</option>
            <option>Uzbekistan, Ferghana</option>
            <option>Uzbekistan, Qoqon</option>
          </select>
          <button
            className="bg-[#635BFF] text-white px-6 py-2 rounded font-semibold"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="text-[#A8ADB7] text-sm mt-2 text-center">
          Popular: UI Designer, UX Researcher, Android, Admin
        </div>
      </section>

      <div className="flex px-8 py-6 gap-8">
        <aside className="w-[260px] hidden lg:block">
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Type of Employment</h3>
            <ul className="flex flex-col gap-2">
              {employments.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#635BFF]" />
                  <span>
                    {item.label} ({item.count})
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="flex flex-col gap-2">
              {categories.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#635BFF]" />
                  <span>
                    {item.label} ({item.count})
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Job Level</h3>
            <ul className="flex flex-col gap-2">
              {jobLevels.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#635BFF]" />
                  <span>
                    {item.label} ({item.count})
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Salary Range</h3>
            <ul className="flex flex-col gap-2">
              {salaryRanges.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#635BFF]" />
                  <span>
                    {item.label} ({item.count})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">All Jobs</h2>
              <span className="text-[#7C8493]">
                Showing {filteredJobs?.length ?? 0} results
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>Sort by:</span>
              <select className="border rounded px-2 py-1">
                <option>Most relevant</option>
              </select>
              <button className="cursor-pointer">
                <Image
                  src={squareicon}
                  alt="square list"
                  width={40}
                  height={40}
                ></Image>
              </button>
              <button className="cursor-pointer">
                <Image
                  src={listicon}
                  alt="list icon"
                  width={40}
                  height={40}
                ></Image>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {isLoading && <div>Loading...</div>}
            {filteredJobs &&
              filteredJobs.map((job: Job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg border p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <div className="text-[#7C8493] text-sm">
                      {job.company} &bull; {job.location}
                    </div>
                  </div>
                  <button className="bg-[#635BFF] text-white font-bold px-6 py-2 rounded self-end md:self-auto">
                    Apply
                  </button>
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
  );
}
