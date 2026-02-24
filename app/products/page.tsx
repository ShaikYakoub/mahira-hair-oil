import type { Metadata } from "next";

import Image from "next/image";
import Hero from "@/components/Hero";
import FooterTraditional from "@/components/FooterTraditional";
import BenefitsSectionTraditional from "@/components/BenefitsSectionTraditional";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Mahira&apos;s herbal hair oil and shampoo prepared using traditional Ayurvedic methods.",
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Mahira Herbal Hair Oil",
  description:
    "Traditional Ayurvedic hair oil made with Amla, Hibiscus, Neem, and Coconut.",
  brand: {
    "@type": "Brand",
    name: "Mahira Organics",
  },
  areaServed: "India",
};

export default function ProductsPage() {
  return (
    <main className="text-brown relative overflow-hidden">
      {/* Products Hero Section */}
      <Hero
        heading={<>Our Products</>}
        subheading={
          <>
            Discover Mahira&apos;s handcrafted Ayurvedic hair oil and shampoo,
            made in small batches using traditional village methods and pure,
            local ingredients.
          </>
        }
        rightImage="/images/hair-oil-500ml.png"
        rightAlt="Mahira Herbal Hair Oil 500ml"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Herbal Hair Oil – 200ml */}
      <section className="py-16 md:py-24 border-b-4 border-gold/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-2">
              Herbal Hair Oil – 200ml
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-8" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#d9c3ab] bg-[#F8EFE3]">
              <Image
                src="/images/hair-oil-200ml.png"
                alt="Herbal Hair Oil 200ml"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-deepBrown text-base md:text-lg mb-4">
                Nourishes scalp and strengthens roots. Crafted with Amla,
                Hibiscus, Neem, and Coconut using traditional Ayurvedic methods.
              </p>
              <h3 className="text-xl font-semibold text-brown mb-2">
                Benefits
              </h3>
              <ul className="list-disc pl-6 text-deepBrown mb-4 space-y-1">
                <li>Promotes hair growth and thickness</li>
                <li>Reduces hair fall and breakage</li>
                <li>Soothes dry, itchy scalp</li>
                <li>Strengthens roots naturally</li>
              </ul>
              <h3 className="text-xl font-semibold text-brown mb-2">
                How to Use
              </h3>
              <p className="text-deepBrown mb-4">
                Massage oil into scalp and hair roots. Leave for at least 1 hour
                or overnight before washing. Use 2–3 times a week for best
                results.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20Mahira%20Hair%20Oil%20200ml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-mutedGreen text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Herbal Hair Oil – 500ml */}
      <section className="py-16 md:py-24 bg-[#F8EFE3] border-b-4 border-gold/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-2">
              Herbal Hair Oil – 500ml
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-8" />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#d9c3ab] bg-white">
              <Image
                src="/images/hair-oil-500ml.png"
                alt="Herbal Hair Oil 500ml"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-deepBrown text-base md:text-lg mb-4">
                For long-term traditional hair care. Ideal for families or
                regular users who want to maintain healthy, nourished hair.
              </p>
              <h3 className="text-xl font-semibold text-brown mb-2">
                Benefits
              </h3>
              <ul className="list-disc pl-6 text-deepBrown mb-4 space-y-1">
                <li>All the benefits of our 200ml oil</li>
                <li>Economical for regular use</li>
                <li>Supports scalp health and shine</li>
                <li>Handcrafted in small batches</li>
              </ul>
              <h3 className="text-xl font-semibold text-brown mb-2">
                How to Use
              </h3>
              <p className="text-deepBrown mb-4">
                Apply generously to scalp and hair. Leave for 1 hour or
                overnight, then wash. Use regularly for best results.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20Mahira%20Hair%20Oil%20500ml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-mutedGreen text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Herbal Shampoo – 100ml */}
      <section className="py-16 md:py-24 border-b-4 border-gold/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-2">
              Herbal Shampoo – 100ml
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-8" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#d9c3ab] bg-[#F8EFE3]">
              <Image
                src="/images/shampoo-100ml.png"
                alt="Herbal Shampoo 100ml"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-deepBrown text-base md:text-lg mb-4">
                Gentle herbal cleanser enriched with natural extracts to cleanse
                scalp without stripping natural oils.
              </p>
              <h3 className="text-xl font-semibold text-brown mb-2">
                Benefits
              </h3>
              <ul className="list-disc pl-6 text-deepBrown mb-4 space-y-1">
                <li>Removes impurities and buildup</li>
                <li>Maintains scalp balance</li>
                <li>Supports hair strength and shine</li>
                <li>Free from harsh chemicals</li>
              </ul>
              <h3 className="text-xl font-semibold text-brown mb-2">
                How to Use
              </h3>
              <p className="text-deepBrown mb-4">
                Apply to wet hair, massage gently into scalp, and rinse. Use
                after Mahira Hair Oil for best results.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20Mahira%20Herbal%20Shampoo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-mutedGreen text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-[#f7ecd7] border-b-4 border-gold/30">
        <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-6">
          Key Ingredients
        </h2>
        <p className="text-center text-lg font-serif italic text-brown mb-10 max-w-2xl mx-auto">
          “Each drop is a hymn to nature—herbs gathered at dawn, prepared with
          reverence.”
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Ingredient cards with images and traditional descriptions */}
          <div className="flex flex-col items-center bg-[#f9f3e7] border border-gold/30 rounded-xl p-4 shadow-sm">
            <Image
              src="/images/amla.jpg"
              alt="Amla"
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-full mb-3 border border-gold/30"
            />
            <div className="font-serif text-lg text-brown mb-1">Amla</div>
            <div className="text-deepBrown text-sm text-center">
              The sacred fruit, revered for centuries to strengthen and nourish
              hair roots.
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#f9f3e7] border border-gold/30 rounded-xl p-4 shadow-sm">
            <Image
              src="/images/hibiscus.jpg"
              alt="Hibiscus"
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-full mb-3 border border-gold/30"
            />
            <div className="font-serif text-lg text-brown mb-1">Hibiscus</div>
            <div className="text-deepBrown text-sm text-center">
              The flower of beauty, cooling and soothing, bestowing shine and
              softness.
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#f9f3e7] border border-gold/30 rounded-xl p-4 shadow-sm">
            <Image
              src="/images/neem.png"
              alt="Neem"
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-full mb-3 border border-gold/30"
            />
            <div className="font-serif text-lg text-brown mb-1">Neem</div>
            <div className="text-deepBrown text-sm text-center">
              The ancient purifier, calming the scalp and keeping hair healthy
              and clear.
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#f9f3e7] border border-gold/30 rounded-xl p-4 shadow-sm">
            <Image
              src="/images/aloe.jpg"
              alt="Aloe Vera"
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-full mb-3 border border-gold/30"
            />
            <div className="font-serif text-lg text-brown mb-1">Aloe Vera</div>
            <div className="text-deepBrown text-sm text-center">
              The cooling balm, hydrating and soothing for lustrous, soft hair.
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#f9f3e7] border border-gold/30 rounded-xl p-4 shadow-sm">
            <Image
              src="/images/coconut.jpg"
              alt="Coconut"
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-full mb-3 border border-gold/30"
            />
            <div className="font-serif text-lg text-brown mb-1">Coconut</div>
            <div className="text-deepBrown text-sm text-center">
              The nourishing oil, cherished in every home for deep conditioning
              and strength.
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#f9f3e7] border border-gold/30 rounded-xl p-4 shadow-sm">
            <Image
              src="/images/fenugreek.png"
              alt="Fenugreek"
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-full mb-3 border border-gold/30"
            />
            <div className="font-serif text-lg text-brown mb-1">Fenugreek</div>
            <div className="text-deepBrown text-sm text-center">
              The golden seed, lending body and resilience to every strand.
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-[#f7ecd7] border-b-4 border-gold/30">
        <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-6">
          How To Use
        </h2>
        <p className="text-center text-lg font-serif italic text-brown mb-10 max-w-2xl mx-auto">
          “A ritual of care, as practiced by our elders.”
        </p>
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          <div className="flex gap-4 items-center md:items-start">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/20 border border-gold/40 font-serif text-2xl text-gold mt-0.5 md:mt-2">
              1
            </span>
            <div className="flex-1">
              <div className="font-serif text-lg text-brown mb-1">
                Warm a small amount of oil in your palms.
              </div>
              <div className="text-deepBrown text-base">
                Let the scent and touch awaken your senses.
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center md:items-start">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/20 border border-gold/40 font-serif text-2xl text-gold mt-0.5 md:mt-2">
              2
            </span>
            <div className="flex-1">
              <div className="font-serif text-lg text-brown mb-1">
                Massage gently into scalp and roots.
              </div>
              <div className="text-deepBrown text-base">
                Move in slow circles, as tradition teaches, for 5–10 minutes.
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center md:items-start">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/20 border border-gold/40 font-serif text-2xl text-gold mt-0.5 md:mt-2">
              3
            </span>
            <div className="flex-1">
              <div className="font-serif text-lg text-brown mb-1">
                Leave for at least 1 hour, or overnight.
              </div>
              <div className="text-deepBrown text-base">
                Let the herbs work their magic as you rest.
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center md:items-start">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/20 border border-gold/40 font-serif text-2xl text-gold mt-0.5 md:mt-2">
              4
            </span>
            <div className="flex-1">
              <div className="font-serif text-lg text-brown mb-1">
                Wash gently with Mahira Herbal Shampoo.
              </div>
              <div className="text-deepBrown text-base">
                Repeat 2–3 times a week for best results.
              </div>
            </div>
          </div>
        </div>
      </section>
      <FadeIn>
        <BenefitsSectionTraditional />
      </FadeIn>
      <FooterTraditional />
    </main>
  );
}
