import { useState } from "react";
import { cn } from "@/lib/utils";
import StackingCards, {
  StackingCardItem,
} from "@/components/ui/stacking-cards";
import { useEffect } from "react";
import { CustomLabsVector, InfraVector, TrainingVector } from "../../assets";

// import { TrainingVector, InfraVector, CustomLabsVector } from "@/assets";

const cards = [
  {
    bgColor: "bg-[#f8f9fa] shadow",
    title: "AI-Powered Learning & Talent Acceleration",
    description:
      "Empower your team with interactive, on-demand training courses tailored to the latest technologies and business best practices. Our SAAS platform enables seamless skill development through hands-on modules, expert-led sessions, and progress tracking—designed for enterprises aiming to upskill efficiently.",
    image: TrainingVector,
  },
  {
    bgColor: "bg-[#f8f9fa] shadow",
    title: "AI Solutions & Innovation Consulting",
    description:
      "Accelerate innovation with our Custom Labs feature—build, prototype, and test solutions in a safe, scalable cloud environment. Design unique labs, set parameters, and provide real-world simulations for your workforce. Perfect for companies needing secure, adaptive experimentation without infrastructure overhead.",
    image: CustomLabsVector,
  },
  {
    bgColor: "bg-[#f8f9fa] shadow",
    title: "Cloud-Native AI Labs & Dev Environments",
    description:
      "Leverage robust, cloud-based infrastructure to deploy, scale, and manage your enterprise applications effortlessly. Our fully managed SAAS platform delivers high availability, security, and performance—enabling your business to focus on growth rather than IT complexities.",
    image: InfraVector,
  },
];

export default function WhatWeOffer() {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(window);
  }, []);

  return (
    <div className="container mx-auto my-20">
      <h1 className=" text-center text-5xl -mb-10">What we offer</h1>
      <StackingCards
        totalCards={cards.length}
        scrollOptions={{ container: container }}
      >
        {cards.map(({ bgColor, description, image, title }, index) => {
          return (
            <StackingCardItem key={index} index={index} className="h-[700px]">
              <div
                className={cn(
                  bgColor,
                  "h-[80%] border border-gray-200/50 sm:h-[70%] flex-col sm:flex-row aspect-video px-8 py-10 flex w-11/12 rounded-3xl mx-auto relative",
                  index === 1 && "lg:flex-row-reverse",
                )}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-2xl mb-5">{title}</h3>
                  <p>{description}</p>
                </div>

                <div className="w-full sm:w-1/2 rounded-xl aspect-video relative overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className=" h-full w-full object-center"
                  />
                </div>
              </div>
            </StackingCardItem>
          );
        })}
      </StackingCards>
    </div>
  );
}
