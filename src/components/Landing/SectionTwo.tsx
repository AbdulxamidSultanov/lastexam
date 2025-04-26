"use client";

import Image from "next/image";

export default function SectionTwo() {
  return (
    <section className="w-full mt-[72px] relative">
      <div className="container mx-auto px-4 z-0 relative">
        {/* Обертка с clip-custom только на фон */}
        <div className="clip-custom bg-[#4F46E5] relative p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Левый блок — текст */}
            <div className="flex-1 flex items-center justify-center order-1 md:order-none">
              <div className="rounded-xl p-8 w-full max-w-xs text-center flex flex-col items-center">
                <h3 className="text-white text-3xl font-bold mb-2 leading-tight">
                  Start posting
                  <br />
                  jobs today
                </h3>
                <p className="text-white text-base mb-6">
                  Start posting jobs for only $10.
                </p>
                <button className="bg-white text-[#4F46E5] font-semibold px-6 py-3 rounded-md text-base hover:bg-gray-100 transition">
                  Sign Up For Free
                </button>
              </div>
            </div>

            {/* Правый блок — картинка */}
            <div className="relative w-full md:w-[564px] h-[344px] flex-shrink-0">
              <Image
                src="/Dashboard_company.png"
                alt="Dashboard компании"
                fill
                className="object-contain rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
