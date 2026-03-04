import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import FooterTraditional from "@/components/FooterTraditional";
import BenefitsSectionTraditional from "@/components/BenefitsSectionTraditional";
import FadeIn from "@/components/FadeIn";
export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Mahira's herbal hair oil and shampoo prepared using traditional Ayurvedic methods.",
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
                className="inline-block bg-mutedGreen text-white px-4 py-2 text-sm md:px-8 md:py-3 rounded-full font-semibold hover:opacity-90 transition"
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
                className="inline-block bg-mutedGreen text-white px-4 py-2 text-sm md:px-8 md:py-3 rounded-full font-semibold hover:opacity-90 transition"
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
                className="inline-block bg-mutedGreen text-white px-4 py-2 text-sm md:px-8 md:py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Onion Hair Oil – 200ml */}
      <section className="py-16 md:py-24 bg-[#F8EFE3] border-b-4 border-gold/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-2">
              Onion Hair Oil – 200ml
            </h2>
            <p className="text-center text-sm font-semibold text-mutedGreen mb-2">Anti-Hairfall Formula</p>
            <div className="w-20 h-1 bg-gold mx-auto mb-8" />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#d9c3ab] bg-white">
              <Image src="/images/onion-oil-200ml.png" alt="Onion Hair Oil 200ml" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-green-800">₹399</span>
                <span className="text-sm line-through text-gray-500">₹499</span>
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">20% OFF</span>
              </div>
              <p className="text-deepBrown text-base md:text-lg mb-4">
                Powered by red onion extract and Kalonji, this specialty oil targets hair fall at its roots with a potent Ayurvedic formula.
              </p>
              <h3 className="text-lg font-semibold text-brown mb-2">Key Ingredients</h3>
              <ul className="list-disc pl-6 text-deepBrown mb-4 space-y-1 text-sm">
                <li>ఆనియన్ (Onion) – Anti-hairfall powerhouse</li>
                <li>మెంతులు (Fenugreek) – Strengthens roots</li>
                <li>కలోంజి (Kalonji / Black Cumin) – Stimulates growth</li>
                <li>కరివేపాకు (Curry Leaves) – Nourishes follicles</li>
                <li>ఉసిరి కాయలు (Amla) – Fortifies strands</li>
              </ul>
              <a href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20Onion%20Hair%20Oil%20200ml" target="_blank" rel="noopener noreferrer" className="inline-block bg-mutedGreen text-white px-4 py-2 text-sm md:px-8 md:py-3 rounded-full font-semibold hover:opacity-90 transition">
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bhringraj Hair Oil – 200ml */}
      <section className="py-16 md:py-24 border-b-4 border-gold/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-2">
              Bhringraj Hair Oil – 200ml
            </h2>
            <p className="text-center text-sm font-semibold text-mutedGreen mb-2">Hair Growth &amp; Strengthening Roots</p>
            <div className="w-20 h-1 bg-gold mx-auto mb-8" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#d9c3ab] bg-[#F8EFE3]">
              <Image src="/images/bhringraj-oil-200ml.png" alt="Bhringraj Hair Oil 200ml" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-green-800">₹399</span>
                <span className="text-sm line-through text-gray-500">₹499</span>
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">20% OFF</span>
              </div>
              <p className="text-deepBrown text-base md:text-lg mb-4">
                The ancient king of hair herbs leads this blend, specifically formulated for new growth and deeper root strength.
              </p>
              <h3 className="text-lg font-semibold text-brown mb-2">Key Ingredients</h3>
              <ul className="list-disc pl-6 text-deepBrown mb-4 space-y-1 text-sm">
                <li>భృంగరాజ్ (Bhringraj) – King of hair herbs</li>
                <li>ఉసిరి కాయలు (Amla) – Strengthens and shines</li>
                <li>కలోంజి (Kalonji) – Activates dormant follicles</li>
                <li>కరివేపాకు (Curry Leaves) – Prevents premature greying</li>
                <li>మునగ ఆకు (Moringa) – Nutrient-rich nourishment</li>
                <li>మందారం (Hibiscus) – Softens and conditions</li>
              </ul>
              <a href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20Bhringraj%20Hair%20Oil%20200ml" target="_blank" rel="noopener noreferrer" className="inline-block bg-mutedGreen text-white px-4 py-2 text-sm md:px-8 md:py-3 rounded-full font-semibold hover:opacity-90 transition">
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Onion Shampoo – 100ml */}
      <section className="py-16 md:py-24 bg-[#F8EFE3] border-b-4 border-gold/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-2">
              Onion Herbal Shampoo – 100ml
            </h2>
            <p className="text-center text-sm font-semibold text-mutedGreen mb-2">Anti-Hairfall &amp; Scalp Protect</p>
            <div className="w-20 h-1 bg-gold mx-auto mb-8" />
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#d9c3ab] bg-white">
              <Image src="/images/onion-shampoo-100ml.png" alt="Onion Shampoo 100ml" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-green-800">₹314</span>
                <span className="text-sm line-through text-gray-500">₹349</span>
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">10% OFF</span>
              </div>
              <p className="text-deepBrown text-base md:text-lg mb-4">
                Gentle Ayurvedic cleanser with onion extract to fight hairfall while protecting the scalp&apos;s natural balance.
              </p>
              <h3 className="text-lg font-semibold text-brown mb-2">Key Ingredients</h3>
              <ul className="list-disc pl-6 text-deepBrown mb-4 space-y-1 text-sm">
                <li>కుంకుడుకాయలు (Reetha / Soapnut) – Natural lather</li>
                <li>శీకాకాయలు (Shikakai) – Gentle cleanser</li>
                <li>ఆనియన్ (Onion) – Anti-hairfall</li>
                <li>కలోంజి (Kalonji) – Scalp protection</li>
              </ul>
              <a href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20Onion%20Herbal%20Shampoo%20100ml" target="_blank" rel="noopener noreferrer" className="inline-block bg-mutedGreen text-white px-4 py-2 text-sm md:px-8 md:py-3 rounded-full font-semibold hover:opacity-90 transition">
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Neem Shampoo – 100ml */}
      <section className="py-16 md:py-24 border-b-4 border-gold/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-2">
              Neem Herbal Shampoo – 100ml
            </h2>
            <p className="text-center text-sm font-semibold text-mutedGreen mb-2">Anti-Dandruff Formula</p>
            <div className="w-20 h-1 bg-gold mx-auto mb-8" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-[#d9c3ab] bg-[#F8EFE3]">
              <Image src="/images/neem-shampoo-100ml.png" alt="Neem Shampoo 100ml" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-green-800">₹314</span>
                <span className="text-sm line-through text-gray-500">₹349</span>
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">10% OFF</span>
              </div>
              <p className="text-deepBrown text-base md:text-lg mb-4">
                The ancient purifier Neem, paired with Aloe Vera and Kalonji, creates the most effective natural anti-dandruff wash.
              </p>
              <h3 className="text-lg font-semibold text-brown mb-2">Key Ingredients</h3>
              <ul className="list-disc pl-6 text-deepBrown mb-4 space-y-1 text-sm">
                <li>కుంకుడుకాయలు (Reetha / Soapnut) – Natural lather</li>
                <li>శీకాకాయలు (Shikakai) – Deep cleanse</li>
                <li>వేపాకు (Neem Leaves) – Anti-dandruff &amp; purifying</li>
                <li>కలోంజి (Kalonji) – Scalp health</li>
                <li>కలబంద (Aloe Vera) – Soothing &amp; hydrating</li>
              </ul>
              <a href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20Neem%20Herbal%20Shampoo%20100ml" target="_blank" rel="noopener noreferrer" className="inline-block bg-mutedGreen text-white px-4 py-2 text-sm md:px-8 md:py-3 rounded-full font-semibold hover:opacity-90 transition">
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Combo Offers */}
      <section className="py-16 md:py-20 px-6 bg-[#f7ecd7] border-b-4 border-gold/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-4">
            🎁 Special Combo Offers
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-center text-base font-semibold text-green-700 mb-10">Free Shipping on All Orders!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gold/50 rounded-2xl p-6 shadow-md">
              <div className="text-center mb-4">
                <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">BUY 1 GET 1</span>
              </div>
              <h3 className="text-xl font-serif text-brown text-center mb-2">Herbal Hair Oil – 500ml</h3>
              <div className="flex justify-center items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-green-800">₹1,199</span>
                <span className="text-sm line-through text-gray-500">₹1,499</span>
                <span className="text-xs font-bold text-green-600">20% OFF</span>
              </div>
              <div className="bg-[#f9f3e7] border border-gold/40 rounded-lg p-3 text-center text-sm text-deepBrown mb-4">
                🎁 FREE 200ml Regular Shampoo (Worth ₹399)
              </div>
              <a href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20Mahira%20Hair%20Oil%20500ml%20Combo" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-mutedGreen text-white py-3 rounded-full font-semibold hover:opacity-90 transition">
                Order on WhatsApp
              </a>
            </div>
            <div className="bg-white border-2 border-gold/50 rounded-2xl p-6 shadow-md">
              <div className="text-center mb-4">
                <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">BUY 1 GET 1</span>
              </div>
              <h3 className="text-xl font-serif text-brown text-center mb-2">Herbal Hair Oil – 200ml</h3>
              <div className="flex justify-center items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-green-800">₹479</span>
                <span className="text-sm line-through text-gray-500">₹599</span>
                <span className="text-xs font-bold text-green-600">20% OFF</span>
              </div>
              <div className="bg-[#f9f3e7] border border-gold/40 rounded-lg p-3 text-center text-sm text-deepBrown mb-4">
                🎁 FREE 100ml Regular Shampoo (Worth ₹199)
              </div>
              <a href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20Mahira%20Hair%20Oil%20200ml%20Combo" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-mutedGreen text-white py-3 rounded-full font-semibold hover:opacity-90 transition">
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
        <div className="overflow-hidden w-full">
          <div className="flex gap-5 w-max animate-ingredient-scroll">
            {[
              {
                src: "/images/amla.jpg",
                name: "Amla",
                desc: "The sacred fruit, revered for centuries to strengthen and nourish hair roots.",
              },
              {
                src: "/images/hibiscus.jpg",
                name: "Hibiscus",
                desc: "The flower of beauty, cooling and soothing, bestowing shine and softness.",
              },
              {
                src: "/images/neem.png",
                name: "Neem",
                desc: "The ancient purifier, calming the scalp and keeping hair healthy and clear.",
              },
              {
                src: "/images/aloe.jpg",
                name: "Aloe Vera",
                desc: "The cooling balm, hydrating and soothing for lustrous, soft hair.",
              },
              {
                src: "/images/coconut.jpg",
                name: "Coconut",
                desc: "The nourishing oil, cherished in every home for deep conditioning and strength.",
              },
              {
                src: "/images/fenugreek.png",
                name: "Fenugreek",
                desc: "The golden seed, lending body and resilience to every strand.",
              },
              {
                src: "/images/amla.jpg",
                name: "Amla",
                desc: "The sacred fruit, revered for centuries to strengthen and nourish hair roots.",
              },
              {
                src: "/images/hibiscus.jpg",
                name: "Hibiscus",
                desc: "The flower of beauty, cooling and soothing, bestowing shine and softness.",
              },
              {
                src: "/images/neem.png",
                name: "Neem",
                desc: "The ancient purifier, calming the scalp and keeping hair healthy and clear.",
              },
              {
                src: "/images/aloe.jpg",
                name: "Aloe Vera",
                desc: "The cooling balm, hydrating and soothing for lustrous, soft hair.",
              },
              {
                src: "/images/coconut.jpg",
                name: "Coconut",
                desc: "The nourishing oil, cherished in every home for deep conditioning and strength.",
              },
              {
                src: "/images/fenugreek.png",
                name: "Fenugreek",
                desc: "The golden seed, lending body and resilience to every strand.",
              },
            ].map((ing, i) => (
              <div
                key={i}
                className="w-44 flex-shrink-0 flex flex-col bg-[#f9f3e7] border border-gold/30 rounded-xl overflow-hidden shadow-sm"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={ing.src}
                    alt={ing.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <div className="font-serif text-base text-brown mb-1">
                    {ing.name}
                  </div>
                  <div className="text-deepBrown text-xs leading-snug">
                    {ing.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-[#f7ecd7] border-b-4 border-gold/30">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/traditional-divider.svg"
            alt="divider"
            width={120}
            height={24}
            className="h-6 md:h-8"
          />
        </div>
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
