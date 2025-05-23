import "../globals.css";
import Auth from "../auth";
import Session from "../session";
import Providers from "../providers";
import { Toaster } from "react-hot-toast";
import LoadingIndicator from "@/components/shared/loading/LoadingIndicator";
import language from "../language";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL("https://noghlenab.com"),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://noghlenab.com",
      siteName: t("siteName"),
      images: [
        {
          url: "https://s3-console.noghlenab.com/main/e58b2333-8860-4f68-a9a2-522004e2cfe8.webp",
          width: 800,
          height: 600,
          alt: t("imageAlt"),
        },
      ],
      locale: locale === "fa" ? "fa_IR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@noglenab",
      title: t("title"),
      description: t("description"),
      images: [
        "https://s3-console.noghlenab.com/main/e58b2333-8860-4f68-a9a2-522004e2cfe8.webp",
      ],
    },
    pinterest: {
      richPin: true,
      title: t("title"),
      description: t("description"),
      image: ["https://s3-console.noghlenab.com/main/e58b2333-8860-4f68-a9a2-522004e2cfe8.webp"],
    },
  };
}

export default async function RootLayout({ children, params }) {
  // Await params to resolve the dynamic route parameters
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const class_language = new language(locale);
  const lang = class_language.getInfo();
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value ?? "light";

  return (
    <NextIntlClientProvider locale={locale}>
      <Providers>
        <Session>
          <Auth>
            <html style={{ colorScheme: theme }} lang={lang.lang} dir={lang.dir} className={theme}>
              <body>
                {children}
                <Toaster />
                <LoadingIndicator />
              </body>
            </html>
          </Auth>
        </Session>
      </Providers>
    </NextIntlClientProvider>
  );
}