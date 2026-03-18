import GeneratorWrapper from '@/components/generator/generator-wrapper';
import { client } from '@/sanity/client';

const link = `*[_type == "navbar"][0]{
links[]{
title,
href,
hasDropdown,
dropdown[]->{
title,
"slug": slug.current
}
}}`;
const options = { next: { revalidate: 30 } };
export default async function GeneratorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const deskLinks = await client.fetch(link, {}, options);
  return <GeneratorWrapper links={deskLinks.links}>{children}</GeneratorWrapper>;
}
