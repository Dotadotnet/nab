"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FooterLogo from "./FooterLogo";
import { useTranslations } from "next-intl";

const Footer = () => {
  const router = useRouter();
  const year = new Date().getFullYear();
  const t = useTranslations("Tools");
  const n = useTranslations("Navbar");
  const f = useTranslations("Footer");

  const sitemaps = [
    {
      name: f("Properties"),
      paths: [
        {
          name: f("SpecialFlavors"),
          path: "/"
        },
        {
          name: f("PremiumFeatures"),
          path: "/"
        },
        {
          name: f("ProductionTeam"),
          path: "/"
        },
        {
          name: f("HomeQuality"),
          path: "/"
        },
        {
          name: f("DifferentExperience"),
          path: "/"
        },
        {
          name: f("LastFeature"),
          path: "/"
        }
      ]
    },
    {
      name: f("Resources"),
      paths: [
        {
          name: f("Recipe"),
          path: "/"
        },
        {
          name: f("PropertiesOfHalvaAndNoghl"),
          path: "/"
        },
        {
          name: f("RelatedTraditions"),
          path: "/"
        },
        {
          name: f("HistoryOfHalvaAndNoghl"),
          path: "/"
        }
      ]
    },
    {
      name: n("AboutUs"),
      paths: [
        {
          name: f("NabTeam"),
          path: "/"
        },
        {
          name: f("ProductionWorkShop"),
          path: "/"
        },
        {
          name: t("Privacy"),
          path: "/"
        },
        {
          name: n("Rules"),
          path: "/"
        }
      ]
    },
    {
      name: n("CallUs"),
      paths: [
        {
          name: t("Support"),
          path: "/"
        },
        {
          name: f("SalesUnit"),
          path: "/"
        },
        {
          name: f("AdvertisingCooperation"),
          path: "/"
        }
      ]
    },
    {
      name: t("Rules"),
      paths: [
        {
          name: f("FilingComplaint"),
          path: "/"
        },
        {
          name: f("TermsOfService"),
          path: "/"
        },
        {
          name: f("LawsAndPolicies"),
          path: "/"
        }
      ]
    },
    {
      name: n("CallUs"),
      paths: [
        {
          name: t("Instagram"),
          path: "https://www.instagram.com/nab/"
        },
        {
          name: t("LinkedIn"),
          path: "https://www.linkedin.com/in/nab/"
        },
        {
          name: t("Telegram"),
          path: "https://github.com/nab/"
        }
      ]
    }
  ];

  return (
    <footer className="footer-1   p-4 sm:py-12 bg-lightbg dark:bg-slate-900">
      <div className="container mx-auto px-4 flex flex-col gap-y-10 bg-yellow-50 dark:bg-slate-800  p-6 rounded-xl text-gray-900 dark:text-gray-100">
        <div className="flex md:flex-row md:flex-wrap md:justify-between flex-col gap-x-4 gap-y-8">
          {sitemaps?.map((sitemap, index) => (
            <div key={index} className="flex flex-col gap-y-3">
              <h2 className="text-2xl">{sitemap.name}</h2>
              <div className="flex flex-col gap-y-1.5">
                {sitemap?.paths?.map((path, index) => (
                  <Link key={index} href={path?.path} className="text-base">
                    {path?.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <FooterLogo />{" "}
        </div>
        <hr />
        <p className="text-center">
          &copy; {year} {f("CopyRight")}
          <br />
          {f("Developers")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
