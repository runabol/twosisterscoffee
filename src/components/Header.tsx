import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { HeaderActions } from "./HeaderActions";

export function Header() {
  return (
    <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
      <nav className="relative w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
        <div className="lg:col-span-3 flex items-center">
          <Logo />
        </div>
        <Navigation />
        <HeaderActions />
      </nav>
    </header>
  );
}
