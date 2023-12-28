import React from "react";
import ccinput from '../../assets/home/ccinput.jpg';
import engagewithease from '../../assets/home/engagewithease.jpg';
import quickresponse from '../../assets/home/quickresponse.jpg';
import share from '../../assets/home/share.jpg';
import Container from "../Container";
import SectionTitle from "./SectionTitle";
const items = [
  {
    id: 1,
    icon: quickresponse,
    heading: " Quick Feedback",
    text: "Use our easy-to-access SMS tool to share instant feedback on your interactions—simply text 'Happy' or 'Not Happy'",
  },
  {
    id: 2,
    icon: engagewithease,
    heading: "Engage with Ease",
    text: "Our interactive chatbot engages you in conversation, gathering detailed feedback in real-time.",
  },
  {
    id: 3,
    icon: ccinput,
    heading: "Comprehensive Input",
    text: "Share detailed comments, images, or videos via our user-friendly online portal, just like social media",
  },
  {
    id: 4,
    icon: share,
    heading: "Share Experiences",
    text: " Tag specific locations or incidents to categorize and share experiences similar to social media platforms.",
  },
];

export default function HowItWorks() {
  return (
    <section className="my-14">
      <Container>
        <SectionTitle title="how it works" />
        <div className="bg-[#D9CAB3] bg-opacity-30 px-8 py-14 rounded-md mt-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-8">
            {items.map((item) => (
              <div
                className="text-center flex flex-col items-center justify-center"
                key={item.id}
              >
                <img src={item.icon} style={{width:'150px',height:'150px'}} alt="icon" className="pb-4 w-24" />
                <h1 className="font-bold text-lg py-4">{item.heading}</h1>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
