"use client";
import Image from "next/image";
import IngredientsDoubleScroll from "@/components/IngredientsDoubleScroll";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
function TestimonialsSlider() {
  const testimonials = [
    {
      img: "/images/testimonial-1.webp",
      name: "Ramesh, Pune",
      text: "The oil and shampoo combo revived my hair. It feels blessed and full of life.",
      description:
        "Perfect for families. My hair is softer and healthier every day.",
    },
    {
      img: "/images/testimonial-2.webp",
      name: "Anita, Delhi",
      text: "Mahira helped my thinning hair grow back. The fragrance is wonderful!",
      description:
        "I never thought I’d see new hair. The oil is gentle and smells divine.",
    },
    {
      img: "/images/testimonial-3.webp",
      name: "Vikram, Mumbai",
      text: "After a month, my hair color got richer. Even my barber noticed!",
      description:
        "The natural ingredients really work. My hair feels strong and vibrant.",
    },
    {
      img: "/images/testimonial-4.webp",
      name: "Priya, New York",
      text: "I gifted Mahira oil abroad. Everyone loves the traditional touch.",
      description: "Friends overseas appreciate the ritual and purity.",
    },
    {
      img: "/images/testimonial-5.webp",
      name: "Suresh, Chennai",
      text: "Using Mahira is now a ritual in my home. Brings peace and joy.",
      description: "The oil brings calm and happiness to our family.",
    },
    {
      img: "/images/neem.webp",
      name: "Meena, Jaipur",
      text: "My scalp feels nourished and healthy. No more dryness!",
      description: "Neem’s power soothes and balances my scalp.",
    },
    {
      img: "/images/argan.webp",
      name: "Arjun, Bengaluru",
      text: "The shine and strength are unmatched. I recommend it to all my friends.",
      description: "Argan’s richness gives my hair a beautiful glow.",
    },
    {
      img: "/images/rosemary.webp",
      name: "Fatima, Hyderabad",
      text: "The herbal blend is perfect for my sensitive scalp. No irritation, just results.",
      description: "Rosemary and herbs make my hair feel fresh and clean.",
    },
    {
      img: "/images/hair-oil-200ml.webp",
      name: "Deepak, Lucknow",
      text: "I use the oil every other day. My hair is thicker and fuller.",
      description: "The ritual brings visible results. Highly recommended.",
    },
    {
      img: "/images/shampoo-100ml.webp",
      name: "Sunita, Kolkata",
      text: "The shampoo cleanses gently and leaves my hair soft.",
      description: "Perfect for daily use. My hair feels light and healthy.",
    },
  ];
  const cards = [...testimonials, ...testimonials];
  return (
    <div className="relative overflow-hidden w-full max-w-full mx-auto">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonials-track {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        .testimonials-track:hover { animation-play-state: paused; }
      `}</style>
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-12 md:w-24 z-10"
        style={{
          background: "linear-gradient(to right, #f7ecd7 80%, transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-12 md:w-24 z-10"
        style={{
          background: "linear-gradient(to left, #f7ecd7 80%, transparent)",
        }}
      />
      <div className="testimonials-track flex gap-8 w-max">
        {cards.map((t, i) => (
          <div
            key={i}
            className="bg-[#f9f3e7] border-2 border-gold/60 rounded-2xl shadow-gold/10 shadow-lg flex flex-col items-center p-4 font-serif w-full max-w-xs min-w-[70vw] sm:min-w-[220px] sm:max-w-[180px] md:min-w-[320px] md:max-w-[320px]"
            style={{ flex: "0 0 auto" }}
          >
            <Image
              src={t.img}
              alt={t.name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full border-2 border-gold/40 mb-4 object-cover"
              loading="lazy"
            />
            <div className="text-brown text-lg md:text-xl text-center mb-4 italic">
              &ldquo;{t.text}&rdquo;
            </div>
            <div className="text-deepBrown text-base md:text-lg text-center mb-4">
              {t.description}
            </div>
            <div className="text-gold text-base font-semibold">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
import Link from "next/link";
import StorySection from "@/components/StorySection";
import BenefitsSectionTraditional from "@/components/BenefitsSectionTraditional";
import FooterTraditional from "@/components/FooterTraditional";
import FadeIn from "@/components/FadeIn";

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
    img: "/images/Moringa.webp",
  },
  {
    name: "Aloe Vera",
    desc: "Cooling and hydrating balm",
    img: "/images/aloe.webp",
  },
  {
    name: "Jatamansi",
    desc: "Spikenard for calming",
    img: "/images/Jatamansi.webp",
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
    img: "/images/Haritaki.webp",
  },
  { name: "Henna", desc: "Natural conditioning", img: "/images/Henna.webp" },
  {
    name: "Vetiver",
    desc: "Cooling root extract",
    img: "/images/Vetiver.webp",
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
const allProducts = [
  {
    id: "base-500",
    category: "Signature Blend",
    name: "Mahira Herbal Hair Oil – 500ml",
    mrp: 1499,
    price: 1199,
    discount: "20% OFF",
    offer: "🎁 FREE 200ml Regular Shampoo (Worth ₹399)",
    img: "/images/hair-oil-500ml.webp",
  },
  {
    id: "base-200",
    category: "Signature Blend",
    name: "Mahira Herbal Hair Oil – 200ml",
    mrp: 599,
    price: 479,
    discount: "20% OFF",
    offer: "🎁 FREE 100ml Regular Shampoo (Worth ₹199)",
    img: "/images/hair-oil-200ml.webp",
  },
  {
    id: "onion-oil",
    category: "Specialty Oil",
    name: "Onion Hair Oil – 200ml",
    mrp: 499,
    price: 399,
    discount: "20% OFF",
    offer: "Anti-Hairfall Formula",
    img: "/images/onion-hair-oil.webp",
  },
  {
    id: "bhringraj-oil",
    category: "Specialty Oil",
    name: "Bhringraj Hair Oil – 200ml",
    mrp: 499,
    price: 399,
    discount: "20% OFF",
    offer: "Hair Growth & Root Strengthening",
    img: "/images/bhringraj-hair-oil.webp",
  },
  {
    id: "shampoo-regular",
    category: "Herbal Cleanser",
    name: "Mahira Herbal Shampoo – 200ml",
    mrp: 399,
    price: 359,
    discount: "10% OFF",
    offer: "Anti-Hairfall & Smooth-Silky",
    img: "/images/shampoo-100ml.webp",
  },
  {
    id: "shampoo-100",
    category: "Herbal Cleanser",
    name: "Mahira Herbal Shampoo – 100ml",
    mrp: 249,
    price: 199,
    discount: "20% OFF",
    offer: "Gentle daily cleanser",
    img: "/images/shampoo-100ml.webp",
  },
  {
    id: "shampoo-neem",
    category: "Herbal Cleanser",
    name: "Neem Herbal Shampoo – 200ml",
    mrp: 349,
    price: 314,
    discount: "10% OFF",
    offer: "Anti-Dandruff Formula",
    img: "/images/neem-shampoo.webp",
  },
];

const comboOffers = [
  {
    id: "combo-500",
    name: "Herbal Hair Oil Combo – 500ml + Free 200ml Shampoo",
    mrp: 1499,
    tag: "Sold at MRP",
    img: "/images/500ml-combo-offer.webp",
    description:
      "Includes 500ml Hair Oil and a complimentary 200ml Regular Shampoo.",
  },
  {
    id: "combo-200",
    name: "Herbal Hair Oil Combo – 200ml + Free 100ml Shampoo",
    mrp: 599,
    tag: "Sold at MRP",
    img: "/images/200ml-combo-offer.webp",
    description:
      "Includes 200ml Hair Oil and a complimentary 100ml Regular Shampoo.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FadeIn>
        <StorySection />
      </FadeIn>
      <FadeIn>
        <section className="py-16 md:py-20 bg-[#EFE1CF] border-b-4 border-gold/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-10">
            <h2 className="text-3xl md:text-5xl font-serif text-brown text-center mb-4">
              Natural Ingredients
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6" />
            <p className="text-center text-lg font-serif italic text-brown max-w-3xl mx-auto">
              &ldquo;Our signature oils are born from a sacred, slow-infused
              blend of 29 traditional herbs.&rdquo;
            </p>
          </div>
          <IngredientsDoubleScroll ingredients={ingredientsList} />
        </section>
      </FadeIn>
      <FadeIn>
        <section
          id="individual-products"
          className="py-20 md:py-28 bg-[#f7ecd7] border-b-4 border-gold/30"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-brown mb-4">
                Individual Products
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6" />
              <p className="text-deepBrown text-lg max-w-2xl mx-auto">
                Experience the power of traditional village methods.{" "}
                <span className="font-bold text-green-700">Free Shipping</span>{" "}
                on all orders!
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {allProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#F8EFE3] border border-gold/30 rounded-2xl overflow-hidden shadow-md flex flex-col hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative w-full aspect-square bg-white border-b border-gold/20">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                      {product.discount}
                    </div>
                  </div>
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider mb-2">
                      {product.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-serif text-brown mb-3 leading-tight">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xl md:text-2xl font-bold text-green-800">
                        ₹{product.price}
                      </span>
                      <span className="text-sm line-through text-gray-500">
                        ₹{product.mrp}
                      </span>
                    </div>
                    <div className="bg-[#F8EFE3] border border-gold/50 rounded-md p-2 mb-4 text-xs md:text-sm text-deepBrown font-medium text-center">
                      Individual purchase offer
                    </div>
                    <div className="mt-auto">
                      <a
                        href={`https://wa.me/916304449747?text=Hi%20I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-mutedGreen text-white py-2 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-opacity-90 transition-colors"
                      >
                        Order on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10 md:mt-12">
              <Link
                href="/products"
                className="inline-block border-2 border-brown text-brown px-6 py-2 md:px-8 md:py-3 rounded-full font-serif text-base md:text-lg hover:bg-brown hover:text-white transition-colors"
              >
                Explore All Products
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-16 md:py-20 bg-[#f7ecd7] border-b-4 border-gold/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-brown mb-4">
                Combo Offers
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6" />
              <p className="text-deepBrown text-base md:text-lg max-w-2xl mx-auto">
                Combo offers are sold at MRP.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {comboOffers.map((combo) => (
                <div
                  key={combo.id}
                  className="bg-[#F8EFE3] border border-gold/30 rounded-2xl overflow-hidden shadow-md flex flex-col hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative w-full aspect-[4/3] bg-white border-b border-gold/20">
                    <Image
                      src={combo.img}
                      alt={combo.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-brown text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                      {combo.tag}
                    </div>
                  </div>
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-serif text-brown mb-3 leading-tight">
                      {combo.name}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xl md:text-2xl font-bold text-green-800">
                        ₹{combo.mrp}
                      </span>
                    </div>
                    <div className="bg-[#F8EFE3] border border-gold/50 rounded-md p-2 mb-4 text-xs md:text-sm text-deepBrown font-medium text-center">
                      {combo.description}
                    </div>
                    <div className="mt-auto">
                      <a
                        href={`https://wa.me/916304449747?text=Hi%20I%20want%20to%20order%20${encodeURIComponent(combo.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-mutedGreen text-white py-2 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-opacity-90 transition-colors"
                      >
                        Order Combo on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
      <section className="py-20 md:py-32 bg-[#f6ecd2] border-b-4 border-gold/30 relative">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-gold text-center mb-6 tracking-tight drop-shadow-gold/40">
            Product Usage Ritual
          </h2>
          <div className="flex justify-center mb-8">
            <Image
              src="/images/traditional-divider.svg"
              alt="divider"
              width={120}
              height={24}
              className="h-6 md:h-8"
              loading="lazy"
            />
          </div>
          <p className="text-center text-lg md:text-xl font-serif italic text-brown mb-12 max-w-2xl mx-auto">
            “This sacred ritual awakens the roots, nourishes the scalp, and
            invites the wisdom of tradition into your daily care. By honoring
            these steps, you allow nature’s gifts to work in harmony with your
            hair.”
          </p>
          <div className="bg-[#f9f3e7] border-2 border-gold/60 px-8 py-8 rounded-2xl shadow-gold/10 shadow-lg font-serif text-brown text-lg md:text-xl leading-relaxed mb-10 relative">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-gold text-3xl">
              ✦
            </span>
            <div className="mb-6 flex items-start gap-4">
              <span className="font-bold text-gold text-xl md:text-2xl">
                1.
              </span>
              <span>
                <span className="font-bold">First 5 Days:</span> Use the product
                every night and wash it off the next morning.
              </span>
            </div>
            <div className="mb-6 flex items-start gap-4">
              <span className="font-bold text-gold text-xl md:text-2xl">
                2.
              </span>
              <span>
                <span className="font-bold">Next 2 Days:</span> Take a break and
                do not use the product.
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-bold text-gold text-xl md:text-2xl">
                3.
              </span>
              <span>
                <span className="font-bold">Following Days:</span> Use the
                product every other day.
              </span>
            </div>
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-gold text-3xl">
              ✦
            </span>
          </div>
          <p className="text-center text-base md:text-lg font-serif text-brown opacity-80 max-w-2xl mx-auto">
            “With patience and devotion, this practice brings strength, shine,
            and balance—just as it has for generations.”
          </p>
        </div>
      </section>
      <section className="py-20 md:py-28 bg-[#f7ecd7] border-b-4 border-gold/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-gold text-center mb-10 tracking-tight drop-shadow-gold/40">
            Testimonials
          </h2>
          <p className="text-center text-lg md:text-xl font-serif italic text-brown mb-8 max-w-2xl mx-auto">
            “From village homes to city salons, people have fallen in love with
            Mahira’s traditional care. Their stories, praise, and wild claims
            are a testament to the joy our products bring.”
          </p>
          <TestimonialsSlider />
        </div>
      </section>
      <FadeIn>
        <BenefitsSectionTraditional />
      </FadeIn>
      <FooterTraditional />
    </>
  );
}
