import { fakeJobs } from "@/app/lib/tools/types";
import Link from "next/link";
import {
    businessIcon,
    designIcon,
    engeneringIcon,
    financeIcon,
    humanResorce,
    marketingIcon,
    salesIcon,
    technologyIcon,
} from "../../../public";
import JobCategory from "../Tools/JobCategory";

const SectionOne = () => {
  const fakeJobs: fakeJobs[] = [
    {
      id: 1,
      category: "Design",
      info: "235 jobs available",
      image: designIcon,
      width: 48,
      height: 48,
    },
    {
      id: 2,
      category: "Sales",
      info: "756 jobs available",
      image: salesIcon,
      width: 48,
      height: 48,
    },
    {
      id: 3,
      category: "Marketing",
      info: "140 jobs available",
      image: marketingIcon,
      width: 48,
      height: 48,
    },
    {
      id: 4,
      category: "Finance",
      info: "325 jobs available",
      image: financeIcon,
      width: 48,
      height: 48,
    },
    {
      id: 5,
      category: "Technology",
      info: "436 jobs available",
      image: technologyIcon,
      width: 48,
      height: 48,
    },
    {
      id: 6,
      category: "Enginering",
      info: "542 jobs available",
      image: engeneringIcon,
      width: 48,
      height: 48,
    },
    {
      id: 7,
      category: "Business",
      info: "211 jobs available",
      image: businessIcon,
      width: 48,
      height: 48,
    },
    {
      id: 8,
      category: "Human Resource",
      info: "346 jobs available",
      image: humanResorce,
      width: 48,
      height: 48,
    },
  ];
  return (
    <section className="flex flex-col gap-12 mt-[72px]">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-5xl/[110%]">Explore by <span className="text-5xl/[110%] font-semibold text-[#26A4FF]">category</span></h2>
        <Link className="self-end text-[#4640DE]" href={"/findjobs"}>Show all jobs</Link>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {fakeJobs.map((f) => (
          <JobCategory
            key={f.id}
            img={f.image}
            desc={f.info}
            title={f.category}
            w={f.width}
            h={f.height}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionOne;
