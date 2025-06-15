import styles from "./Card.module.css";

type CardsType = {
  heading: string;
  para: string;
  items: {
    title: string;
    content: string[];
  }[];
};

const Card = ({ heading, para, items }: CardsType) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>{heading}</h1>
      <section className={styles.card}>
        <p className={styles.para}>{para}</p>
        {items.map((item, idx) => (
          <div key={idx} className={styles.sections}>
            <div className={styles.header}>
              <p className={styles.title}>{item.title}</p>
            </div>
            <ul className={styles.content}>
              {item.content.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </section>
  );
};
export default Card;
