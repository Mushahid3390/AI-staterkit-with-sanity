import BenefitsGrid from '@/components/sections/benefits-grid';
import TestimonialsSection from '@/components/sections/client-testimonial';
import FaqAccordion from '@/components/sections/faq-accordion';
import HeroSection from '@/components/sections/hero-section';
import ToolsTab from '@/components/sections/tools-tab';
import { CoreFeatures } from '@/components/sections/core-features';
import PricingSection from '@/components/sections/pricing';
import {client} from '@/sanity/client'

export const homePage = `*[_type == "homepage" && slug.current == "home-page"][0]{
    title,
    slug,
    sections[]
}`;

export interface page{
    sections: section[],
    slug: {_type: string, current: string},
    title: string,
}

export type section = {
   buttons: button[],
   description: string,
   heading: string,
   image: image,
   sponsored: string,
   sponsorlogo: logo[],
   subheading: string,
   _key: string,
   _type: string,
}

export type button = {
  _key: string,
  btnlabel: string,
  btnurl: string,
}

export type image = {
  asset: {_ref: string, _type: string},
  _type: string
}

export type logo = {
  logo : image,
  _key: string,
}





export default async function Home() {
  const page = await client.fetch<page>(homePage);

  return (
    <>
      {
        page?.sections?.map((section) => {
         switch (section._type) {
           case "herosection":
             return <HeroSection data={section} />;
           case "CoreFeatures":
             return <CoreFeatures data={section} />;
           case "ToolsTab":
            return <ToolsTab data= {section} />;
           case "BenefitsGrid" :
            return <BenefitsGrid data= {section} />;
           case "TestimonialsSection" :
            return <TestimonialsSection data = {section} />
           case "PricingSection" :
            return <PricingSection data = {section} />
           case "FaqAccordion" : 
            return <FaqAccordion data = {section} />
         }
        })
      }
    </>
  );
}