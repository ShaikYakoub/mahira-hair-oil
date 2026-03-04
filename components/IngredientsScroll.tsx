import Image from "next/image";
import React from "react";

export type Ingredient = {
  name: string;
  desc: string;
  img: string;
};

interface IngredientsScrollProps {
  ingredients: Ingredient[];
  startFrom?: string;
  direction?: "left" | "right";
  double?: boolean;
  className?: string;
}

export default function IngredientsScroll({
  ingredients,
  startFrom,
  direction = "left",
  double = true,
  className = "",
}: IngredientsScrollProps) {
  let list = ingredients;
  if (startFrom) {
    const idx = ingredients.findIndex((i) => i.name === startFrom);
    if (idx !== -1) {
      list = [...ingredients.slice(idx), ...ingredients.slice(0, idx)];
    }
  }
  if (double) {
    list = [...list, ...list];
  }
  const animationClass =
    direction === "left"
      ? "animate-ingredient-scroll"
      : "animate-ingredient-scroll-reverse";
  return (
    <div className={`relative ${className}`}>
      <div className={`flex gap-5 w-max ${animationClass}`}>
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#F8EFE3] border border-[#e2cdb7] rounded-xl overflow-hidden shadow-sm w-44 flex-shrink-0 hover:shadow-md transition-shadow"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={item.img}
                alt={item.name}
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
            <div className="p-3 text-center flex-1">
              <h3 className="font-serif text-base text-brown leading-tight mb-1">
                {item.name}
              </h3>
              <p className="text-deepBrown text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
