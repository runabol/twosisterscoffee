export function Contact() {
  return (
    <div
      id="contact"
      className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto"
    >
      <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
        <h2 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
          Contacts
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
        <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <img
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Coffee shop interior"
          />
        </div>

        <div className="space-y-8 lg:space-y-16">
          <div>
            <h3 className="mb-5 font-semibold text-black dark:text-white">
              Our address
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="flex gap-4">
                <svg
                  className="shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <div className="grow">
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    Florida, USA
                  </p>
                  <address className="mt-1 text-black not-italic dark:text-white">
                    25200 W. Newberry Rd., Newberry, FL 32669
                    <br />
                    (352) 660-2124
                  </address>
                  <a
                    href="mailto:twosistersnewberry@gmail.com"
                    className="mt-1 text-gray-600 dark:text-neutral-400"
                  >
                    twosistersnewberry@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
