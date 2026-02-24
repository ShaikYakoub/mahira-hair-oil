"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-beige/95 border-b border-[#d8c3ad] backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif text-brown tracking-wide">
          MAHIRA
        </Link>
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-0.5 w-6 bg-brown transition-all duration-300 mb-1 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-brown transition-all duration-300 mb-1 ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-brown transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </button>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-deepBrown">
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
        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-beige border-b border-[#d8c3ad] shadow-lg md:hidden animate-fadeIn z-50">
            <div className="flex flex-col items-center gap-4 py-6 text-base font-medium text-deepBrown">
              <Link
                href="/"
                className="hover:text-brown transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="hover:text-brown transition"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="hover:text-brown transition"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mutedGreen text-white px-6 py-2 rounded-full"
                onClick={() => setMenuOpen(false)}
              >
                Order
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
