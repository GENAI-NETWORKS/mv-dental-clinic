import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  name?: string;
  href?: string;
}

export const SEO = ({
  title,
  description,
  type = 'website',
  name = 'MV Dental Clinic',
  href,
}: SEOProps) => {
  const currentUrl = href || window.location.href;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph tags for Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={currentUrl} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};
