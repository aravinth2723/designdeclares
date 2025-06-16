import styles from "./Toolkit.module.css";
import toolkitImg from "../../assets/images/toolkit.webp";

const heading = "The Design Declares Newsletter and Toolkit";
const content =
  "Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.";
const subContent =
  "Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.";

const Toolkit: React.FC = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Subscribed");
  };
  return (
    <section className={`${styles.toolkitContainer} container`}>
      <h1 className="heading">{heading}</h1>
      <div>
        <img
          src={toolkitImg}
          className="text-animation"
          alt="Toolkit"
          width={472}
        />
        <p className={`${styles.content} text-animation`}>{content}</p>
        <p className={`${styles.subContent} text-animation`}>{subContent}</p>
        <form onSubmit={onSubmit} className="text-animation">
          <input
            type="email"
            className={styles.emailInput}
            id="email"
            placeholder="Email:*"
            required
          />
          <div className="checkbox">
            <input type="checkbox" name="" id="" required />
            <label>I would like to be added to the Design</label>
          </div>
          <p className={styles.privacyPolicy}>View our privacy policy</p>
          <button type="submit" className="primary-btn">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
export default Toolkit;
