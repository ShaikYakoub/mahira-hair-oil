import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-beige/95 border-b border-[#d8c3ad] backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif text-brown tracking-wide">
          MAHIRA
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-deepBrown">
          <Link href="/" className="hover:text-brown transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-brown transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-brown transition">
            About
          </Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mutedGreen text-white px-4 py-2 rounded-full"
          >
            Order
          </a>
        </div>
      </nav>
    </header>
  );
}
