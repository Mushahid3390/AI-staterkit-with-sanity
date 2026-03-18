import Image from "next/image";
import { CORE_FEATURES } from "./data";
import { Props } from "../hero-section";
import { Feature, section } from "@/lib/type";
import { urlFor } from "../hero-section";

interface FeatureProps {
  data: Feature,
}


export function CoreFeatures({data}: FeatureProps) {
  return (
    <section className="py-30 bg-gray-50 dark:bg-white/1 px-5">
      <div className="max-w-[72rem] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-bold text-gray-800 text-3xl dark:text-white/90 md:text-title-lg max-w-xl mx-auto">
           {data?.heading}
          </h2>

          <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
           {data?.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {data?.featurecards?.map((card) => (
            <div
              key={card?.heading}
              className="bg-white p-9 border border-gray-200 dark:bg-white/5 dark:border-white/3 rounded-[20px] shadow-[0px_30px_50px_-32px_rgba(107,110,148,0.04)]"
            >
              <div className="core-feature-icon mb-9">
                <Image
                  src={urlFor(card?.icon).url()}
                  alt={card.heading}
                  role="presentation"
                  width={40}
                  height={40}
                />
              </div>

              <h3 className="mb-4 text-gray-800 dark:text-white/90 font-bold text-xl md:text-2xl">
                {card?.heading}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {card?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
