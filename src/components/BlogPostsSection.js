import Link from "next/link";
import styles from "../styles/Home.module.css";

const BlogPostsSection = ({ initialPosts, visiblePosts, loadMorePosts,allPostsData  }) => {

  return (
    <section>
      <div className={styles.grid}>
        {visiblePosts.map((post) => (
          <div key={post.slug} className={styles.card}>
            <Link href={`/posts/${post.slug}`} legacyBehavior>
              <a style={{textDecoration:'none'}}>
                <img src={post.frontmatter.image} alt={post.frontmatter.title} />
                <h2>{post.frontmatter.title}</h2>
                <p style={{fontSize:'1rem'}}>{post.frontmatter.date}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>

      {visiblePosts.length < allPostsData.length && (
          <button className={styles.loadMoreButton} onClick={loadMorePosts}>
            Load More
          </button>
        )}
    </section>
  );
};

export default BlogPostsSection;
