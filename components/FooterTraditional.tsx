import Link from "next/link";
import Image from "next/image";

export default function FooterTraditional() {
  return (
    <footer className="bg-brown text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo.svg"
              alt="Mahira"
              width={72}
              height={72}
              style={{ border: "4px solid #b6873c" }}
            />
            <span className="font-serif text-xl text-gold font-bold tracking-wide select-none">
              Mahira Herbals
            </span>
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
                href="https://wa.me/916304449747"
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
          <p className="text-sm opacity-90">+91 63044 49747</p>
          <p className="text-sm opacity-90 mt-2">
            mahiraherbalhairoil@gmail.com
          </p>
          <div className="mt-4 flex gap-4 text-lg opacity-90">
            <a
              href="https://wa.me/916304449747"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="28"
                height="28"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.318h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c0-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0011.988 0C5.373 0 0 5.373 0 11.988c0 2.114.553 4.174 1.601 5.981L.057 23.925a1.001 1.001 0 001.225 1.225l5.954-1.545A11.93 11.93 0 0011.988 24c6.617 0 11.991-5.373 11.991-11.988 0-3.2-1.247-6.208-3.515-8.709z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/mahirahairoil?igsh=ZHJldWd1ZDBmOG43"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5z" />
              </svg>
            </a>
            <a
              href="http://www.youtube.com/@MahiraHerbalhairoil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
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
