import { MenuIcon } from "lucide-react";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
      <div className="lg:hidden">
        <button
          type="button"
          className="hs-collapse-toggle size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
  );
}
