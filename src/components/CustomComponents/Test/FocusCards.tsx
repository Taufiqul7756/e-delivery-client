"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className="flex flex-col gap-4 rounded-lg bg-white p-3 shadow-2xl"
    >
      <div
        // onMouseEnter={() => setHovered(index)}
        // onMouseLeave={() => setHovered(null)}
        className={cn(
          "relative h-60 w-full overflow-hidden rounded-lg transition-all duration-300 ease-out md:h-72",
          hovered !== null && hovered !== index && "scale-[0.98] blur-[2px]",
        )}
      >
        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 object-cover"
        />
        <div
          className={cn(
            "absolute inset-0 flex items-end bg-black/10 px-4 py-8 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-xl font-medium text-transparent md:text-2xl">
            {card.title}
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-lg font-semibold">Card Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className="rounded bg-blue-500 px-4 py-2 text-white">
          Read More
        </button>
      </div>
    </div>
  ),
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:px-8 lg:grid-cols-3">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
