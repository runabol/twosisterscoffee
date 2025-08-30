import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Cappuccino",
    price: 5.5,
    image:
      "https://images.unsplash.com/photo-1473923377535-0002805f57e8?q=80&w=1008&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 2,
    name: "El Mirador",
    price: 7.5,
    image: "https://preline.co/assets/img/pro/coffee-shop/img2.png",
  },
  {
    id: 3,
    name: "Pedra Branca",
    price: 2.1,
    image: "https://preline.co/assets/img/pro/coffee-shop/img5.png",
  },
  {
    id: 4,
    name: "Beija Flor",
    price: 12.5,
    image: "https://preline.co/assets/img/pro/coffee-shop/img7.png",
  },
  {
    id: 5,
    name: "Beija Flor",
    price: 7.5,
    image: "https://preline.co/assets/img/pro/coffee-shop/img3.png",
  },
  {
    id: 6,
    name: "El Mirador",
    price: 7.5,
    image: "https://preline.co/assets/img/pro/coffee-shop/img2.png",
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
