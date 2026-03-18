import FaqAccordion from '@/components/sections/faq-accordion';
import type { Metadata } from 'next';
import PricingSection from '@/components/sections/pricing';
import { page } from '@/lib/type';
import { client } from '@/sanity/client';

export const metadata: Metadata = {
  title: 'Pricing',
};

const homePage = `*[_type == "homepage" && slug.current == "home-page"][0]{
    title,
    slug,
    sections[]
}`;

export default async function PricingPage() {
  const page = await client.fetch<page>(homePage);
    return (
      <>
        {page?.sections?.map((section) => {
          switch (section._type) {
            case "pricingsection":
              return <PricingSection data={section} />;
            case "faqsection":
              return <FaqAccordion data={section} />;
          }
        })}
      </>
    );
}
