import Card from "../common/Card/Card";

const heading = "This is Breakdown";
const para =
  "The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...";
const items = [
  {
    title: "The Role of Design",
    content: [
      "As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.",
      "Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It’s not quite magic, but it feels like it.",
    ],
  },
  {
    title: "Time for Change",
    content: [
      "Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world.",
      "It means introducing principles of sustainability, circularity and - ultimately - regenerative design into our practice to recapture and repurpose resources and materials.",
      "This means measuring and actively reducing the greenhouse gas emissions and resource use linked to our designs.",
      "And it means acting systemically - seeing the bigger picture and working with others to sharpen design’s incredible capacity to influence and accelerate climate repair and justice.",
    ],
  },
  {
    title: "Act with Urgency",
    content: [
      "We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action - meaningful steps that can begin to connect what we know to what we do.",
      "This is the most important brief of our lives. Join us as we begin to design a climate-positive future.",
    ],
  },
];

const Breakdown: React.FC = () => {
  return <Card items={items} para={para} heading={heading} />;
};
export default Breakdown;
