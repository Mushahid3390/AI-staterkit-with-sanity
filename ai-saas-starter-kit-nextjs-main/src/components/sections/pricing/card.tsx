import { CheckIcon } from '@/icons/icons';
import GlowGradient from '@/assets/pricing/glow';
import type { TBILLING_PLAN } from '@/components/sections/pricing/data';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { billingplan } from '@/lib/type';

type Props = {
  plan: billingplan;
  billingPeriod: string;
};

export function PricingCard({ plan, billingPeriod }: Props) {
  return (
    <div className="relative">
      <div
        className={`bg-white dark:bg-dark-primary rounded-[20px] shadow-one relative z-10 h-full ${
          plan?.isPopular ? "relative border-2 border-primary-500" : ""
        }`}
      >
        <div className="p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
              {plan?.palnName}
            </h2>
            {plan?.isPopular && (
              <span className="px-2 py-1 text-xs font-medium dark:text-pir rounded-full dark:bg-primary-500/15 bg-primary-50 text-primary-500">
                Popular
              </span>
            )}
          </div>
          <p className="flex items-baseline mt-4">
            <span className="text-4xl text-nowrap font-semibold text-gray-800 dark:text-white/90">
              {
                plan?.price?.filter((plan) => {
                  return (
                    plan?.period?.toLowerCase() === billingPeriod.toLowerCase()
                  );
                })[0]?.price}
            </span>

            {plan?.price?.filter((plan) => {
              return plan?.period?.toLowerCase() === billingPeriod?.toLowerCase();
            })[0]?.price !== "0" && (
              <span className="ml-1 text-nowrap text-sm text-gray-500 dark:text-gray-400">
                {billingPeriod === "yearly" ? "Per year" : "Per month"}
              </span>
            )}
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            {plan?.description}
          </p>

          {plan?.palnName.toLowerCase().includes("Enterprise".toLowerCase()) ? (
            <ContactSalesLink>{plan.cta}</ContactSalesLink>
          ) : (
            <button
              className={cn(
                "block w-full px-8 py-3.5 mt-7 text-sm font-medium text-center rounded-full transition",
                {
                  "dark:bg-dark-primary dark:text-white/90 dark:hover:bg-gray-800 dark:border-gray-800 text-gray-800 bg-white border border-gray-200 hover:bg-gray-50":
                    plan?.palnName.toLowerCase().includes("Free".toLowerCase()),
                  "gradient-btn text-white": plan?.isPopular,
                  "dark:hover:bg-primary-500 dark:bg-white/3 hover:bg-gray-900 text-white bg-gray-700":
                    !plan?.isPopular &&
                    !plan?.palnName.toLowerCase().includes("Free".toLowerCase()),
                },
              )}
            >
              {plan?.cta}``
            </button>
          )}
        </div>
        <div className="px-8 pb-7">
          <ul className="space-y-3">
            {plan?.features?.map((feature) => (
              <li key={feature?._key} className="flex items-start">
                <div className="shrink-0 text-gray-500 dark:text-gray-400">
                  <CheckIcon />
                </div>

                <p className="ml-2 text-sm text-gray-800 dark:text-white/90">
                  {feature?.children[0]?.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {plan?.isPopular && (
        <GlowGradient className="absolute -left-full -translate-x-20 top-0 max-lg:hidden" />
      )}
    </div>
  );
}

function ContactSalesLink({ children }: PropsWithChildren) {
  return (
    <Link
      href="/contact"
      className="block w-full px-8 py-3.5 mt-7 text-sm font-medium text-center rounded-full transition dark:hover:bg-primary-500 dark:bg-white/3 hover:bg-gray-900 text-white bg-gray-700"
    >
      {children}
    </Link>
  );
}
