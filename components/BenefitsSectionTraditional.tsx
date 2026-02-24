import { Leaf, Heart, Sprout, ShieldCheck } from "lucide-react";

const benefits = [
  {
    title: "Handpicked Herbal Purity",
    description:
      "Our oils and shampoos begin with herbs gathered at dawn, sun-dried and ground by hand, just as our ancestors did.",
    icon: Leaf,
  },
  {
    title: "Ayurvedic Lineage",
    description:
      "Each formula is a living tradition, passed from elder to child, blending wisdom and care in every drop.",
    icon: Heart,
  },
  {
    title: "Rooted Nourishment",
    description:
      "We nurture the scalp and roots, restoring balance and strength for hair that flourishes naturally.",
    icon: Sprout,
  },
  {
    title: "Pure & Honest Craft",
    description:
      "No chemicals, no shortcuts—only the slow, mindful preparation that honors both nature and you.",
    icon: ShieldCheck,
  },
];

export default function BenefitsSectionTraditional() {
  return (
    <section className="py-20 md:py-28 bg-[#f7ecd7] border-b-4 border-gold/30">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-brown text-center mb-8 tracking-tight">
          Why Choose Mahira
        </h2>
        <p className="text-center text-lg md:text-xl font-serif italic text-brown mb-14 max-w-2xl mx-auto">
          “Our craft is a prayer, our process a ritual—each bottle a promise
          from our family to yours.”
        </p>
        <div className="flex flex-col gap-12">
          {benefits.map(({ title, description, icon: Icon }, idx) => (
            <div key={title} className="flex flex-col items-center relative">
              <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/40 mb-4 shadow-gold/10 shadow-md">
                <Icon className="text-gold" size={44} />
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-brown mb-2 tracking-tight text-center">
                {title}
              </h3>
              <p className="text-deepBrown text-lg leading-relaxed text-center max-w-xl mx-auto mb-2">
                {description}
              </p>
              {idx < benefits.length - 1 && (
                <div className="w-12 h-8 flex items-center justify-center my-2">
                  <svg
                    width="48"
                    height="16"
                    viewBox="0 0 48 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8 Q24 20 46 8"
                      stroke="#C49A3A"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
