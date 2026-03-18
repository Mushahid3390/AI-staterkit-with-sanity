import { ChevronDown2Icon } from "@/icons/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./nav-items";
import { useEffect, useState } from "react";

interface desktopProps {
  links: link[];
}

export type link = {
  dropdown: { title: string; slug: string }[] | null;
  hasDropdown: boolean;
  href: string;
  title: string;
};

export default function DesktopNav({ links }: desktopProps) {
  const pathname = usePathname();
  const [activeDropdownKey, setActiveDropdownKey] = useState("");

  function toggleActiveDropdown(key: string) {
    setActiveDropdownKey((prevKey) => (prevKey === key ? "" : key));
  }

  useEffect(() => {
    // Hide dropdown on pathname changes
    setActiveDropdownKey("");
  }, [pathname]);
  return (
    <nav className="hidden lg:flex lg:items-center bg-[#F9FAFB] dark:bg-white/3 rounded-full p-1 max-h-fit">
      {links?.map((link) => {
        if (link?.hasDropdown === null || link?.hasDropdown === false) {
          return (
            <Link
              key={link?.href || ""}
              href={link?.href || ""}
              className={cn(
                "text-gray-500 dark:text-gray-400 text-sm px-4 py-1.5 rounded-full hover:text-primary-500 font-medium",
                {
                  "bg-white dark:bg-white/5 font-medium text-gray-800 dark:text-white/90 shadow-xs":
                    pathname === link.href || "",
                },
              )}
            >
              {link.title}
            </Link>
          );
        }

        if (link.hasDropdown === true) {
          const toggleThisDropdown = () => {
            toggleActiveDropdown(link.title);
          };

          const isDropdownActive = activeDropdownKey === link.title;

          return (
            <div key={link.title} className="relative">
              <button
                onClick={toggleThisDropdown}
                onMouseEnter={toggleThisDropdown}
                onMouseLeave={toggleThisDropdown}
                onKeyDown={(e) => {
                  if (isDropdownActive && e.key === "Escape") {
                    toggleThisDropdown();
                  }
                }}
                className={cn(
                  "text-gray-500 dark:text-gray-400 hover:text-primary-500 group text-sm inline-flex gap-1 items-center px-4 py-1.5 font-medium rounded-full",
                  {
                    "bg-white dark:bg-white/5 font-medium text-gray-800 dark:text-white/90 shadow-xs":
                      link?.dropdown?.some(({ slug }) =>
                        pathname?.includes(slug),
                      ),
                  },
                )}
              >
                <span>{link.title}</span>
                <ChevronDown2Icon
                  className={cn("size-4 transition-transform duration-200", {
                    "rotate-180": isDropdownActive,
                  })}
                />
              </button>

              {isDropdownActive && (
                <div
                  onMouseEnter={toggleThisDropdown}
                  onMouseLeave={toggleThisDropdown}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      toggleThisDropdown();
                    }
                  }}
                  className="absolute right-0 w-[266px] bg-white dark:bg-dark-secondary dark:border-gray-800 rounded-2xl shadow-theme-lg border border-gray-100 p-3 z-50"
                >
                  <div className="space-y-1">
                    {link?.dropdown?.map((subItem) => (
                      <Link
                        key={subItem.slug}
                        href={subItem.slug}
                        className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }
      })}
    </nav>
  );
}