import { useState } from "react";
import styles from "./Hero.module.css";
import {
  FaHome,
  FaInfoCircle,
  FaNewspaper,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const menuItem = [
  { name: "Home", icon: <FaHome /> },
  { name: "About", icon: <FaInfoCircle /> },
  { name: "Latest", icon: <FaNewspaper /> },
  { name: "Contact", icon: <FaEnvelope /> },
  { name: "Choose Global Chapter", icon: <FaGlobe /> },
];

const Hero: React.FC = () => {
  const [isMenuToggle, setMenuToggle] = useState(false);
  function ontoggle() {
    setMenuToggle(!isMenuToggle);
  }

  return (
    <section className={styles.container}>
      <div className={styles.heroText}>
        DESIGN
        <br />
        DECLARES
        <br />
        <span className={styles.highlight}>UK</span>
      </div>
      <p className={styles.para}>
        Design Declares is a growing group of designers, design studios,
        agencies and institutions here to declare a climate and ecological
        emergency. As part of the global declaration movement, we commit to
        harnessing the tools of our industry to reimagine, rebuild and heal our
        world.
      </p>
      <div className={styles.actionBtn}>
        <div className={styles.clildOne} onClick={ontoggle}>
          <div>Menu</div>
          <div>{isMenuToggle ? "x" : "+"}</div>
        </div>
        {isMenuToggle && (
          <ul className={styles.menuItem}>
            {menuItem.map(({ name, icon }) => (
              <li>
                {icon}
                <span>{name}</span>
              </li>
            ))}
          </ul>
        )}
        <div>Declare Now</div>
      </div>
    </section>
  );
};
export default Hero;
