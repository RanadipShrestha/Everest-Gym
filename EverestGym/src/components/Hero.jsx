import style from "./css/Hero.module.css";
import heroImage from "../img/HeroSection.jpg";

const Hero = () => {
  return (
    <section className={style.heroGrid}>
      {/* Left section - Big Heading */}
      <div className={style.leftBox}>
        <h1 className={style.title}>
          OWN YOUR <br /> STRENGTH, <br /> OWN YOU
        </h1>
        <button className={style.ctaBtn}>START YOUR JOURNEY</button>
        <p className={style.subText}>LUXURY FITNESS EXPERIENCE</p>
      </div>

      {/* Right section - Image */}
      <div className={style.rightBox}>
        <img src={heroImage} alt="Training" className={style.heroImg} />
        <h3 className={style.overlayText}>TRAIN ON YOUR OWN TIME</h3>
      </div>

      {/* Contact box */}
      <div className={style.contactBox}>
        <div className={style.contactImg}></div>
        <div className={style.contactContent}>
          <p>24/7 SUPPORT</p>
          <p>12934 FITNESS LN, BROOKLYN, NY</p>
          <h3>CONTACT US & RISE STRONGER</h3>
        </div>
      </div>

      {/* Reviews & Facilities */}
      <div className={style.reviewBox}>
        <h2>4.98 ⭐⭐⭐⭐⭐</h2>
        <p>BASED ON THE REVIEWS</p>
        <div className={style.facilities}>
          <span>BOXING RING</span>
          <span>BASKETBALL COURTS</span>
          <span>JUICE BAR</span>
          <span>PERSONAL TRAINERS</span>
          <span>LOCKERS</span>
          <span>FREE PARKING</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
