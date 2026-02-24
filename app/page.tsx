"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
function TestimonialsSlider() {
  const testimonials = [
    {
      img: "/images/testimonial-1.jpg",
      name: "Ramesh, Pune",
      text: "The oil and shampoo combo revived my hair. It feels blessed and full of life.",
      description:
        "Perfect for families. My hair is softer and healthier every day.",
    },
    {
      img: "/images/testimonial-2.jpg",
      name: "Anita, Delhi",
      text: "Mahira helped my thinning hair grow back. The fragrance is wonderful!",
      description:
        "I never thought I’d see new hair. The oil is gentle and smells divine.",
    },
    {
      img: "/images/testimonial-3.jpg",
      name: "Vikram, Mumbai",
      text: "After a month, my hair color got richer. Even my barber noticed!",
      description:
        "The natural ingredients really work. My hair feels strong and vibrant.",
    },
    {
      img: "/images/testimonial-4.jpg",
      name: "Priya, New York",
      text: "I gifted Mahira oil abroad. Everyone loves the traditional touch.",
      description: "Friends overseas appreciate the ritual and purity.",
    },
    {
      img: "/images/testimonial-5.jpg",
      name: "Suresh, Chennai",
      text: "Using Mahira is now a ritual in my home. Brings peace and joy.",
      description: "The oil brings calm and happiness to our family.",
    },
    {
      img: "/images/neem.png",
      name: "Meena, Jaipur",
      text: "My scalp feels nourished and healthy. No more dryness!",
      description: "Neem’s power soothes and balances my scalp.",
    },
    {
      img: "/images/argan.jpg",
      name: "Arjun, Bengaluru",
      text: "The shine and strength are unmatched. I recommend it to all my friends.",
      description: "Argan’s richness gives my hair a beautiful glow.",
    },
    {
      img: "/images/rosemary.jpg",
      name: "Fatima, Hyderabad",
      text: "The herbal blend is perfect for my sensitive scalp. No irritation, just results.",
      description: "Rosemary and herbs make my hair feel fresh and clean.",
    },
    {
      img: "/images/hair-oil-200ml.png",
      name: "Deepak, Lucknow",
      text: "I use the oil every other day. My hair is thicker and fuller.",
      description: "The ritual brings visible results. Highly recommended.",
    },
    {
      img: "/images/shampoo-100ml.png",
      name: "Sunita, Kolkata",
      text: "The shampoo cleanses gently and leaves my hair soft.",
      description: "Perfect for daily use. My hair feels light and healthy.",
    },
  ];
  const [offset, setOffset] = useState(0);
  const cards = [...testimonials, ...testimonials];
  const cardWidth = 340; // px, matches min-w-[320px] + gap
  useEffect(() => {
    let animationFrame: number;
    function animate() {
      setOffset((prev) => {
        const next = prev + 0.5;
        return next >= (cards.length * cardWidth) / 2 ? 0 : next;
      });
      animationFrame = requestAnimationFrame(animate);
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [cards.length, cardWidth]);
  return (
    <div className="relative overflow-hidden w-full">
      {/* Left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 z-10"
        style={{
          background: "linear-gradient(to right, #f7ecd7 80%, transparent)",
        }}
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 z-10"
        style={{
          background: "linear-gradient(to left, #f7ecd7 80%, transparent)",
        }}
      />
      <div
        className="flex gap-8 w-max"
        style={{
          transform: `translateX(-${offset}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {cards.map((t, i) => (
          <div
            key={i}
            className="bg-[#f9f3e7] border-2 border-gold/60 rounded-2xl shadow-gold/10 shadow-lg flex flex-col items-center p-8 font-serif w-full max-w-xs min-w-[260px] md:min-w-[320px] transition-all duration-300"
            style={{ flex: "0 0 auto" }}
          >
            <Image
              src={t.img}
              alt={t.name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full border-2 border-gold/40 mb-4 object-cover"
            />
            <div className="text-brown text-lg md:text-xl text-center mb-4 italic">
              “{t.text}”
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
// ...existing code for TestimonialsSlider above...
import StorySection from "@/components/StorySection";
import IngredientsSectionTraditional from "@/components/IngredientsSectionTraditional";
import ProductsSectionTraditional from "@/components/ProductsSectionTraditional";
import BenefitsSectionTraditional from "@/components/BenefitsSectionTraditional";
import FooterTraditional from "@/components/FooterTraditional";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FadeIn>
        <StorySection />
      </FadeIn>
      <FadeIn>
        <IngredientsSectionTraditional />
      </FadeIn>
      <FadeIn>
        <ProductsSectionTraditional />
      </FadeIn>
      <section className="py-20 md:py-32 bg-[#f6ecd2] border-b-4 border-gold/30 relative">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-gold text-center mb-6 tracking-tight drop-shadow-gold/40">
            Product Usage Ritual
          </h2>
          <div className="flex justify-center mb-8">
            <Image
              src="/svgs/hand-drawn-divider.svg"
              alt="divider"
              width={48}
              height={32}
              className="h-6 md:h-8"
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
