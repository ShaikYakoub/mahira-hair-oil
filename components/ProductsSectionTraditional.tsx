import ProductCardTraditional from "./ProductCardTraditional";

const products = [
  {
    title: "Herbal Hair Oil – 200ml",
    image: "/images/hair-oil-200ml.png",
    subtitle: "Nourishes scalp and strengthens roots.",
  },
  {
    title: "Herbal Hair Oil – 500ml",
    image: "/images/hair-oil-500ml.png",
    subtitle: "For long-term traditional hair care.",
  },
  {
    title: "Herbal Shampoo – 100ml",
    image: "/images/shampoo-100ml.png",
    subtitle: "Gentle cleansing with herbal extracts.",
  },
];

export default function ProductsSectionTraditional() {
  return (
    <section className="py-16 md:py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-brown text-center mb-16">
          Our Products
        </h2>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {products.map((product) => (
            <ProductCardTraditional key={product.title} {...product} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl md:text-2xl font-serif italic text-brown max-w-2xl mx-auto bg-[#f7ecd7] border-l-4 border-gold/60 px-6 py-4 rounded-lg shadow-gold/10 shadow-sm">
            “In the fullness of time, as the seasons turn and herbs awaken, new
            treasures shall join our humble collection.
            <br className="hidden md:block" /> Stay close, for more gifts from
            our tradition are soon to arrive.”
          </p>
        </div>
      </div>
    </section>
  );
}
