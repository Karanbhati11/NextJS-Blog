import Footer from "@/components/Footer";
import MetaTags from "@/components/MetaTags";
import Navbar from "@/components/Navbar";

const index = () => {
  return (
    <div lang="en" className="overflow-x-hidden">
      <MetaTags
        title={"Contact"}
        metaDescription={
          "you can contact me through this page or email me at deadlygmerx@gmail.com!"
        }
        siteName={"karanbhati.tech"}
        siteType={"personal and blog"}
        pageTitle={"Contact Us"}
        ogDescription={
          "you can contact me through this page or email me at deadlygmerx@gmail.com!"
        }
        pageURL={"https://karanbhati.tech/contact"}
        ogImage={"/profile.png"}
        facebookURL={"https://facebook.com/karanbhati"}
        authorURL={"https://karanbhati.netlify.app"}
        twitterTitle={"Contact"}
        twitterDescription={
          "you can contact me through this page or email me at deadlygmerx@gmail.com!"
        }
        twitterpageURL={"https://karanbhati.tech/contact"}
        twitterImage={
          "/profile.png"
        }
        twittersiteName={"karanbhati.tech"}
        twitterauthorName={"karanbhati"}
      />
      <div className="page-template page-contact overflow-x-hidden dark:bg-bg-dark">
        <Navbar />

        <section
          className="container !max-w-3xl pt-10 md:pt-20 pb-20 md:pb-40 text-center"
          style={{ marginTop: "85px" }}
        >
          <header className="mb-10 md:mb-20">
            <h1 className="mb-8 text-5xl font-bold md:text-6xl dark:text-white">
              Contact
            </h1>

            <figure>
              <img
                className="object-cover w-full h-full rounded-theme aspect-video"
                srcSet="
              https://images.unsplash.com/photo-1559030623-0226b1241edd?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxjb250YWN0fGVufDB8fHx8MTY4NzkyNDg2MXww&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;300   300w,
              https://images.unsplash.com/photo-1559030623-0226b1241edd?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxjb250YWN0fGVufDB8fHx8MTY4NzkyNDg2MXww&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;600   600w,
              https://images.unsplash.com/photo-1559030623-0226b1241edd?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxjb250YWN0fGVufDB8fHx8MTY4NzkyNDg2MXww&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;1000 1000w,
              https://images.unsplash.com/photo-1559030623-0226b1241edd?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxjb250YWN0fGVufDB8fHx8MTY4NzkyNDg2MXww&amp;ixlib&#x3D;rb-4.0.3&amp;q&#x3D;80&amp;w&#x3D;2000 2000w
            "
                sizes="(min-width: 1400px) 1400px, 92vw"
                src="https://images.unsplash.com/photo-1559030623-0226b1241edd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE3fHxjb250YWN0fGVufDB8fHx8MTY4NzkyNDg2MXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000"
                alt="Contact"
              />
              <figcaption className="mt-2 text-xs text-left text-gray-500">
                Photo by
                <a href="https://unsplash.com/@chenhanozel?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">
                  Chen Mizrach
                </a>
                /
                <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">
                  Unsplash
                </a>
              </figcaption>
            </figure>
          </header>

          <div className="prose prose-lg md:prose-xl max-w-none">
            <div className="text-left"></div>
            <form method="POST" action="#">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                aria-label="Your name"
                className="w-full p-4 mb-8 bg-gray-100 border-none rounded-theme focus:ring-0 focus:ring-offset-0 dark:bg-white/[0.06]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                aria-label="Your email address"
                className="w-full p-4 mb-8 bg-gray-100 border-none rounded-theme focus:ring-0 focus:ring-offset-0 dark:bg-white/[0.06]"
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                aria-label="Your message"
                className="w-full p-4 mb-8 bg-gray-100 border-none rounded-theme h-44 focus:ring-0 focus:ring-offset-0 dark:bg-white/[0.06]"
                required
              ></textarea>
              <button
                className="px-6 py-3 font-semibold text-white rounded-full cursor-pointer bg-accent-color"
                type="submit"
              >
                Send message
              </button>
            </form>
          </div>
        </section>

        <div className="container mb-20">
          <div className="h-[1px] bg-gray-300 dark:bg-gray-700 w-full"></div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default index;
