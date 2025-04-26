import { MapPin, Search } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="mb-[100px]">
      <div className="flex flex-col items-start justify-center max-w-[533px] mt-[82px] gap-[23px] mb-[23px]">
        <h1 className="text-[72px]/[110.00000000000001%] font-semibold">
          Discover more than{" "}
          <span className="text-[#26A4FF] text-[72px]/[110.00000000000001%]">
            5000+ Jobs
          </span>
        </h1>
        <p className="text-paragraphUps max-w-[521px] text-xl/[160%]">
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>
      </div>
      <form className="shadow-4xl bg-white flex justify-start py-4 px-4 w-[852px]">
        <div className="flex items-center justify-start w-[305px] gap-4  ">
          <Search size={24} color="#25324B" />
          <input
            type="text"
            className="border-b border-[#D6DDEB] pb-[10px] mt-[14px] placeholder:text-[#7C8493]"
            placeholder="Job title or keyword"
          />
        </div>
        <div className="flex items-center justify-start w-[305px] gap-4">
          <MapPin size={24} color="#25324B" />
          <select className=" border-b border-[#D6DDEB] pb-[10px] pt-[20px] text-[#25324B]">
            <option value="Ferghana">Ferghana</option>
            <option value="Tashkent">Tashkent</option>
            <option value="Samarqand">Samarqand</option>
            <option value="Buxoro">Buxoro</option>
            <option value="Namangan">Namangan</option>
          </select>
        </div>
        <button className="font-bold text-lg/[160%] px-10 py-3.5 text-white bg-buttonBg">
          Search my job
        </button>
      </form>
      <p className="text-paragraph text-[16px]/[160%] font-medium mt-4">
        <span className="text-[16px]/[160%]">Popular</span> : UI Designer, UX
        Researcher, Android, Admin
      </p>
    </section>
  );
};

export default Hero;
