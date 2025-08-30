import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Logo } from "./Logo";

export function Footer() {
  const footerLinks = [
    { href: "/#menu", label: "Menu" },
    { href: "/#about-us", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/2sistercoffee",
      icon: <FaInstagram className="size-4" />,
    },
    {
      href: "https://www.facebook.com/p/Two-Sisters-Coffee-Co-61558845566177/",
      icon: <FaFacebook className="size-4" />,
    },
  ];

  return (
    <footer className="mt-auto border-t md:border-t-0 border-gray-200">
      <div className="w-full max-w-7xl py-10 md:pt-0 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
          <div className="text-center md:text-start">
            <Logo />
          </div>

          <ul className="text-center">
            {footerLinks.map((link) => (
              <li
                key={link.href}
                className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-black"
              >
                <a
                  className="inline-flex gap-x-2 text-sm text-black hover:text-gray-600"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-center md:text-end space-x-2">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                target="_blank"
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none"
                href={social.href}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
