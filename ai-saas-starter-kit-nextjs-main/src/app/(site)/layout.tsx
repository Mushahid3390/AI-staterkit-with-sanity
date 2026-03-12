import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header/header';
import { urlToHttpOptions } from 'url';


interface navtype{
  logo: string,
  buttons: {label: string, href: string}[];
  links: {title: string, href: string, hasDropdown: boolean, dropdown: {label: "string", href: "string"}[]|null}[]
}

const options = {next: { revalidate: 30 }};

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
     return (
    <div className="dark:bg-[#101828] flex flex-col flex-1">
      <Header />
      <div className="isolate flex-1 flex flex-col">{children}</div>
      <Footer />
    </div>
  );
}
