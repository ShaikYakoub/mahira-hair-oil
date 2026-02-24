import IngredientCardTraditional from "./IngredientCardTraditional";

const ingredients = [
  {
    title: "Amla",
    image: "/images/amla.jpg",
    description: "Strengthens hair roots and supports natural growth.",
  },
  {
    title: "Hibiscus",
    image: "/images/hibiscus.jpg",
    description: "Improves hair thickness and restores natural shine.",
  },
  {
    title: "Aloe Vera",
    image: "/images/aloe.jpg",
    description: "Soothes scalp irritation and deeply hydrates.",
  },
  {
    title: "Neem",
    image: "/images/neem.png",
    description: "Purifies the scalp and reduces dandruff.",
  },
  {
    title: "Coconut",
    image: "/images/coconut.jpg",
    description: "Nourishes and protects from dryness.",
  },
  {
    title: "Fenugreek",
    image: "/images/fenugreek.png",
    description: "Supports stronger and thicker hair strands.",
  },
];

export default function IngredientsSectionTraditional() {
  return (
    <section className="py-16 md:py-24 bg-[#EFE1CF]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-brown text-center mb-16">
          Natural Ingredients
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {ingredients.map((ingredient) => (
            <IngredientCardTraditional key={ingredient.title} {...ingredient} />
          ))}
        </div>
      </div>
    </section>
  );
}
