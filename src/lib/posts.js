import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      frontmatter: {
        ...matterResult.data,
        date: format(new Date(matterResult.data.date), "MMMM dd, yyyy"),
      },
    };
  });
  return allPostsData.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

function markdownToHtml(markdown) {
  return unified()
    .use(remarkParse)
    .use(remarkHtml)
    .processSync(markdown)
    .toString();
}
export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  // Convert markdown to HTML synchronously
  const content = markdownToHtml(matterResult.content);
  // Replace relative image paths with absolute paths
  const processedContent = content.replace(
    /(<img.*?src=")(.*?)"/g,
    `$1$2"`
  );

  return {
    slug,
    frontmatter: {
      ...matterResult.data,
      date: format(new Date(matterResult.data.date), "MMMM dd, yyyy"),
    },
    content: processedContent,
  };
}