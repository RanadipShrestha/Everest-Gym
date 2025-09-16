import style from "./css/FitnessGoals.module.css";
import moreEndurance from "../img/HeroSection.jpg";
import gainMuscles from "../img/HeroSectionCopy.jpg";
import getToned from "../img/HeroSection.jpg";
import extraPower from "../img/HeroSectionCopy.jpg";

const FitnessGoals = () => {
  return (
    <div className={style.container}>
      <h1>
        ACHIEVE YOUR GOALS. <span>FASTER</span>
      </h1>
      <div className={style.contain}>
        <div className={style.goalItem}>
          <img src={moreEndurance} alt="More Endurance" />
          <p>More Endurance</p>
        </div>
        <div className={style.goalItem}>
          <img src={gainMuscles} alt="Gain Muscles" />
          <p>Gain Muscles</p>
        </div>
        <div className={style.goalItem}>
          <img src={getToned} alt="Get Toned" />
          <p>Get Toned</p>
        </div>
        <div className={style.goalItem}>
          <img src={extraPower} alt="Extra Power" />
          <p>Extra Power</p>
        </div>
      </div>
    </div>
  );
};

export default FitnessGoals;
