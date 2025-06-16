import styles from "./Donate.module.css";

const heading = "Donate to D!";
const para =
  "Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.";
const actions = ["Donate £10", "Donate £20", "Donate £50"];

const Donate = () => {
  return (
    <section className={`${styles.donateContainer} container`}>
      <h1 className="heading">{heading}</h1>
      <div>
        <p className={`${styles.para} text-animation`}>{para}</p>
        <div className={styles.buttons}>
          {actions.map((d, i) => (
            <button key={i} className="primary-btn">
              {d}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Donate;
