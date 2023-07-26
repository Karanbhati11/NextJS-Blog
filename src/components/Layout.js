import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
    <meta name="google-site-verification" content="JAt505UtgkUlYQYoRLooZMxk78sJOiLvNWGANHyHWKk" />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
