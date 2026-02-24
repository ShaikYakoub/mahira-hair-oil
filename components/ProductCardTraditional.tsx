import Image from "next/image";

interface ProductCardTraditionalProps {
  title: string;
  image: string;
  subtitle?: string;
}

export default function ProductCardTraditional({
  title,
  image,
  subtitle,
}: ProductCardTraditionalProps) {
  return (
    <div className="bg-[#F8EFE3] border border-[#d9c3ab] rounded-xl overflow-hidden shadow-sm shadow-brown/5 flex flex-col">
      <div className="relative w-full aspect-[4/3]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5 text-center flex-1 flex flex-col justify-center">
        <h3 className="text-2xl font-serif text-brown mb-2">{title}</h3>
        {subtitle && <p className="text-deepBrown text-sm mb-4">{subtitle}</p>}
        <a
          href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20Mahira%20products"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-mutedGreen text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition mt-auto"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
