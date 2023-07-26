import Link from "next/link";
import PostTest from "./PostTest";
const BlogPostsSection = ({
  initialPosts,
  visiblePosts,
  loadMorePosts,
  allPostsData,
}) => {
  return (
    <section>
      <div className="home-template overflow-x-hidden dark:bg-bg-dark">
        <header
          className="header py-8 bg-bg-accent-color dark"
          style={{ backgroundColor: "black" }}
        >
          <div className="container flex items-center justify-between">
            <Link href="/" className="logo is-header" legacyBehavior>
              <img
                src="/LOGO.png"
                alt="SciFactsCentral"
                className="w-auto h-logo"
              />
            </Link>
          </div>
        </header>
        <section
          className="hero bg-bg-accent-color dark"
          style={{ backgroundColor: "black" }}
        >
          <div className="container pt-12 pb-16 lg:pt-24 lg:pb-32">
            <h1 className="mb-8 text-5xl font-semibold md:text-6xl dark:text-white">
              Welcome to SciFacts Central
            </h1>
            <p className="text-lg md:text-[22px] font-medium md:max-w-[800px] leading-relaxed dark:text-white">
              Every information you need.
            </p>
          </div>
        </section>
        <div className="container">
          <div className="h-[1px] bg-gray-300 dark:bg-gray-700 w-full"></div>
        </div>
        <section className="container pt-6 mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg dark:text-white">Latest Posts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 all-posts gap-9">
            {visiblePosts.map((post) => (
              <PostTest post={post} key={post.slug} />
            ))}
          </div>
        </section>
        {visiblePosts.length < allPostsData.length && (
          <button
            className="container flex items-center justify-center"
            style={{
              width: "200px",
              backgroundColor: "white",
              color: "black",
              border: "2px solid #008CBA",
              padding: "15px 32px",
              marginTop: "-50px",
              marginBottom: "30px",
              textAlign: "center",
              textDecoration: "none",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={loadMorePosts}
          >
            Load More
          </button>
        )}
        <div className="container">
          <div className="h-[1px] bg-gray-300 dark:bg-gray-700 w-full"></div>
        </div>
      </div>

      <footer
        className="header py-8 bg-bg-accent-color light"
        style={{ backgroundColor: "black" }}
      >
        <div
          className="container flex items-center justify-center"
          style={{ color: "white" }}
        >
          &copy; 2023 SciFactsCentral, All Rights Reserved.
        </div>
      </footer>
    </section>
  );
};

export default BlogPostsSection;
