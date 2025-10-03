import Head from 'next/head';
import { siteConfig, structuredData, breadcrumbData, faqData } from './Data';



const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage
}) => {
  title = title || siteConfig.siteName;
  description = description || siteConfig.siteDescription;
  keywords = keywords || "حلوا, شیرینی سنتی, حلوا ارده, سوهان, گز اصفهان, شیرینی ایرانی, حلواپزی";
  canonical = canonical || siteConfig.siteUrl;
  ogImage = ogImage || `${siteConfig.siteUrl}/og-image.jpg`;

  const fullTitle = title === siteConfig.siteName ? title : `${title} | ${siteConfig.siteName}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      {/* Basic meta */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteConfig.siteName} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content="fa_IR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional */}
      <meta name="theme-color" content="#4f46e5" />
      <meta name="msapplication-TileColor" content="#4f46e5" />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        data-schema="business"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        data-schema="breadcrumb"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        data-schema="faq"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </Head>
  );
};

export default SEOHead;