import Head from "next/head";

const MetaTags = ({
  title,
  metaDescription,
  siteName,
  siteType,
  pageTitle,
  ogDescription,
  pageURL,
  ogImage,
  facebookURL,
  authorURL,
  twitterTitle,
  twitterDescription,
  twitterpageURL,
  twitterImage,
  twittersiteName,
  twitterauthorName,
}) => {
  return (
    <Head>
      <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
      <meta charset="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <meta name="HandheldFriendly" content="True" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta
        name="description"
        // content="Contact details are as below. you can also contact me on deadlygmerx@gmail.com!"
        content={metaDescription}
      />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={siteType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={pageURL} />
      <meta
        property="og:image"
        content={`${ogImage}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxjb250YWN0fGVufDB8fHx8MTY4NzkyNDg2MXww&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;2000`}
      />
      <meta
        property="article:published_time"
        content="2023-06-16T00:26:59.000Z"
      />
      <meta
        property="article:modified_time"
        content="2023-06-28T04:01:14.000Z"
      />
      <meta property="article:publisher" content={facebookURL} />
      <meta property="article:author" content={authorURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:url" content={twitterpageURL} />
      <meta
        name="twitter:image"
        content={`${twitterImage}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxjb250YWN0fGVufDB8fHx8MTY4NzkyNDg2MXww&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;2000`}
      />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="karanbhati" />
      <meta name="twitter:site" content={twittersiteName} />
      <meta name="twitter:creator" content={twitterauthorName} />
      <meta property="og:image:width" content="2000" />
      <meta property="og:image:height" content="1125" />
    </Head>
  );
};

export default MetaTags;
