import Link from "next/link";
import PostTest from "./PostTest";
import Navbar from "./Navbar";
import Footer from "./Footer";
const BlogPostsSection = ({
  initialPosts,
  visiblePosts,
  loadMorePosts,
  allPostsData,
}) => {
  return (
    <section>
      <div className="home-template overflow-x-hidden dark:bg-bg-dark">
        <Navbar />

        <section className="container pt-6 mb-20" style={{marginTop:'85px'}}>
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
      </div>
    </section>
  );
};

export default BlogPostsSection;
