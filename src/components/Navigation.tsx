export function Navigation() {
  const menuItems = [
    { href: "/", label: "Menu", isActive: true },
    { href: "/#about-us", label: "About" },
    { href: "/events", label: "Events" },
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
              className={`inline-block focus:outline-hidden ${
                item.isActive
                  ? "relative text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-yellow-400 dark:text-white"
                  : "text-black hover:text-gray-600 focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
              }`}
              href={item.href}
              aria-current={item.isActive ? "page" : undefined}
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
