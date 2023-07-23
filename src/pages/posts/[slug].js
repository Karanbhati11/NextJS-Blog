import Layout from "../../components/Layout";
import { getAllPostSlugs, getPostData } from "../../lib/posts";
import Post from "../../components/Post";

const PostPage = ({ postData }) => {
  return (
    <Layout>
      <Post post={postData} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default PostPage;
