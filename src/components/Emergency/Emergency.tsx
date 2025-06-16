import styles from "./Emergency.module.css";

const heading = "8 Acts of Emergency";
const para =
  "What does it take to Declare? It’s accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:";
const items = [
  {
    title: "Sound the Alarm",
    content:
      "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice.",
  },
  {
    title: "Start the Journey",
    content:
      "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
  },
  {
    title: "Bring Clients with Us",
    content:
      "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.",
  },
  {
    title: "Measure What We Make",
    content:
      "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.",
  },
  {
    title: "Redefine ‘Good’",
    content:
      "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.",
  },
  {
    title: "Educate, Accelerate",
    content:
      "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.",
  },
  {
    title: "Design for Justice",
    content:
      "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.",
  },
  {
    title: "Amplify Voices for Change",
    content:
      "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.",
  },
];

const Emergency: React.FC = () => {
  return (
    <section className={`${styles.emergencyContainer} container`}>
      <h1 className="heading">{heading}</h1>
      <div>
        <p className={`${styles.para} text-animation`}>{para}</p>
        <div className={styles.card}>
          {items.map((item, i) => (
            <div key={i}>
              <h1 className={styles.heading}>
                <span>{i + 1}</span>
                {item.title}
              </h1>
              <p className={`${styles.content} text-animation`}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Emergency;
