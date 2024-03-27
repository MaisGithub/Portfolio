import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/image.png")} style={{width:300, margin:10}}alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <br/><br/>
              <p>
               I enjoy facing challenges, finding solutions and help others which brings me happiness. 
<br/><br/>
As a front-end developer, I have expertise in HTML, CSS3, and JavaScript, and I can easily convert any web page template to code. I am also a professional in React, React Hooks, Redux-Saga, and Bootstrap.
<br/><br/>
Navigating the website and finding the information you're looking for is a satisfying experience. It's even better when you find exactly what you want as that sense of accomplishment is priceless, isn't it?
<br/><br/>
I believe that achieving anything in life, including coding, can be done easily and simply. However, not everyone knows this simple way.

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
