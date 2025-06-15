import { useState } from "react";
import styles from "./Declare.module.css";

const heading = "Declare Emergency Now";
const content =
  "Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.";

const Declare: React.FC = () => {
  const [formData, setFormData] = useState({
    website: "",
    country: "",
    discipline: "",
    email: "",
    text: "",
    businessName: "",
    individualName: "",
    institutionName: "",
    teamName: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className={`${styles.declareContainer} container`}>
      <h1 className="heading">{heading}</h1>
      <div className={styles.content}>
        <p className={styles.content}>{content}</p>
        {/* <form onSubmit={onSubmit} className={styles.declarationForm}>
          <h2>I am Declaring Emergency</h2>
          <div className={styles.termsCondition}>
            <div>
              <input
                type="checkbox"
                className={styles.checkbox}
                name=""
                id=""
              />
              <label>i concent for my date</label>
            </div>
            <div>
              <input
                type="checkbox"
                className={styles.checkbox}
                name=""
                id=""
              />
              <label>i would like to be added</label>
            </div>
          </div>
        </form> */}
      </div>
    </section>
  );
};
export default Declare;
