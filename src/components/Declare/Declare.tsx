import styles from "./Declare.module.css";
import EmergencyDeclarationForm from "./EmergencyDeclarationForm/EmergencyDeclarationForm";

const heading = "Declare Emergency Now";
const content =
  "Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.";

const Declare: React.FC = () => {
  return (
    <section className={`${styles.declareContainer} container`}>
      <h1 className="heading">{heading}</h1>
      <div>
        <p className="text-animation">{content}</p>
        <EmergencyDeclarationForm />
      </div>
    </section>
  );
};
export default Declare;
