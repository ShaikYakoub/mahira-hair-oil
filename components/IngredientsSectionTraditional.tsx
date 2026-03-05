import Image from "next/image";

const ingredientsList = [
  {
    name: "Amla",
    desc: "Indian Gooseberry",
    img: "/images/amla.jpg",
  },
  {
    name: "Fenugreek",
    desc: "Golden seed for resilience",
    img: "/images/fenugreek.jpg",
  },
  {
    name: "Neem",
    desc: "Ancient scalp purifier",
    img: "/images/neem.jpg",
  },
  {
    name: "Moringa",
    desc: "Drumstick leaves for strength",
    img: "/images/moringa.jpg",
  },
  {
    name: "Aloe Vera",
    desc: "Cooling and hydrating balm",
    img: "/images/aloe.jpg",
  },
  {
    name: "Jatamansi",
    desc: "Spikenard for calming",
    img: "/images/jatamansi.jpg",
  },
  {
    name: "Bhringraj",
    desc: "King of herbs for hair",
    img: "/images/bhringraj.jpg",
  },
  {
    name: "Rosemary",
    desc: "Stimulates hair follicles",
    img: "/images/rosemary.jpg",
  },
  {
    name: "Haritaki",
    desc: "Nourishes and protects",
    img: "/images/haritaki.jpg",
  },
  {
    name: "Henna",
    desc: "Natural conditioning",
    img: "/images/henna.jpg",
  },
  {
    name: "Vetiver",
    desc: "Cooling root extract",
    img: "/images/vetiver.jpg",
  },
  {
    name: "Flax Seeds",
    desc: "Rich in Omega-3",
    img: "/images/flax-seeds.jpg",
  },
  {
    name: "Almonds",
    desc: "Deep moisture and shine",
    img: "/images/almonds.jpg",
  },
  {
    name: "Hibiscus",
    desc: "Flower of beauty and softness",
    img: "/images/hibiscus.jpg",
  },
  {
    name: "Coconut & Castor",
    desc: "Nourishing base oils",
    img: "/images/coconut.jpg",
  },
];

// Duplicate for seamless infinite loop
const doubled = [...ingredientsList, ...ingredientsList];

export default function IngredientsSectionTraditional() {
  return (
    <section className="py-16 md:py-20 bg-[#EFE1CF] border-b-4 border-gold/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-3xl md:text-5xl font-serif text-brown text-center mb-4">
          Natural Ingredients
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-6" />
        <p className="text-center text-lg font-serif italic text-brown max-w-3xl mx-auto">
          &ldquo;Our signature oils are born from a sacred, slow-infused blend
          of 29 traditional herbs. Here are the core elements we gather at dawn
          to bring you pure, uncompromised care.&rdquo;
        </p>
      </div>

      {/* Infinite horizontal scroll */}
      <div className="relative">
        <div className="flex gap-5 w-max animate-ingredient-scroll">
          {doubled.map((item, index) => (
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
    </section>
  );
}
