import Navbar from "@/components/Navbar";
import MetaTags from "@/components/MetaTags";
import styles from "../styles/home.module.css";
import TypingText from "@/components/TypingText";
export default function Home({}) {
  return (
    <div>
      <MetaTags
        title={"home"}
        metaDescription={
          "welcome to my page, I am Karan Bhati,developer, designer, blogger, youtuber etc. you can check my website for more info."
        }
        siteName={"karanbhati.tech"}
        siteType={"personal and blog"}
        pageTitle={"home"}
        ogDescription={
          "welcome to my page, I am Karan Bhati,developer, designer, blogger, youtuber etc. you can check my website for more info."
        }
        pageURL={"https://karanbhati.tech"}
        ogImage={"/profile.webp"}
        facebookURL={"https://facebook.com/karanbhati"}
        authorURL={"https://karanbhati.netlify.app"}
        twitterTitle={"home"}
        twitterDescription={
          "welcome to my page, I am Karan Bhati,developer, designer, blogger, youtuber etc. you can check my website for more info."
        }
        twitterpageURL={"https://karanbhati.tech"}
        twitterImage={"/profile.webp"}
        twittersiteName={"karanbhati.tech"}
        twitterauthorName={"karanbhati"}
      />
      <main>
        <Navbar />

        <div className="container pt-12 pb-16 lg:pt-24 lg:pb-32">
          <div className={styles.HomeContainer}>
            <div className={styles.VideoContainer}></div>
            <text className={styles.HomeHeading}>Karan Bhati</text>
            <TypingText />
          </div>
        </div>
      </main>
    </div>
  );
}
