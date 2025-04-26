"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  amdLogo,
  amdLogoLight,
  intelLogo,
  intelLogoLight,
  talkitLogo,
  talkitLogoLight,
  teslaLogo,
  teslaLogoLight,
  vodafoneLogo,
  vodafoneLogoLight,
} from "../../../public";

const Companies = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-8 py-12">
      <div>
        <p className="text-paragraphUps text-lg/[160%]">
          Companies we helped grow
        </p>
      </div>
      {theme !== "light" ? (
        <div className="flex justify-between items-start">
          <Image src={vodafoneLogo} alt="vodafone" width={153} height={40} />
          <Image src={intelLogo} alt="intel" width={82} height={32} />
          <Image src={teslaLogo} alt="tesla" width={182} height={24} />
          <Image src={amdLogo} alt="AMD" width={116} height={28} />
          <Image src={talkitLogo} alt="talkit" width={108} height={32} />
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <Image
            src={vodafoneLogoLight}
            alt="vodafone"
            width={153}
            height={40}
          />
          <Image src={intelLogoLight} alt="intel" width={82} height={32} />
          <Image src={teslaLogoLight} alt="tesla" width={182} height={24} />
          <Image src={amdLogoLight} alt="AMD" width={116} height={28} />
          <Image src={talkitLogoLight} alt="talkit" width={108} height={32} />
        </div>
      )}
    </div>
  );
};

export default Companies;
