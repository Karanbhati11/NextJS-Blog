import Head from "next/head";

const Layout = ({ children, post }) => {
  const { title, date, image, description } = post.frontmatter;
  function convertDateFormat(dateString) {
    // Parse the date string using Date object
    const date = new Date(dateString);
  
    // Check if the date is valid
    if (isNaN(date)) {
      return "Invalid Date";
    }
  
    // Get the date in the desired format (UTC)
    const formattedDate = date.toISOString();
  
    return formattedDate;
  }
  const BASE_URL = "https://karanbhati.tech";
  return (
    <div>
      <Head>
        <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta property="og:site_name" content="karanbhati.tech" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`${BASE_URL}/blog/post/${post.slug}`}
        />
        <meta
          property="og:image"
          content={`${image}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;2000`}
        />
        <meta
          property="article:published_time"
          content={convertDateFormat(date)}
        />
        <meta
          property="article:modified_time"
          content={convertDateFormat(date)}
        />

        <meta property="article:publisher" content={BASE_URL} />
        <meta
          property="article:author"
          content="https://karanbhati.netlify.app"
        />
        <meta name="twitter:card" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:url"
          content={`${BASE_URL}/blog/post/${post.slug}`}
        />
        <meta
          name="twitter:image"
          content={`${image}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;2000`}
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Karan Bhati" />
        <meta name="twitter:creator" content="@karan bhati" />
        <meta property="og:image:width" content="2000" />
        <meta property="og:image:height" content="3000" />
        <meta
          name="google-site-verification"
          content="JAt505UtgkUlYQYoRLooZMxk78sJOiLvNWGANHyHWKk"
        />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
