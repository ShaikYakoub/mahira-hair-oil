import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import IngredientsDoubleScroll from "@/components/IngredientsDoubleScroll";
import FooterTraditional from "@/components/FooterTraditional";
import BenefitsSectionTraditional from "@/components/BenefitsSectionTraditional";
import FadeIn from "@/components/FadeIn";
import { kadapaLocations, kadapaKeywords } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Products | Mahira Herbals",
  description:
    "Buy Mahira Herbal Hair Oil online. Traditional Ayurvedic hair oil delivered across Kadapa, Proddatur, Pulivendula, Rajampet and all of Kadapa district, Andhra Pradesh.",
  keywords: [
    "Mahira Herbal Hair Oil",
    "buy herbal hair oil online Kadapa",
    "Ayurvedic hair oil Andhra Pradesh",
    "hair oil delivery Kadapa district",
    ...kadapaKeywords,
  ],
};

// 1. Local Business Schema (Perfect for Kadapa SEO)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mahira Herbals",
  description:
    "Traditional Ayurvedic herbal hair oil and shampoo brand based in Kadapa district, Andhra Pradesh.",
  email: "mahiraherbalhairoil@gmail.com",
  telephone: "+916304449747",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  areaServed: kadapaLocations.map((loc) => ({ "@type": "City", name: loc })),
  url: "https://mahiraherbals.com",
  sameAs: [
    "https://www.instagram.com/mahirahairoil",
    "http://www.youtube.com/@MahiraHerbalhairoil",
  ],
};

const ingredientsList = [
  { name: "Amla", desc: "Indian Gooseberry", img: "/images/amla.webp" },
  {
    name: "Fenugreek",
    desc: "Golden seed for resilience",
    img: "/images/fenugreek.webp",
  },
  { name: "Neem", desc: "Ancient scalp purifier", img: "/images/neem.webp" },
  {
    name: "Moringa",
    desc: "Drumstick leaves for strength",
    img: "/images/moringa.webp",
  },
  {
    name: "Aloe Vera",
    desc: "Cooling and hydrating balm",
    img: "/images/aloe.webp",
  },
  {
    name: "Jatamansi",
    desc: "Spikenard for calming",
    img: "/images/jatamansi.webp",
  },
  {
    name: "Bhringraj",
    desc: "King of herbs for hair",
    img: "/images/bhringraj.webp",
  },
  {
    name: "Rosemary",
    desc: "Stimulates hair follicles",
    img: "/images/rosemary.webp",
  },
  {
    name: "Haritaki",
    desc: "Nourishes and protects",
    img: "/images/haritaki.webp",
  },
  { name: "Henna", desc: "Natural conditioning", img: "/images/henna.webp" },
  {
    name: "Vetiver",
    desc: "Cooling root extract",
    img: "/images/vetiver.webp",
  },
  {
    name: "Flax Seeds",
    desc: "Rich in Omega-3",
    img: "/images/flax-seeds.webp",
  },
  {
    name: "Almonds",
    desc: "Deep moisture and shine",
    img: "/images/almonds.webp",
  },
  {
    name: "Hibiscus",
    desc: "Flower of beauty and softness",
    img: "/images/hibiscus.webp",
  },
  {
    name: "Coconut & Castor",
    desc: "Nourishing base oils",
    img: "/images/coconut.webp",
  },
];

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  mrp: number;
  discount: string;
  description: string;
  keyIngredients: string[];
  benefits: string[];
};

