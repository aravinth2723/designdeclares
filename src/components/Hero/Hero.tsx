import styles from "./Hero.module.css";

const Hero: React.FC = () => {
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
        <div className={styles.clildOne}>
          <div>Menu</div>
          <div>+</div>
        </div>
        <div>Declare Now</div>
      </div>
    </section>
  );
};
export default Hero;
