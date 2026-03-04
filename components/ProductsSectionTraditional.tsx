import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    id: "base-500",
    category: "Signature Blend",
    name: "Mahira Herbal Hair Oil – 500ml",
    mrp: 1499,
    price: 1199,
    discount: "20% OFF",
    offer: "🎁 FREE 200ml Regular Shampoo (Worth ₹399)",
    img: "/images/hair-oil-500ml.png",
  },
  {
    id: "base-200",
    category: "Signature Blend",
    name: "Mahira Herbal Hair Oil – 200ml",
    mrp: 599,
    price: 479,
    discount: "20% OFF",
    offer: "🎁 FREE 100ml Regular Shampoo (Worth ₹199)",
    img: "/images/hair-oil-200ml.png",
  },
  {
    id: "onion-oil",
    category: "Specialty Oil",
    name: "Onion Hair Oil – 200ml",
    mrp: 499,
    price: 399,
    discount: "20% OFF",
    offer: "Anti-Hairfall Formula",
    img: "/images/onion-hair-oil.png",
  },
  {
    id: "shampoo-regular",
    category: "Herbal Cleanser",
    name: "Regular Herbal Shampoo – 100ml",
    mrp: 399,
    price: 359,
    discount: "10% OFF",
    offer: "Anti-Hairfall & Smooth-Silky",
    img: "/images/shampoo-100ml.png",
  },
];

export default function ProductsSectionTraditional() {
  return (
    <section className="py-20 md:py-28 bg-white border-b-4 border-gold/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-brown mb-4">
            Our Handcrafted Collection
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-deepBrown text-lg max-w-2xl mx-auto">
            Experience the power of traditional village methods.{" "}
            <span className="font-bold text-green-700">Free Shipping</span> on
            all orders!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
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
                  className="object-cover w-full h-full"
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
                <div className="bg-white border border-gold/50 rounded-md p-2 mb-4 text-xs md:text-sm text-deepBrown font-medium text-center">
                  {product.offer}
                </div>
                <div className="mt-auto space-y-2">
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
  );
}
