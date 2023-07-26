"use-client"
import Link from "next/link";
import { useEffect, useState } from "react";

const Postt = ({ post }) => {
  const { title, date } = post.frontmatter;

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
      <div className="post-template tag-ai tag-e-commerce overflow-x-hidden dark:bg-bg-dark" suppressHydrationWarning>
         <header
          className="header py-8 bg-bg-accent-color dark"
          style={{ backgroundColor: "black" }}
        >
          <div className="container flex items-center justify-between">
            <Link href="/" className="logo is-header">
              <img
                src="/LOGO.png"
                alt="SciFactsCentral"
                className="w-auto h-logo"
              />
            </Link>
          </div>
        </header>

        <header className="container !max-w-5xl pt-10 md:pt-20 mb-12">
    

          <h1 className="mb-6 text-4xl font-bold md:text-5xl dark:text-white">
            {title}
          </h1>

          <div className="flex items-center dark:text-white">
            <ul className="flex flex-wrap p-0 mr-5 list-none">
              <li className="relative shrink-0">
                <div className="-mx-2 overflow-hidden border-[2px] border-white dark:border-bg-dark rounded-full w-14 h-14">
                  <img
                    src="/profile.jpg"
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
              ${tagsData[2]?.img}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;1000 1000w,
              ${tagsData[2]?.img}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;2000 2000w
            `}
            sizes="(min-width: 1400px) 1400px, 92vw"
            src={`${tagsData[2]?.img}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDM1fHxnYW1pbmd8ZW58MHx8fHwxNjg3ODQ3Mzg0fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000`}
            alt="The Future of Commerce: How AI is Reshaping the Way We Shop"
            aria-label="Main Content image"
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
            <p>{tagsData[17]?.p}</p>
            <h3 id="conclusion">{tagsData[21]?.h2}</h3>
            <p>{tagsData[22]?.p}</p>
            <p>{tagsData[23]?.p}</p>
          </div>
        </div>

        <footer
        className="header py-8 bg-bg-accent-color light"
        style={{ backgroundColor: "black" }}
      >
        <div
          className="container flex items-center justify-center"
         style={{color:'white'}}
        >
          &copy; 2023 SciFactsCentral, All Rights Reserved.
        </div>
      </footer>

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