const individualProducts: Product[] = [
  {
    id: "hair-oil-200",
    name: "Herbal Hair Oil – 200ml",
    image: "/images/hair-oil-200ml.webp",
    price: 479,
    mrp: 599,
    discount: "20% OFF",
    description:
      "Nourishes scalp and strengthens roots with a traditional herbal oil blend.",
    keyIngredients: ["Amla", "Hibiscus", "Neem", "Coconut & Castor"],
    benefits: [
      "Promotes healthier hair growth",
      "Reduces hair fall and breakage",
      "Soothes dry scalp",
      "Strengthens roots naturally",
    ],
  },
  {
    id: "hair-oil-500",
    name: "Herbal Hair Oil – 500ml",
    image: "/images/hair-oil-500ml.webp",
    price: 1199,
    mrp: 1499,
    discount: "20% OFF",
    description:
      "Value pack for regular users and families who follow a weekly oil ritual.",
    keyIngredients: ["Amla", "Hibiscus", "Fenugreek", "Coconut & Castor"],
    benefits: [
      "Long-term nourishment support",
      "Helps improve softness and shine",
      "Supports stronger roots",
      "Ideal for routine family use",
    ],
  },
  {
    id: "shampoo-regular",
    name: "Mahira Herbal Shampoo – 200ml",
    image: "/images/shampoo-100ml.webp",
    price: 359,
    mrp: 399,
    discount: "10% OFF",
    description:
      "Gentle daily cleanser that removes buildup without stripping natural oils.",
    keyIngredients: ["Reetha", "Shikakai", "Amla", "Rosemary"],
    benefits: [
      "Cleanses scalp gently",
      "Maintains natural moisture balance",
      "Leaves hair soft and manageable",
      "Suitable for frequent use",
    ],
  },
  {
    id: "shampoo-100",
    name: "Mahira Herbal Shampoo – 100ml",
    image: "/images/shampoo-100ml.webp",
    price: 199,
    mrp: 249,
    discount: "20% OFF",
    description: "Gentle daily cleanser in a smaller pack.",
    keyIngredients: ["Reetha", "Shikakai", "Amla", "Rosemary"],
    benefits: [
      "Cleanses scalp gently",
      "Maintains natural moisture balance",
      "Leaves hair soft and manageable",
      "Suitable for frequent use",
    ],
  },
  {
    id: "onion-oil",
    name: "Onion Hair Oil – 200ml",
    image: "/images/onion-hair-oil.webp",
    price: 399,
    mrp: 499,
    discount: "20% OFF",
    description:
      "Specialty oil formulated to support weaker roots and visible thinning.",
    keyIngredients: ["Onion", "Fenugreek", "Kalonji", "Curry Leaves"],
    benefits: [
      "Supports stronger roots",
      "Helps reduce hair fall",
      "Encourages fuller-looking hair",
      "Nourishes scalp deeply",
    ],
  },
  {
    id: "bhringraj-oil",
    name: "Bhringraj Hair Oil – 200ml",
    image: "/images/bhringraj-hair-oil.webp",
    price: 399,
    mrp: 499,
    discount: "20% OFF",
    description:
      "Classical growth-focused herbal oil centered on Bhringraj and supportive herbs.",
    keyIngredients: ["Bhringraj", "Amla", "Kalonji", "Moringa"],
    benefits: [
      "Supports healthy growth cycle",
      "Helps strengthen weak strands",
      "Improves scalp nourishment",
      "Adds natural softness",
    ],
  },
  {
    id: "neem-shampoo",
    name: "Neem Herbal Shampoo – 200ml",
    image: "/images/neem-shampoo.webp",
    price: 314,
    mrp: 349,
    discount: "10% OFF",
    description:
      "Neem-led cleanser designed for flaky, itchy scalp with a gentle herbal wash base.",
    keyIngredients: ["Reetha", "Shikakai", "Neem", "Aloe Vera"],
    benefits: [
      "Helps reduce dandruff flakes",
      "Purifies scalp gently",
      "Soothes irritation",
      "Maintains clean, balanced scalp",
    ],
  },
];

const comboOffers = [
  {
    id: "combo-500",
    name: "Herbal Hair Oil Combo – 500ml + Free 200ml Shampoo",
    image: "/images/500ml-combo-offer.webp",
    mrp: 1499,
    note: "Sold at MRP",
    description:
      "Includes 500ml Hair Oil and a complimentary 200ml Mahira Herbal Shampoo.",
    link: "https://wa.me/916304449747?text=Hi%20I%20want%20to%20order%20Mahira%20Hair%20Oil%20500ml%20Combo",
  },
  {
    id: "combo-200",
    name: "Herbal Hair Oil Combo – 200ml + Free 100ml Shampoo",
    image: "/images/200ml-combo-offer.webp",
    mrp: 599,
    note: "Sold at MRP",
    description:
      "Includes 200ml Hair Oil and a complimentary 100ml Mahira Herbal Shampoo.",
    link: "https://wa.me/916304449747?text=Hi%20I%20want%20to%20order%20Mahira%20Hair%20Oil%20200ml%20Combo",
  },
];

