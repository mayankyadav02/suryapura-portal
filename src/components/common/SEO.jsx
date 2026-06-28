import { Helmet } from 'react-helmet-async';
import { useLocale } from '../../context/GlobalProviders';

export default function SEO({
  title,
  description = 'सूर्यपुरा ग्राम विकास पोर्टल - A fictional rural development demo showcasing education, farmers, roads, panchayat, digital identity and transparent governance.',
  image = '/og-image.webp',
  path = '',
}) {
  const { lang } = useLocale();

  const siteName = lang === 'HI'
    ? 'सूर्यपुरा ग्राम विकास पोर्टल'
    : 'Suryapura Village Development Portal';

  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  // Demo URL (Replace with Vercel URL after deployment)
  const siteUrl = 'https://example.com';
  const currentUrl = `${siteUrl}${path}`;

  return (
    <Helmet htmlAttributes={{ lang: lang === 'HI' ? 'hi' : 'en' }}>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="theme-color" content="#2C5F2D" />

      <meta name="robots" content="index,follow" />
      <meta name="author" content="Suryapura Demo Project" />

      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}