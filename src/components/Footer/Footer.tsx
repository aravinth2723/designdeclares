import styles from "./Footer.module.css";

const contactLink = ["Contact", "Instagram", "LinkedIn", "Privacy Policy"];

const Footer: React.FC = () => {
  return (
    // <footer className={styles.footer}>
    //   <div className={styles.footerLeft}>
    //     <h1 className={styles.logo}>
    //       DESIGN
    //       <br />
    //       DECLARES
    //     </h1>
    //   </div>
    //   <div className={styles.footerMiddle}>
    //     <ul className={styles.contactLinks}>
    //       <li>Contact</li>
    //       <li>Instagram</li>
    //       <li>LinkedIn</li>
    //       <li>Privacy Policy</li>
    //     </ul>
    //   </div>
    //   <div className={styles.footerRight}>
    //     <h3>Sign up to the D! Newsletter</h3>
    //     <input
    //       type="email"
    //       placeholder="Email:*"
    //       className={styles.emailInput}
    //     />
    //     <div className={styles.checkboxGroup}>
    //       <input type="checkbox" id="subscribe" />
    //       <label htmlFor="subscribe">
    //         I would like to be added to the Design Declares! newsletter and
    //         receive further updates.
    //       </label>
    //     </div>
    //     <button className="primary-btn">Subscribe</button>
    //     <a href="#" className={styles.privacyLink}>
    //       View our Privacy Policy
    //     </a>
    //   </div>
    //   <div className={styles.footerBottom}>
    //     <p>
    //       This website has been built following low-carbon principles of web
    //       development and hosted using serverless computing, by only allocating
    //       energy when needed and on demand.
    //       <a href="#"> Learn more about our carbon footprint.</a>
    //     </p>
    //     <p>
    //       Empowered by <a href="#">Driftime®</a>
    //     </p>
    //   </div>
    // </footer>
    <footer className={styles.footer}>
      <section className={styles.footerHeader}>
        <div className={styles.logo}>
          DESIGN <br />
          DECLARES
        </div>
        <ul className={styles.contactLink}>
          {contactLink.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className={styles.contactForm}>
          <h3>Sign up to the D! Newsletter</h3>
          <form>
            <input
              type="email"
              name="contact-email"
              className={styles.contactEmail}
              placeholder="Email:*"
              required
            />
            <div className={styles.subscribe}>
              <label htmlFor="subscribe">
                <input type="checkbox" id="subscribe" required />I would like to
                be added to the Design Declares! newsletter and receive further
                updates.{" "}
              </label>
              <button className="primary-btn">Subscribe</button>
            </div>
          </form>
          <p className={styles.privacyLink}>View our Privacy Policy</p>
        </div>
      </section>
      <section className={styles.footerBottom}>
        <div>
          <p>
            This website has been built following low-carbon principles of web
            development and hosted using serverless computing, by only
            allocating energy when needed and on demand.
            <span> Learn more about our carbon footprint.</span>
          </p>
          <p>
            Empowered by <span>Driftime®</span>
          </p>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
