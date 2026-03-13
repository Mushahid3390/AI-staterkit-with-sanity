import { image, logo } from "@/app/(site)/page";
import Image from "next/image";
import React from "react";
import { urlFor } from "./hero-section"; 

interface logoProps {
  heading: string,
  logos :logo[] 
}

export default function HeroLogos({heading, logos}: logoProps) {

  return (
    <div className="wrapper">
      <div className="max-w-[1016px] relative z-30 mx-auto pt-14 pb-16">
        <p className="text-center text-white/50 text-lg font-medium">
          {heading}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-7 md:gap-14 mt-10">
          {
            logos?.map((logo) => {
              return (
                <Image
                  src= { urlFor(logo.logo).url()}
                  key= {logo._key}
                  className="opacity-50 transition hover:opacity-100"
                  alt=""
                  width={80}
                  height={32}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
