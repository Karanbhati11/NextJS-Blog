import Link from "next/link";

Link;
const PostTest = ({ post }) => {
  const Mapper = () => {
    return (
      <div className="post-card post-649a81c2d1a14853257c965f">
        <div className="relative mb-4">
          <Link href={`/blog/post/${post?.slug}`}>
            <img
              className="object-cover w-full transition-transform duration-300 rounded-theme h-60 hover:scale-[1.01]"
              srcSet={`
${post?.frontmatter.image}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;300   300w,
${post?.frontmatter.image}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;600   600w,
${post?.frontmatter.image}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;1000 1000w,
${post?.frontmatter.image}?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODc4MTY4NjF8MA&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;2000 2000w
`}
              sizes="(max-width: 1000px) 400px, 700px"
              src={`${post?.frontmatter.image}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDM1fHxnYW1pbmd8ZW58MHx8fHwxNjg3ODQ3Mzg0fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000`}
              alt="Time Travel"
            />
          </Link>
        </div>
        <div>
          <h3 className="mb-3 text-xl font-bold">
            <Link
              href={`/blog/post/${post?.slug}`}
              className="hover:underline hover:underline-offset-[3px] dark:text-white"
            >
              {post?.frontmatter.title}
            </Link>
          </h3>
          <p className="mb-3 text-base leading-relaxed text-gray-700 dark:text-white line-clamp-3">
            {post?.frontmatter.description}
          </p>
          <p className="mb-3 text-base leading-relaxed text-gray-700 dark:text-white line-clamp-3">
            {post?.frontmatter.date}
          </p>
          <div className="flex items-center text-[13px] dark:text-white font-bold">
            <ul className="flex flex-wrap p-0 list-none">
              <li className="relative -ml-3 shrink-0 first:mx-0">
                <div className="overflow-hidden border-[2px] border-white dark:border-bg-dark rounded-full w-8 h-8">
                  <img
                    src="profile.webp"
                    alt="Karan Bhati"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </li>
            </ul>
            <div className="ml-2.5">
              <span>by</span>&nbsp;
              <Link
                href="https://karanbhati.netlify.app"
                title="Karan Bhati"
                className="dark:text-white hover:underline hover:underline-offset-[3px] author-648cdb5ca966d51bdd8d965b ethan"
              >
                Karan Bhati
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <Mapper />;
};

export default PostTest;
