"use client";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { categories } from "@/content/products";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const product = categories
    .flatMap((category) => category.products)
    .find((product) => product.slug === params.slug);
  return (
    <>
      <AnnouncementBanner />
      <div className="max-w-7xl mx-auto">
        <Header />
        <main id="content">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
            <button
              onClick={() => router.back()}
              className="text-sm text-amber-600 hover:text-amber-500 flex items-center cursor-pointer"
            >
              <ChevronLeftIcon className="size-4" /> Back to Menu
            </button>
          </div>
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8 mx-auto">
            {product && (
              <div
                key={product.slug}
                className="flex flex-col lg:flex-row gap-8"
              >
                <div className="rounded-2xl overflow-hidden shrink-0 shadow-lg shadow-black/30">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="object-cover aspect-video rounded-2xl h-96"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl font-bold text-black">
                    {product.name}
                  </h1>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm text-amber-600">
                      ${product.prices.small.toFixed(2)}
                    </p>
                    {product.prices.large && (
                      <>
                        <span className="h-0.5 w-2 bg-gray-400" />
                        <p className="text-sm text-amber-600">
                          ${product.prices.large.toFixed(2)}
                        </p>
                      </>
                    )}
                  </div>
                  <p className="text-lg text-gray-500">{product.description}</p>
                  <div className="mb-2 mt-4 text-sm">
                    <div className="flex flex-col">
                      {Object.keys(product.prices).length > 1 && (
                        <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <span className="font-medium text-black dark:text-white">
                                Sizes available:
                              </span>
                            </div>

                            <div className="flex justify-end">
                              <span className="text-black dark:text-white">
                                {Object.keys(product.prices)
                                  .map(
                                    (price) =>
                                      price.charAt(0).toUpperCase() +
                                      price.slice(1)
                                  )
                                  .join(", ")}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                      {product.flavors && (
                        <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <span className="font-medium text-black dark:text-white">
                                Flavors:
                              </span>
                            </div>

                            <div className="flex justify-end">
                              <span className="text-black dark:text-white">
                                Vanilla, Chocolate, Strawberry
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {product.sugarFreeAvailable && (
                        <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <span className="font-medium text-black dark:text-white">
                                Sugar Free Available:
                              </span>
                            </div>

                            <div className="text-end">
                              <span className="text-black dark:text-white">
                                Yes
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                      {product.sugarFreeAvailable && (
                        <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <span className="font-medium text-black dark:text-white">
                                Extra Shot Available:
                              </span>
                            </div>

                            <div className="text-end">
                              <span className="text-black dark:text-white">
                                $1.00
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
