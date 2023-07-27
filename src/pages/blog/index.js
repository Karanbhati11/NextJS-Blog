import { useState } from "react";
import { getSortedPostsData } from "../../lib/posts";
import BlogPostsSection from "../../components/BlogPostsSection";
import Footer from "../../components/Footer";
import MetaTags from "@/components/MetaTags";

export default function page({ initialPosts, allPostsData }) {
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
      <MetaTags
        title={"Blog"}
        metaDescription={
          "welcome to my blog, here you will find posts related to everything!"
        }
        siteName={"karanbhati.tech"}
        siteType={"personal and blog"}
        pageTitle={"Blog"}
        ogDescription={
          "welcome to my blog, here you will find posts related to everything!"
        }
        pageURL={"https://karanbhati.tech/blog"}
        ogImage={"/profile.png"}
        facebookURL={"https://facebook.com/karanbhati"}
        authorURL={"https://karanbhati.netlify.app"}
        twitterTitle={"Blog"}
        twitterDescription={
          "welcome to my blog, here you will find posts related to everything!"
        }
        twitterpageURL={"https://karanbhati.tech/blog"}
        twitterImage={
          "/profile.png"
        }
        twittersiteName={"karanbhati.tech"}
        twitterauthorName={"karanbhati"}
      />

      <main>
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
