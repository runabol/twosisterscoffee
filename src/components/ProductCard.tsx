interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  tastingNotes: string;
  origin: string;
  region: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col">
      <div className="relative">
        <div className="aspect-4/4 overflow-hidden rounded-2xl">
          <img
            className="size-full object-cover rounded-2xl"
            src={product.image}
            alt={`${product.name} Coffee`}
          />
        </div>
        <div className="pt-4">
          <h3 className="font-medium md:text-lg text-black dark:text-white">
            {product.name}
          </h3>
          <p className="mt-2 font-semibold text-black dark:text-white">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <a className="after:absolute after:inset-0 after:z-1" href="#" />
      </div>

      <div className="mb-2 mt-4 text-sm">
        <div className="flex flex-col">
          <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="font-medium text-black dark:text-white">
                  Tasting Notes:
                </span>
              </div>
              <div className="text-end">
                <span className="text-black dark:text-white">
                  {product.tastingNotes}
                </span>
              </div>
            </div>
          </div>

          <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="font-medium text-black dark:text-white">
                  Origin:
                </span>
              </div>
              <div className="flex justify-end">
                <span className="text-black dark:text-white">
                  {product.origin}
                </span>
              </div>
            </div>
          </div>

          <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="font-medium text-black dark:text-white">
                  Region:
                </span>
              </div>
              <div className="text-end">
                <span className="text-black dark:text-white">
                  {product.region}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <a
          className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Buy now
        </a>
      </div>
    </div>
  );
}
