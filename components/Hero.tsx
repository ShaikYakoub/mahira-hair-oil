import Image from "next/image";

interface HeroProps {
  bgImage?: string;
  bgAlt?: string;
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  rightImage?: string;
  rightAlt?: string;
  children?: React.ReactNode;
}

export default function Hero({
  bgImage = "/images/story-garden-hero.png",
  bgAlt = "Soft village sunrise",
  heading = (
    <>
      Pure Ayurvedic Care,
      <br />
      Made Traditionally
    </>
  ),
  subheading = (
    <>
      Handcrafted herbal hair oil and shampoo prepared using age-old village
      methods and natural ingredients.
    </>
  ),
  rightImage = "/images/product-on-wooden-table.jpg",
  rightAlt = "Mahira Ayurvedic product on wooden table",
  children,
}: HeroProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src={bgImage}
          alt={bgAlt}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-beige/90" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-brown leading-tight mb-6">
            {heading}
          </h1>

          <p className="text-deepBrown text-base md:text-lg leading-loose mb-8 max-w-xl">
            {subheading}
          </p>

          {children ?? (
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20Mahira%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mutedGreen text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Order on WhatsApp
              </a>

              <a
                href="/products"
                className="border border-brown text-brown px-8 py-4 rounded-full font-semibold hover:bg-brown hover:text-white transition"
              >
                View Products
              </a>
            </div>
          )}
        </div>

        <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg shadow-brown/10">
          <Image
            src={rightImage}
            alt={rightAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