// 2. Dynamic ItemList Schema (auto-generates SEO tags for every product)
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: individualProducts.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      image: `https://mahiraherbals.com${product.image}`,
      description: product.description,
      brand: { "@type": "Brand", name: "Mahira Herbals" },
      offers: {
        "@type": "Offer",
        url: "https://mahiraherbals.com/products",
        priceCurrency: "INR",
        price: product.price.toString(),
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    },
  })),
};

export default function ProductsPage() {
  return (
    <main className="text-brown relative overflow-hidden">
      <Hero
        heading={<>Our Products</>}
        subheading={
          <>
            Discover Mahira&apos;s handcrafted Ayurvedic hair oil and shampoo,
            made in small batches using traditional village methods and pure,
            local ingredients.
          </>
        }
        rightImage="/images/hair-oil-500ml.webp"
        rightAlt="Mahira Herbal Hair Oil 500ml"
      >
        <a
          href="https://wa.me/916304449747?text=Hi%20I%20want%20to%20order%20Mahira%20products"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-mutedGreen text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
        >
          Order on WhatsApp
        </a>
      </Hero>

      {/* Injected the Dynamic Schemas here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <section className="py-16 md:py-20 px-6 bg-[#f7ecd7] border-b-4 border-gold/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-4">
            Combo Offers
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-center text-base font-semibold text-deepBrown mb-10">
            Combo offers are sold at MRP.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comboOffers.map((combo) => (
              <div
                key={combo.id}
                className="bg-[#F8EFE3] border border-gold/30 rounded-2xl overflow-hidden shadow-md flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full aspect-[4/3] bg-white border-b border-gold/20">
                  <Image
                    src={combo.image}
                    alt={combo.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif text-brown text-center mb-2">
                    {combo.name}
                  </h3>
                  <div className="flex justify-center items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-green-800">
                      ₹{combo.mrp}
                    </span>
                    <span className="text-xs font-bold text-brown bg-gold/20 px-2 py-1 rounded-full">
                      {combo.note}
                    </span>
                  </div>
                  <div className="bg-[#F8EFE3] border border-gold/50 rounded-md p-2 mb-4 text-center text-sm text-deepBrown">
                    {combo.description}
                  </div>
                  <a
                    href={combo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-mutedGreen text-white py-3 rounded-full font-semibold hover:opacity-90 transition mt-auto"
                  >
                    Order Combo on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {individualProducts.map((product, index) => (
        <section
          key={product.id}
          className={`py-16 md:py-24 border-b-4 border-gold/30 ${index % 2 === 1 ? "bg-[#F8EFE3]" : ""}`}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-2">
                {product.name}
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mb-8" />
            </div>
            <div
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}
            >
              <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#d9c3ab] bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <p className="text-deepBrown text-base md:text-lg mb-4">
                  {product.description}
                </p>

                <h3 className="text-lg font-semibold text-brown mb-2">
                  Key Ingredients
                </h3>
                <ul className="list-disc pl-6 text-deepBrown mb-4 space-y-1 text-sm">
                  {product.keyIngredients.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold text-brown mb-2">
                  Benefits
                </h3>
                <ul className="list-disc pl-6 text-deepBrown mb-5 space-y-1 text-sm">
                  {product.benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-3 justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-green-800">
                      ₹{product.price}
                    </span>
                    <span className="text-sm line-through text-gray-500">
                      ₹{product.mrp}
                    </span>
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {product.discount}
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/916304449747?text=Hi%20I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-mutedGreen text-white px-4 py-2 text-sm md:px-8 md:py-3 rounded-full font-semibold hover:opacity-90 transition"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-20 px-6 bg-[#f7ecd7] border-b-4 border-gold/30">
        <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-6">
          Key Ingredients
        </h2>
        <p className="text-center text-lg font-serif italic text-brown mb-10 max-w-2xl mx-auto">
          “Each drop is a hymn to nature—herbs gathered at dawn, prepared with
          reverence.”
        </p>
        <IngredientsDoubleScroll ingredients={ingredientsList} />
      </section>

      <FadeIn>
        <BenefitsSectionTraditional />
      </FadeIn>
      <FooterTraditional />
    </main>
  );
}
