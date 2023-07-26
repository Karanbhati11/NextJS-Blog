import Head from "next/head";

const Layout = ({ children, post }) => {
  const { title, date } = post.frontmatter;

  return (
    <div>
      <Head>
        <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title}</title>
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://scifactscentral.netlify.app/index.html"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta
          name="description"
          content="Time travel has been a captivating concept that has fascinated scientists, philosophers, and dreamers alike for centuries. The mere mention of traveling through time conjures up visions of extraordinary adventure, changing the course of history and unlocking the secrets of the universe. In this enigmatic exploration, we delve deep into the theoretical realm of time travel, where reality and fiction intersect, and where the fabric of space-time unfolds before our eyes."
        />
        <meta property="og:site_name" content="SciFactsCentral" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="The Future of Commerce: How AI is Reshaping the Way We Shop"
        />
        <meta
          property="og:description"
          content="Time travel has been a captivating concept that has fascinated scientists, philosophers, and dreamers alike for centuries. The mere mention of traveling through time conjures up visions of extraordinary adventure, changing the course of history and unlocking the secrets of the universe. In this enigmatic exploration, we delve deep into the theoretical realm of time travel, where reality and fiction intersect, and where the fabric of space-time unfolds before our eyes."
        />
        <meta
          property="og:url"
          content="https://scifactscentral.netlify.app/time-travel/"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1504197832061-98356e3dcdcf?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;2000"
        />
        <meta
          property="article:published_time"
          content="2023-07-20T13:01:26.000Z"
        />
        <meta
          property="article:modified_time"
          content="2023-07-20T13:01:26.000Z"
        />
        <meta property="article:tag" content="science" />
        <meta property="article:tag" content="time" />

        <meta
          property="article:publisher"
          content="https://www.facebook.com/scifactscentral"
        />
        <meta
          property="article:author"
          content="https://www.facebook.com/scifactscentral"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Time Travel" />
        <meta
          name="twitter:description"
          content="Time travel has been a captivating concept that has fascinated scientists, philosophers, and dreamers alike for centuries. The mere mention of traveling through time conjures up visions of extraordinary adventure, changing the course of history and unlocking the secrets of the universe. In this enigmatic exploration, we delve deep into the theoretical realm of time travel, where reality and fiction intersect, and where the fabric of space-time unfolds before our eyes."
        />
        <meta
          name="twitter:url"
          content="https://scifactscentral.netlify.app/time-travel/"
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1504197832061-98356e3dcdcf?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;2000"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Karan Bhati" />
        <meta name="twitter:label2" content="Filed under" />
        <meta name="twitter:data2" content="AI, E-Commerce" />
        <meta name="twitter:site" content="@ghost" />
        <meta name="twitter:creator" content="@scifactscentral" />
        <meta property="og:image:width" content="2000" />
        <meta property="og:image:height" content="3000" />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
