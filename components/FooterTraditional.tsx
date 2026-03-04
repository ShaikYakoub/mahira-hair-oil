import Link from "next/link";
import Image from "next/image";

export default function FooterTraditional() {
  return (
    <footer className="bg-brown text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/logo.svg" alt="Mahira" width={40} height={40} />
            <h3 className="text-2xl font-serif">Mahira Organics</h3>
          </div>
          <p className="text-sm opacity-90">
            Traditional Ayurvedic hair care crafted with purity and care.
          </p>
        </div>

        <div className="order-1 md:order-none">
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/#story">About</Link>
            </li>
            <li>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="order-2 md:order-none col-span-2 md:col-span-1">
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm opacity-90">+91 98765 43210</p>
          <p className="text-sm opacity-90 mt-2">mahiraorganics@gmail.com</p>
          <div className="mt-4 flex gap-4 text-sm opacity-90">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/mahiraorganics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/mahiraorganics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-12 opacity-70">
        © {new Date().getFullYear()} Mahira Organics. All rights reserved.
      </div>
    </footer>
  );
}
