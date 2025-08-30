export function Navigation() {
  const menuItems = [
    { href: "/#menu", label: "Menu" },
    { href: "/#about-us", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <div
      id="hs-pro-hcail"
      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-9"
      aria-labelledby="hs-pro-hcail-collapse"
    >
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-end  lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
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
    </div>
  );
}
