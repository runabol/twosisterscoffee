interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
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
        <div className="pt-4 mb-4">
          <h3 className="font-medium md:text-lg text-black dark:text-white">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-white">
            3 sizes available
          </p>
          <p className="mt-2 font-semibold text-black dark:text-white">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <a className="after:absolute after:inset-0 after:z-1" href="#" />
      </div>

      <div className="mt-auto">
        <a
          className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-amber-300 text-black hover:bg-amber-500 focus:outline-hidden focus:bg-amber-500 transition disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Details
        </a>
      </div>
    </div>
  );
}
