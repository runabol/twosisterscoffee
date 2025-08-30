import Image from "next/image";
import { Product } from "./ProductGrid";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col">
      <div className="relative">
        <a href="#">
          <div className="aspect-4/4 overflow-hidden rounded-2xl">
            <Image
              className="size-full object-cover rounded-2xl"
              src={product.image}
              alt={`${product.name} Coffee`}
              width={500}
              height={500}
            />
          </div>
        </a>
        <div className="pt-4 mb-4">
          <h3 className="font-medium md:text-lg text-black dark:text-white">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-white">
            {Object.keys(product.prices).length}{" "}
            {Object.keys(product.prices).length === 1 ? "size" : "sizes"}{" "}
            available
          </p>
          <p className="mt-2 font-semibold text-black dark:text-white flex items-center gap-x-1">
            <span className="text-amber-600 text-md">
              ${product.prices?.small.toFixed(2)}
            </span>
            {product.prices?.large && (
              <>
                <span className="h-0.5 w-2 bg-gray-400" />
                <span className="text-amber-600 text-md">
                  ${product.prices?.large.toFixed(2)}
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      {/* <div className="mt-auto">
        <a
          className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-amber-300 text-black hover:bg-amber-500 focus:outline-hidden focus:bg-amber-500 transition disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Details
        </a>
      </div> */}
    </div>
  );
}
