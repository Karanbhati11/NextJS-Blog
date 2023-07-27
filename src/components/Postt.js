"use-client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Postt = ({ post }) => {
  const { title, date, description } = post.frontmatter;
  const [tagsData, setTagsData] = useState([]);

  useEffect(() => {
    // Function to recursively extract tags and their content from the HTML
    const extractTags = (element) => {
      const children = element.children;
      for (const child of children) {
        // Exclude the <body> tag itself
        if (child.tagName.toLowerCase() !== "body") {
          const tag = child.tagName.toLowerCase();
          let content;

          if (child instanceof HTMLImageElement) {
            // For images, get the 'src' attribute as the content
            content = child.getAttribute("src");
          } else {
            content = child.textContent.trim();
          }

          setTagsData((prevData) => [...prevData, { [tag]: content }]);
        }
        // Recursive case: traverse through the children
        if (child.children.length > 0) {
          extractTags(child);
        }
      }
    };
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, "text/html");
    if (doc.body) {
      extractTags(doc.body);
    }
  }, [post.content]);
  const PostData = () => {
    return (
      <div
        className="post-template tag-ai tag-e-commerce overflow-x-hidden dark:bg-bg-dark"
        suppressHydrationWarning
      >
        <Navbar />

        <header
          className="container !max-w-5xl pt-10 md:pt-20 mb-12"
          style={{ marginTop: "85px" }}
        >
          <h1 className="mb-6 text-4xl font-bold md:text-5xl dark:text-white">
            {title}
          </h1>

          <div className="flex items-center dark:text-white">
            <ul className="flex flex-wrap p-0 mr-5 list-none">
              <li className="relative shrink-0">
                <div className="-mx-2 overflow-hidden border-[2px] border-white dark:border-bg-dark rounded-full w-14 h-14">
                  <img
                    src="/profile.webp"
                    alt="Karan Bhati"
                    className="object-cover w-full h-full rounded-full"
                    aria-label="image of the author"
                  />
                </div>
              </li>
            </ul>
            <div className="right">
              <div className="mb-1">
                by&nbsp;
                <Link
                  href="https://karanbhati.netlify.app"
                  title="Karan Bhati"
                  className="dark:text-white hover:underline hover:underline-offset-[3px] font-semibold"
                >
                  Karan Bhati
                </Link>
              </div>
              <div className="text-sm">
                <time dateTime="2023-06-26">{date}</time>
                <span className="mx-1 text-xs align-[1px]">•</span> 2 min read
              </div>
            </div>
          </div>
        </header>

        <figure className="featured-image mb-12 container !max-w-7xl">
          <img
            className="object-cover w-full h-auto rounded-theme aspect-[4/2.3]"
            srcSet={`
              ${tagsData[2]?.img}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;300   300w,
              ${tagsData[2]?.img}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;600   600w,
              ${tagsData[2]?.img}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;1000,
              ${tagsData[2]?.img}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;2000
            `}
            sizes="(min-width: 1400px) 1400px, 92vw"
            src={`${tagsData[2]?.img}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDM1fHxnYW1pbmd8ZW58MHx8fHwxNjg3ODQ3Mzg0fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000`}
            alt="The Future of Commerce: How AI is Reshaping the Way We Shop"
            aria-label="Main Content image"
            loading="eager"
          />
        </figure>
        <div className="container !max-w-5xl">
          <div className="mb-16 prose prose-lg md:prose-xl hover:prose-a:text-accent-color prose-a:underline-offset-[3px] max-w-none dark:prose-invert">
            <h2 id="introduction">Introduction</h2>
            <p>{tagsData[3]?.p}</p>
            <h3 id="headings">{tagsData[4]?.h2}</h3>
            <p>{tagsData[5]?.p}</p>
            <h3 id="headings"> {tagsData[6]?.h2}</h3>
            <p>{tagsData[7]?.p}</p>
            <p>{tagsData[8]?.p}</p>
            <h3 id="headings"> {tagsData[9]?.h2}</h3>
            <p>{tagsData[10]?.p}</p>
            <p>{tagsData[11]?.p}</p>
            <h3 id="headings">{tagsData[12]?.h2}</h3>
            <p>{tagsData[13]?.p}</p>
            <p>{tagsData[14]?.p}</p>
            <h3 id="headings">{tagsData[15]?.h2}</h3>
            <p>{tagsData[16]?.p}</p>
            <p>{tagsData[17]?.p}</p>
            <h3 id="headings">{tagsData[18]?.h2}</h3>
            <p>{tagsData[19]?.p}</p>
            <p>{tagsData[20]?.p}</p>
            <h3 id="headings">{tagsData[21]?.h2}</h3>
            <p>{tagsData[22]?.p}</p>
            <p>{tagsData[23]?.p}</p>
            <h3 id="conclusion">{tagsData[24]?.h2}</h3>
            <p>{tagsData[25]?.p}</p>
          </div>
          <div className="container">
            <div className="h-[1px] bg-gray-300 dark:bg-gray-700 w-full"></div>
          </div>
          <div className="container !max-w-5xl">
            <div className="mb-14 prose prose-lg md:prose-xl hover:prose-a:text-accent-color prose-a:underline-offset-[3px] max-w-none dark:prose-invert">
              <h3 style={{ textAlign: "start" }} id="conclusion">
                FAQ
              </h3>
              <h4 style={{ textAlign: "start" }} id="conclusion">
                {tagsData[26]?.h4}
              </h4>
              <p style={{ textAlign: "justify" }}>{tagsData[27]?.p}</p>
              <h4 style={{ textAlign: "start" }} id="conclusion">
                {tagsData[28]?.h4}
              </h4>
              <p style={{ textAlign: "justify" }}>{tagsData[29]?.p}</p>
              <h4 style={{ textAlign: "start" }} id="conclusion">
              {tagsData[30]?.h4}
              </h4>
              <p style={{ textAlign: "justify" }}>{tagsData[31]?.p}</p>
              <h4 style={{ textAlign: "start" }} id="conclusion">
                {tagsData[32]?.h4}
              </h4>
              <p style={{ textAlign: "justify" }}>{tagsData[33]?.p}</p>
              <h4 style={{ textAlign: "start" }} id="conclusion">
                {tagsData[34]?.h4}
              </h4>
              <p style={{ textAlign: "justify" }}> {tagsData[35]?.p}</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  };

  return (
    <div lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <PostData />
    </div>
  );
};

export default Postt;
