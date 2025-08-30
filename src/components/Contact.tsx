import { ClockIcon, MapIcon, MapPinIcon } from "lucide-react";

export function Contact() {
  return (
    <div
      id="contact"
      className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto"
    >
      <div className="mb-6 sm:mb-10 max-w-2xl">
        <h2 className="font-medium text-black text-2xl sm:text-4xl">
          Contact us
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
        <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl">
          <img
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
            src="https://images.pexels.com/photos/606545/pexels-photo-606545.jpeg"
            alt="Coffee shop interior"
          />
        </div>

        <div className="space-y-8 lg:space-y-8">
          <div>
            <h3 className="mb-2 font-semibold text-black">Our address</h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="flex gap-4">
                <MapPinIcon className="size-5" />
                <div className="grow">
                  <p className="text-sm text-gray-600">Florida, USA</p>
                  <address className="mt-1 text-black not-italic">
                    25200 W. Newberry Rd., Newberry, FL 32669
                    <br />
                    (352) 660-2124
                  </address>
                  <a
                    href="mailto:twosistersnewberry@gmail.com"
                    className="mt-1 text-gray-600"
                  >
                    twosistersnewberry@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-black">Hours</h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="flex gap-4">
                <ClockIcon className="size-5" />
                <div className="grow">
                  <p className="text-sm text-gray-600">Monday - Friday</p>
                  <p className="text-sm text-gray-600">7:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-600">Saturday</p>
                  <p className="text-sm text-gray-600">8:00 AM - 5:00 PM</p>
                  <p className="text-sm text-gray-600">Closed on Sunday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
