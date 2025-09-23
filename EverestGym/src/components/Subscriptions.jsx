import style from "./css/Subscriptions.module.css";

const Subscriptions = () => {
  return (
    <div className={style.subscriptionSection}>
      <p>Subscriptions</p>
      <h1>
        FLEXIBLE <span>GOALS</span> FOR EVERY GOAL
      </h1>
      <div className={style.monthly}>
        <div className={style.plans}>
          <div className={style.plan}>
            <h2>Basic</h2>
            <p>$25/monthly</p>
            <p>Essential package for regular workouts.</p>
            <ul>
              <li>Unlimited access to the gym</li>
              <li>1 free class per month</li>
              <li>Free access to relaxation areas</li>
            </ul>
            <button>Get started</button>
          </div>

          <div className={style.plan}>
            <h2>Standard</h2>
            <p>$35/monthly</p>
            <p>Balanced plan for consistent fitness progress.</p>
            <ul>
              <li>Unlimited access to the gym</li>
              <li>5 free classes per month</li>
              <li>Access to premium equipment</li>
            </ul>
            <button>Get started</button>
          </div>

          <div className={style.plan}>
            <h2>Premium</h2>
            <p>$45/monthly</p>
            <p>Full package for maximum results.</p>
            <ul>
              <li>Unlimited access to the gym</li>
              <li>Unlimited classes</li>
              <li>Personal trainer support</li>
            </ul>
            <button>Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscriptions;
