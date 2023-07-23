import Link from "next/link";
import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.slug} href={`/posts/${post.slug}`} legacyBehavior={true}>
          <a>
            <Post post={post} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
