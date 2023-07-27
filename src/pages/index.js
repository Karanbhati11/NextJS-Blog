import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import MetaTags from "@/components/MetaTags";

export default function Home({}) {
  return (
    <div>
      <MetaTags
        title={"home"}
        metaDescription={
          "welcome to my page, I am Karan Bhati, web developer and blogger. you can check my website for more info."
        }
        siteName={"randomposts"}
        siteType={"personal and blog"}
        pageTitle={"home"}
        ogDescription={
          "welcome to my page, I am Karan Bhati, web developer and blogger. you can check my website for more info."
        }
        pageURL={"https://randomposts.netlify.app"}
        ogImage={"https://images.unsplash.com/photo-1559030623-0226b1241edd"}
        facebookURL={"https://facebook.com/karanbhati"}
        authorURL={"https://karanbhati.netlify.app"}
        twitterTitle={"home"}
        twitterDescription={
          "welcome to my page, I am Karan Bhati, web developer and blogger. you can check my website for more info."
        }
        twitterpageURL={"https://randomposts.netlify.app"}
        twitterImage={
          "https://images.unsplash.com/photo-1559030623-0226b1241edd"
        }
        twittersiteName={"randomposts"}
        twitterauthorName={"karanbhati"}
      />
      <main>
        <Navbar />
        <section
          className="hero bg-bg-accent-color dark"
          style={{ backgroundColor: "black" }}
        >
          <div className="container pt-12 pb-16 lg:pt-24 lg:pb-32">
            <h1
              className="mb-8 text-5xl font-semibold md:text-6xl dark:text-white"
              style={{ marginTop: "85px" }}
            >
              Welcome to SciFacts Central
            </h1>
            <p className="text-lg md:text-[22px] font-medium md:max-w-[800px] leading-relaxed dark:text-white">
              Every information you need.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
