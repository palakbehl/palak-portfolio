import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, image, url }) => {
  const siteTitle = "Palak Behl | Portfolio";
  const siteDescription = "Full Stack Developer specializing in React, Node.js, and Modern Web Design.";
  const siteUrl = "https://palakbehl.vercel.app"; // Replace with actual URL
  const siteImage = "/og-image.png"; // You should add an image to public folder

  return (
    <Helmet>
      {/* Basic */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || siteDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:image" content={image || siteImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || siteUrl} />
      <meta property="twitter:title" content={title || siteTitle} />
      <meta property="twitter:description" content={description || siteDescription} />
      <meta property="twitter:image" content={image || siteImage} />
    </Helmet>
  );
};
