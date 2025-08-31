import Image from "next/image";
import { Product } from "@/content/products";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col">
      <div className="relative">
        <Link href={`/product/${product.slug}`}>
          <div className="aspect-square overflow-hidden rounded-2xl shadow-lg shadow-black/30">
            <Image
              className="size-full object-cover rounded-2xl"
              src={product.image}
              alt={`${product.name}`}
              width={500}
              height={500}
            />
          </div>
        </Link>
        <div className="pt-4 mb-4">
          <h3 className="font-medium md:text-lg text-black">{product.name}</h3>
          <p className="mt-2 text-sm text-gray-700">
            {Object.keys(product.prices).length}{" "}
            {Object.keys(product.prices).length === 1 ? "size" : "sizes"}{" "}
            available
          </p>
          <p className="mt-2 font-semibold text-black flex items-center gap-x-1">
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
    </div>
  );
}
