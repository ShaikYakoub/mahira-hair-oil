import Image from "next/image";
import Hero from "@/components/Hero";
import FooterTraditional from "@/components/FooterTraditional";
import BenefitsSectionTraditional from "@/components/BenefitsSectionTraditional";

export const metadata = {
  title: "About Us | Mahira Organics",
  description:
    "Learn about Mahira Organics, our 29-ingredient traditional Ayurvedic roots, and our commitment to pure, handcrafted hair care.",
};

export default function AboutPage() {
  return (
    <main className="text-brown min-h-screen relative overflow-hidden">
      {/* About Hero Section */}
      <Hero
        heading={<>About Mahira Organics</>}
        subheading={
          <>
            Rooted in tradition, Mahira Organics brings pure, honest Ayurvedic
            hair care to modern homes. Discover our story and values.
          </>
        }
        rightImage="/images/story-roots-sprout.jpg"
        rightAlt="Roots and Sprout - Mahira Story"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-brown">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8" />
          <p className="text-deepBrown text-base md:text-lg leading-loose mb-8">
            Mahira Organics was born from a deep respect for traditional
            Ayurvedic wisdom and a desire to bring pure, honest hair care to
            modern homes. Our roots trace back to a small village where herbs
            are still handpicked, ground, and infused using age-old methods
            passed down through generations.
          </p>
          <p className="text-deepBrown text-base md:text-lg leading-loose mb-8">
            What started as a simple, sacred practice has blossomed into our
            signature{" "}
            <span className="font-bold text-brown">
              29-ingredient master blend
            </span>
            . We believe true beauty comes from nature. That&apos;s why every
            bottle of Mahira—from our classic herbal oils to our targeted Onion
            and Bhringraj specialty blends—is crafted in small batches, using
            only locally sourced herbs and natural oils. We never use chemicals
            or shortcuts. Our process is slow, mindful, and focused on
            preserving the potency of each ingredient.
          </p>
        </div>
        <div className="max-w-3xl mx-auto px-6 mt-12">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/story-mortar-pestle.jpg"
              alt="Traditional Ayurvedic Preparation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      {/* Mahira Philosophy Section */}
      <section className="py-20 md:py-28 bg-[#f7ecd7] border-y-4 border-gold/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-gold text-center mb-6 tracking-tight drop-shadow-gold/40">
            Our Philosophy
          </h2>
          <div className="flex justify-center mb-8">
            <Image
              src="/images/traditional-divider.svg"
              alt="divider"
              width={120}
              height={24}
              className="h-6 md:h-8"
            />
          </div>
          <p className="text-center text-lg md:text-xl font-serif italic text-brown mb-10 max-w-2xl mx-auto">
            &ldquo;At Mahira, we believe that true care is a sacred act—one that
            honors both the wisdom of our ancestors and the specific needs of
            the present. Our journey is rooted in reverence for nature, mindful
            preparation, and the quiet power of rituals passed down through
            generations.&rdquo;
          </p>
          <p className="text-center text-base md:text-lg font-serif text-brown opacity-90 max-w-2xl mx-auto mb-6">
            Whether you are using our Anti-Dandruff Neem Shampoo or our Hair
            Growth Bhringraj Oil, every bottle is more than a product—it is a
            vessel of tradition, patience, and love.
          </p>
          <p className="text-center text-base md:text-lg font-serif text-brown opacity-90 max-w-2xl mx-auto">
            We invite you to experience hair care as it was meant to be: slow,
            honest, and deeply nourishing.
          </p>
        </div>
      </section>
      {/* 29-Ingredient Master Blend */}
      <section className="py-16 md:py-20 px-6 bg-[#f7ecd7] border-b-4 border-gold/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brown text-center mb-4">
            The 29-Ingredient Master Blend
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-center text-lg font-serif italic text-brown mb-12 max-w-3xl mx-auto">
            &ldquo;Our signature oils are born from a sacred, slow-infused blend of 29 traditional herbs. Here are the core elements we gather at dawn to bring you pure, uncompromised care.&rdquo;
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Amla", telugu: "ఉసిరి కాయలు", desc: "Indian Gooseberry", img: "/images/amla.jpg" },
              { name: "Fenugreek", telugu: "మెంతులు", desc: "Golden seed for resilience", img: "/images/fenugreek.png" },
              { name: "Neem", telugu: "వేపాకు", desc: "Ancient scalp purifier", img: "/images/neem.png" },
              { name: "Moringa", telugu: "మునగ ఆకు", desc: "Drumstick leaves for strength", img: "/images/moringa.jpg" },
              { name: "Aloe Vera", telugu: "అలోవెరా", desc: "Cooling and hydrating balm", img: "/images/aloe.jpg" },
              { name: "Jatamansi", telugu: "జట మాంసి", desc: "Spikenard for calming", img: "/images/jatamansi.jpg" },
              { name: "Bhringraj", telugu: "భృంగరాజ్", desc: "King of herbs for hair", img: "/images/bhringraj.jpg" },
              { name: "Rosemary", telugu: "రోజ్ మేరీ", desc: "Stimulates hair follicles", img: "/images/rosemary.jpg" },
              { name: "Haritaki", telugu: "హరితకి", desc: "Nourishes and protects", img: "/images/haritaki.jpg" },
              { name: "Henna", telugu: "గోరింటాకు", desc: "Natural conditioning", img: "/images/henna.jpg" },
              { name: "Vetiver", telugu: "వట్టి వేరు", desc: "Cooling root extract", img: "/images/vetiver.jpg" },
              { name: "Flax Seeds", telugu: "అవిసె గింజలు", desc: "Rich in Omega-3", img: "/images/flaxseeds.jpg" },
              { name: "Almonds", telugu: "బాదం", desc: "Deep moisture and shine", img: "/images/almonds.jpg" },
              { name: "Hibiscus", telugu: "మందారం పువ్వులు", desc: "Flower of beauty and softness", img: "/images/hibiscus.jpg" },
              { name: "Coconut & Castor", telugu: "కొబ్బరి నూనె + ఆముదం", desc: "Nourishing base oils", img: "/images/coconut.jpg" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center bg-[#f9f3e7] border border-gold/30 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-20 h-20 mb-3">
                  <Image src={item.img} alt={item.name} fill sizes="80px" className="object-cover rounded-full border border-gold/40" />
                </div>
                <div className="font-serif text-base text-brown text-center leading-tight mb-1">{item.name}</div>
                <div className="font-serif text-xs text-gold font-medium mb-2">{item.telugu}</div>
                <div className="text-deepBrown text-xs text-center leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BenefitsSectionTraditional />
      <FooterTraditional />
    </main>
  );
}
