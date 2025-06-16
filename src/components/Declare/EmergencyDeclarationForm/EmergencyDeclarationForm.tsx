import { useState } from "react";
import styles from "./EmergencyDeclarationForm.module.css";

const checkboxGroup = [
  { name: "As a business", value: "business" },
  { name: "As an individual", value: "individual" },
  { name: "As a public institution", value: "publicInstitution" },
  { name: "As a team or department", value: "teamDepartment" },
];

const EmergencyDeclarationForm = () => {
  const [declarationType, setDeclarationType] = useState("");
  const [business, setBusiness] = useState("");
  const [teamName, setTeamName] = useState("");
  const [individual, setIndividual] = useState("");
  const [institution, setInstitution] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("United Kingdom");
  const [discipline, setDiscipline] = useState("");
  const [email, setEmail] = useState("");
  const [whyDeclaring, setWhyDeclaring] = useState("");
  const [consent, setConsent] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      declarationType,
      website,
      country,
      discipline,
      email,
      whyDeclaring,
      consent,
      newsletter,
    });
    alert("Form submitted! (Check console for data)");
  };

  return (
    <div className={styles.emergencyFormContainer}>
      <h1 className={styles.formHeading}>I am Declaring Emergency</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.checkboxGroup}>
          {checkboxGroup.map(({ name, value }) => (
            <label className={styles.checkboxLabel}>
              <input
                type="radio"
                name="declarationType"
                value={value}
                checked={declarationType === value}
                onChange={(e) => setDeclarationType(e.target.value)}
              />
              {name}
            </label>
          ))}
        </div>

        {declarationType === "individual" && (
          <div className={styles.formField}>
            <input
              type="text"
              id="individualName"
              placeholder="Individual Name:*"
              value={individual}
              onChange={(e) => setIndividual(e.target.value)}
              required
            />
          </div>
        )}

        {(declarationType === "business" ||
          declarationType === "teamDepartment") && (
          <div className={styles.formField}>
            <input
              type="text"
              id="businessName"
              placeholder="Business Name:*"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              required
            />
          </div>
        )}

        {declarationType === "publicInstitution" && (
          <div className={styles.formField}>
            <input
              type="text"
              id="institutionName"
              placeholder="Institution Name:*"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              required
            />
          </div>
        )}

        {declarationType === "teamDepartment" && (
          <div className={styles.formField}>
            <input
              type="text"
              id="teamName"
              placeholder="Team Name:*"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>
        )}

        <div className={styles.formField}>
          <input
            type="url"
            id="website"
            placeholder="Website:*"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
        </div>

        <div className={styles.formField}>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="United Kingdom">United Kingdom</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
          </select>
        </div>

        <div className={styles.formField}>
          <select
            id="discipline"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            required
          >
            <option value="">Select a discipline</option>
            <option value="architecture">Architecture</option>
            <option value="graphicDesign">Graphic Design</option>
            <option value="productDesign">Product Design</option>
            <option value="webDesign">Web Design</option>
            {/* Add more disciplines as needed */}
          </select>
        </div>

        <div className={styles.formField}>
          <input
            type="email"
            id="email"
            placeholder="Email:*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.formField}>
          <textarea
            id="whyDeclaring"
            rows={5}
            placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares."
            value={whyDeclaring}
            onChange={(e) => setWhyDeclaring(e.target.value)}
          ></textarea>
        </div>

        <div className={styles.consentSection}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />
            I consent for my data to be used for the purpose of the Declaration,
            and for my name and reason for joining to be used in the promotion
            of the Declaration on this site and across our social channels.
          </label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />
            I would like to be added to the Design Declares! newsletter and
            receive further updates.
          </label>
        </div>

        <p className={styles.privacyPolicy}>View our Privacy Policy</p>

        <button type="submit" className="primary-btn">
          Declare Emergency Now
        </button>
      </form>
    </div>
  );
};

export default EmergencyDeclarationForm;
