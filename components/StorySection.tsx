import Image from "next/image";

export default function StorySection() {
  return (
    <section id="story" className="py-16 md:py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[420px] md:h-[450px] rounded-xl overflow-hidden shadow-md shadow-brown/10">
          <Image
            src="/images/story-mortar-pestle.jpg"
            alt="Traditional Ayurvedic preparation"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-brown mb-6">
            From Our Village <br /> to Your Home
          </h2>

          <div className="w-24 h-1 bg-gold mb-8" />

          <p className="text-deepBrown leading-loose mb-6 text-base md:text-lg">
            Our formulations are inspired by generations of Ayurvedic knowledge.
            Every batch is carefully prepared using natural herbs sourced from
            local farms.
          </p>

          <p className="text-deepBrown leading-loose text-base md:text-lg">
            We follow traditional grinding and infusion methods to preserve the
            purity and effectiveness of every ingredient. No shortcuts. No
            artificial additives. Just honest care.
          </p>
        </div>
      </div>
    </section>
  );
}
