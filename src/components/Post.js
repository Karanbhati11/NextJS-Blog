import ReactMarkdown from "react-markdown";
import styles from "../styles/post.module.css";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";

const Post = ({ post }) => {
  const { title, date } = post.frontmatter;


  return (
    <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta name="description" content={title} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <article className={styles.postContent}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.date}>{date}</p>
      <div className={styles["post-content"]}>
          {ReactHtmlParser(post.content)}
        </div>
    </article>
  </div>
  );
};

export default Post;
