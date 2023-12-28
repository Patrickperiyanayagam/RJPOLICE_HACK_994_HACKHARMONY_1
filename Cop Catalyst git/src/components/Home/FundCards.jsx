import cinvolve from '../../assets/home/cinvolve.jpg';
import equalty from '../../assets/home/equalty.jpg';
import pimpact from '../../assets/home/pimpact.jpg';
import tpolicy from '../../assets/home/tpolicy.jpg';
import FundCard from "./FundCard";

const cards = [
  {
    id: 1,
    topic: "Transparent Policing: - Open communication builds trust, fostering transparency in police operations and reinforcing accountability within the community.",
    image: tpolicy,
    circleText: "Discover your match",
  },
  {
    id: 2,
    topic:
      " Community Involvement:- Active participation strengthens community bonds, creating a united front for safer neighborhoods and policing.",
    image: cinvolve,
    circleText: "LOGIN TO MATCH",
  },
  {
    id: 3,
    topic:
      "Positive Impact:- Your feedback fuels positive change, shaping law enforcement practices to align with community expectations.",
    image: pimpact,
    circleText: "DISCOVER HOW MUCH YOU MATCH",
  },
  {
    id: 4,
    topic: "Equality and Fairness:- Advocate for just and equal treatment by sharing experiences, contributing to fair and unbiased policing.",
    image: equalty,
    circleText: "DISCOVER HOW MUCH YOU MATCH",
  }
  // {
  //   id: 5,
  //   price: "234,378,123",
  //   date: "14.05.24",
  //   topic: "Ms. Afrodita la Carasco application process specialist",
  //   image: funds_5,
  //   circleText: "85% match",
  // },
  // {
  //   id: 6,
  //   price: "103,000",
  //   date: "14.05.24",
  //   topic: "Mr. Dubi Gerber former EU application evaluator",
  //   image: funds_6,
  //   circleText: "95% match",
  // },
  // {
  //   id: 7,
  //   price: "25,000,000",
  //   date: "14.05.24",
  //   topic:
  //     "Initiative Proposition - Creating AI driven buses for a better connected Europe. Needed expertise in AI",
  //   image: funds_7,
  //   circleText: "91% match",
  // },
  // {
  //   id: 8,
  //   price: "3,120,000",
  //   date: "14.05.24",
  //   topic: "Program life us expanding its offers for call for proposals",
  //   image: funds_8,
  //   circleText: "90% match",
  // },
];

export default function FundCards() {
  return (
    <article className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
      {cards.map((card) => (
        <FundCard key={card.id} card={card} />
      ))}
    </article>
  );
}
