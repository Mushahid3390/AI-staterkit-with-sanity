import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header/header";
import { urlToHttpOptions } from "url";
import { client } from "@/sanity/client";
import { link } from "@/components/layout/header/desktop-nav";

const NAVBAR_QUERY = `
*[_type == "navbar"][0]{
"logobalck": logobalck.asset->url,
"logowhite": logowhite.asset->url,
links[]{
title,
href,
hasDropdown,
dropdown[]->{
title,
"slug": slug.current
}
},
buttons[]{
label,
href
}
}
`;

const footer_query = `*[_type=="footer"][0]{...}`;

export interface navtype {
  logobalck: string;
  logowhite: string;
  buttons: { label: string; href: string }[];
  links: link[];
}

const options = { next: { revalidate: 30 } };

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbarData = await client.fetch<navtype>(NAVBAR_QUERY, {}, options);
  const footerData = await client.fetch(footer_query, {}, options);
  return (
    <div className="dark:bg-[#101828] flex flex-col flex-1">
      <Header navbarData={navbarData} />
      <div className="isolate flex-1 flex flex-col">{children}</div>
      <Footer data= {footerData}/>
    </div>
  );
}
