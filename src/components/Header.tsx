"use client";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { href: "/#menu", label: "Menu" },
  { href: "/#about-us", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex flex-col lg:justify-start lg:flex-nowrap z-50 w-full py-7 px-4 md:px-6 lg:px-8 mx-auto">
      <nav className="relative w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center">
        <div className="lg:col-span-3 flex items-center">
          <Logo />
        </div>
        <Navigation />
        <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-pro-hcail-collapse"
              aria-expanded="false"
              aria-controls="hs-pro-hcail"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-pro-hcail"
            >
              <MenuIcon className="size-4" />
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="flex flex-col gap-y-2 gap-x-0 mt-5 lg:flex-row lg:justify-end  lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
          {menuItems.map((item) => (
            <div key={item.href}>
              <a
                className={`inline-block focus:outline-hidden text-black hover:text-gray-600 focus:text-gray-600 hover:border-b-2 hover:border-amber-400`}
                href={item.href}
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
