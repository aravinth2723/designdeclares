import styles from "./Latest.module.css";

const heading = "Latest";
const items = [
  {
    dateTime: "24.04.2025, 15:30",
    content:
      "SD4P Collective: How can Service Design drive meaningful sustainability impact",
    readMore: "Recap: SD4P Collective working session – 28th March 2025",
  },
  {
    dateTime: "06.12.2024, 14:30",
    content: "Designing Tomorrow: Speculative Thinking Shapes Our Present",
    readMore:
      "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
  },
];

const Latest = () => {
  return (
    <section className={`${styles.latestContainer} container`}>
      <h1 className="heading">{heading}</h1>
      <section>
        {items.map((item, i) => (
          <div key={i} className={styles.parent}>
            <div>
              <div className={styles.btnGroup}>
                <p className={styles.miniBtn}>Events</p>
                <p className={styles.miniBtn}>D! UK</p>
                <p className={styles.dateTime}>{item.dateTime}</p>
              </div>
              <p>{item.content}</p>
            </div>
            <div>
              <p className={styles.readMoreContent}>{item.readMore}</p>
              <p className={styles.readMoreBtn}>Readmore</p>
            </div>
          </div>
        ))}
        <button className="primary-btn">See all the latest</button>
      </section>
    </section>
  );
};
export default Latest;
