import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Coffee",
    priceFrom: 3.0,
    priceTo: 4.0,
    image: "https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg",
  },
  {
    id: 2,
    name: "Americano",
    priceFrom: 3.75,
    priceTo: 4.75,
    image: "https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg",
  },
  {
    id: 3,
    name: "Latte",
    priceFrom: 4.5,
    priceTo: 5.25,
    image: "https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg",
  },
  {
    id: 4,
    name: "Macchiato",
    priceFrom: 5.0,
    priceTo: 6.0,
    image:
      "https://images.pexels.com/photos/18424335/pexels-photo-18424335.jpeg",
  },
];

const categories = [
  {
    id: 1,
    name: "Classics",
    active: true,
  },
  {
    id: 2,
    name: "Specialties",
    active: false,
  },
  {
    id: 3,
    name: "Non-Coffees",
    active: false,
  },
  {
    id: 4,
    name: "Baked Goods",
    active: false,
  },
];

export function ProductGrid() {
  return (
    <div
      className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 mx-auto"
      id="menu"
    >
      <div className="mx-auto">
        <h1 className="font-medium text-black text-3xl sm:text-4xl dark:text-white border-b-1 border-amber-600/15 pb-2">
          Our menu
        </h1>
      </div>

      <div className="flex gap-4 mt-5 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            className={cn(
              "text-sm text-gray-800 cursor-pointer outline-none",
              category.active && "text-amber-600"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
