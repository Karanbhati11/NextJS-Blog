import styles from "../styles/home.module.css";
import Typewriter from "typewriter-effect";

const TypingText = () => {
  return (
    <>
      
      <div
        
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <text className={styles.HomeSubHeading}> I am &nbsp;</text>  
        <Typewriter
          options={{
            strings: ["Designer","developer","creator","Blogger","Youtuber"],
            autoStart: true,
            loop: true,
            wrapperClassName: styles.Typewriter,
          }}
        />
      </div>
    </>
  );
};

export default TypingText;