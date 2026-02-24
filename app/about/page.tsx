import Image from "next/image";
import Hero from "@/components/Hero";
import FooterTraditional from "@/components/FooterTraditional";
import BenefitsSectionTraditional from "@/components/BenefitsSectionTraditional";

export const metadata = {
  title: "About Us | Mahira Organics",
  description:
    "Learn about Mahira Organics, our traditional Ayurvedic roots, and our commitment to pure, handcrafted hair care.",
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

      {/* ...existing code... */}
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
            We believe true beauty comes from nature. That’s why every bottle of
            Mahira is crafted in small batches, using only locally sourced herbs
            and natural oils—never any chemicals or shortcuts. Our process is
            slow, mindful, and focused on preserving the potency of each
            ingredient.
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
            <img
              src="/svgs/hand-drawn-divider.svg"
              alt="divider"
              className="h-6 md:h-8"
            />
          </div>
          <p className="text-center text-lg md:text-xl font-serif italic text-brown mb-10 max-w-2xl mx-auto">
            “At Mahira, we believe that true care is a sacred act—one that
            honors both the wisdom of our ancestors and the needs of the
            present. Our journey is rooted in reverence for nature, mindful
            preparation, and the quiet power of rituals passed down through
            generations.”
          </p>
          <p className="text-center text-base md:text-lg font-serif text-brown opacity-90 max-w-2xl mx-auto">
            Every bottle is more than a product—it is a vessel of tradition,
            patience, and love. We invite you to experience hair care as it was
            meant to be: slow, honest, and deeply nourishing.
          </p>
        </div>
      </section>
      <BenefitsSectionTraditional />
      <FooterTraditional />
    </main>
  );
}
