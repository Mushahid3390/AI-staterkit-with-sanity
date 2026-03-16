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

export interface page {
  sections: section[];
  slug: { _type: string; current: string };
  title: string;
}

export type section = Hero | Feature | ToolsTab | BenefitGrid;

export type Hero = {
  buttons: button[];
  description: string;
  heading: string;
  image: image;
  sponsored: string;
  sponsorlogo: logo[];
  subheading: string;
  _key: string;
  _type: "herosection";
};

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

export interface Feature {
  heading: string;
  description: string;
  featurecards: card[];
  _key: string;
  _type: "featuresection";
}

export type card = {
  icon: image;
  heading: string;
  description: string;
};

export interface ToolsTab {
  heading: string;
  description: string;
  button: { title: string; url: string | null };
  tabs: tab[];
  _key: string;
  _type: "toolstabsection";
}

export type tab = {
  id: {_type: "slug", current: string};
  label: string;
  icon: image;
  lightimage: image;
  darkimage: image;
  title: string;
  description: string;
  _key: string;
}

export interface BenefitGrid {
  heading: string;
  description: string;
  benefitcards: benefitCard[];
  _key: string;
  _type: "benefitgridsection";
}

export type benefitCard = {
  heading: string;
  description: string;
  hasButton: boolean|null,
  button: {label: string, url: string}|null,
  image: image;
  _key: string;
}
 
export default async function Home() {
  const page = await client.fetch<page>(homePage);
  return (
    <>
      {page?.sections?.map((section) => {
        switch (section._type) {
          case "herosection":
            return <HeroSection data={section} />;
          case "featuresection":
            return <CoreFeatures data={section} />;
          case "toolstabsection":
            return <ToolsTab data={section} />;
          case "benefitgridsection":
            return <BenefitsGrid data={section} />;
          case "TestimonialsSection":
            return <TestimonialsSection data={section} />;
          case "PricingSection":
            return <PricingSection data={section} />;
          case "FaqAccordion":
            return <FaqAccordion data={section} />;
        }
      })}
      <BenefitsGrid data={page.sections[0]} />;
    </>
  );
}