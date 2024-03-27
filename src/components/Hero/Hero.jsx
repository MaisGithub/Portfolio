import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";

export const Hero = () => {
  return (<>
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Transforming Ideas into Digital Reality</h1>
        <p className={styles.description}>
          I'm a software front-end developer with experience in using React
          . Reach out if you'd like to learn more!
        </p>
        <a href="mailto:maisjamul369@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Mais.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />


     



    <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
    </section>

    </>
  );
};
