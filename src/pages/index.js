// pages/index.js

import Head from "next/head";
import { useState } from "react";
import { getSortedPostsData } from "../lib/posts";
import BlogPostsSection from "../components/BlogPostsSection";
import Footer from "../components/Footer";

export default function Home({ initialPosts, allPostsData }) {
  const [visiblePosts, setVisiblePosts] = useState(initialPosts);
  const postsPerPage = 5; // Number of posts to display per page

  const loadMorePosts = () => {
    const nextVisiblePosts = allPostsData.slice(
      visiblePosts.length,
      visiblePosts.length + postsPerPage
    );
    setVisiblePosts((prevVisiblePosts) => [
      ...prevVisiblePosts,
      ...nextVisiblePosts,
    ]);
  };

  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="My blog homepage" />
    <meta name="google-site-verification" content="JAt505UtgkUlYQYoRLooZMxk78sJOiLvNWGANHyHWKk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}

      <main>
        {/* <IntroSection /> */}

        <BlogPostsSection
          initialPosts={initialPosts}
          visiblePosts={visiblePosts}
          loadMorePosts={loadMorePosts}
          allPostsData={allPostsData}
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      initialPosts: allPostsData.slice(0, 5), // Initial number of posts to display
      allPostsData, // Pass allPostsData to the component
    },
  };
}
