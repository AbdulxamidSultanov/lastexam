import Link from "next/link";
import {
  dribble,
  facebook,
  footerLogo,
  instagram,
  linkedin,
  twitter,
} from "../../../public";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#232333] text-white pt-10 pb-4 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <Image src={footerLogo} alt="Logo" width={160} height={36} />
            </div>
            <p className="text-gray-400 text-sm">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          <div className="flex flex-1 justify-between gap-10">
            <div>
              <h4 className="font-semibold mb-3">About</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Companies</li>
                <li>Pricing</li>
                <li>Terms</li>
                <li>Advice</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Help Docs</li>
                <li>Guide</li>
                <li>Updates</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/3">
            <h4 className="font-semibold mb-3">Get job notifications</h4>
            <p className="text-gray-400 text-sm mb-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-l-md px-4 py-2 text-black focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-[#635BFF] text-white px-5 py-2 rounded-r-md font-semibold hover:bg-[#4b44c7] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 my-8"></div>
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <span className="text-gray-500 text-sm">
            2021 @ JobHuntly. All rights reserved.
          </span>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#232333] flex items-center justify-center hover:bg-[#35354a] transition"
            >
              <Image src={facebook} alt="Facebook" width={32} height={32} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#232333] flex items-center justify-center hover:bg-[#35354a] transition"
            >
              <Image src={instagram} alt="Instagram" width={32} height={32} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#232333] flex items-center justify-center hover:bg-[#35354a] transition"
            >
              <Image src={dribble} alt="Dribbble" width={32} height={32} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#232333] flex items-center justify-center hover:bg-[#35354a] transition"
            >
              <Image src={linkedin} alt="LinkedIn" width={32} height={32} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-[#232333] flex items-center justify-center hover:bg-[#35354a] transition"
            >
              <Image src={twitter} alt="Twitter" width={32} height={32} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
