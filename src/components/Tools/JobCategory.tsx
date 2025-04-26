import Image from "next/image";
import Link from "next/link";

const JobCategory = ({
  img,
  desc,
  title,
  w,
  h,
}: {
  img: any;
  desc: string;
  title: string;
  w: number;
  h: number;
}) => {
  return (
    <div
      className={`w-[274px] h-[214px] flex flex-col items-start justify-start gap-8  border  p-8 ${
        title !== "Marketing"
          ? "border-[#D6DDEB] bg-white"
          : "bg-[#4640DE] border-[#4640DE]"
      }`}
    >
      <Image src={img} alt={title} width={w} height={h} />
      <div className="flex flex-col gap-3">
        <h4
          className={` text-2xl/[120%] font-semibold ${
            title !== "Marketing" ? "text-[#25324B]" : "text-white"
          }`}
        >
          {title}
        </h4>
        <Link
          className={`text-lg/[160%] ${
            title !== "Marketing" ? "text-[#7C8493]" : "text-white"
          }`}
          href={"./"}
        >
          {desc}
        </Link>
      </div>
    </div>
  );
};

export default JobCategory;
