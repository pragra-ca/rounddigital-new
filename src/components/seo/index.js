import Head from "next/head";

const Seo = ({ title, description, keywords }) => {
  const keywordsData =
    keywords || "RoundDigital, Digital Marketing, Web Design, Branding, SEO, Development";
  const metaDescription =
    description ||
    "RoundDigital empowers businesses with result-driven digital marketing, web development, branding, SEO, and app design solutions.";
  const defaultTitle = "Empowering Digital Growth | RoundDigital";

  return (
    <Head>
      <title>{title ? title : defaultTitle}</title>
      <link
        rel="icon"
        href="https://res.cloudinary.com/dkyp14kzf/image/upload/v1744212312/favicon_xun100.png"
      />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywordsData} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content="RoundDigital" />
      <meta property="og:url" content="https://www.round.digital/" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dkyp14kzf/image/upload/v1744212312/favicon_xun100.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="RoundDigital branding image" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@rounddigital" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dkyp14kzf/image/upload/v1744212312/favicon_xun100.png"
      />
      <meta name="twitter:description" content={metaDescription} />
      {/* <meta
        name="google-site-verification"
        content="1-oTgGaARXtqTHAkUDKHoSZBd1yqsHtogEZ2YqqD06E"
      /> */}
    </Head>
  );
};

export default Seo;
