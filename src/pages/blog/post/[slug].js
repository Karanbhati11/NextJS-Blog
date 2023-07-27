import Layout from "../../../components/Layout";
import { getAllPostSlugs, getPostData } from "../../../lib/posts";
import Postt from "@/components/Postt";

const PostPage = ({ postData }) => {
  return (
    <Layout post={postData}>
      {/* <Post post={postData} /> */}
      <Postt post={postData} />
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
