import style from "./css/About.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className={style.aboutUs}>ABOUT US</h2>
        <h1 className={style.title}>YOUR FITNESS JOURNEY STARTS HERE</h1>
        <p className={style.description}>
          At FlexFit, we are dedicated to helping you unlock your full fitness
          potential. With cutting-edge equipment, professional trainers, and a
          supportive community, we provide the perfect environment to challenge
          yourself, stay motivated, and achieve your goals.
        </p>
      </div>
      <div className={style.stats}>
        <div className={style.stat}>
          <span>12+</span> Years of Excellence
        </div>
        <div className={style.stat}>
          <span>27K+</span> Members
        </div>
        <div className={style.stat}>
          <span>60+</span> Weekly Classes
        </div>
        <div className={style.stat}>
          <span>117+</span> Expert Trainers
        </div>
      </div>
    </div>
  );
};

export default About;
