import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Beija Flor",
    price: 5.5,
    image: "https://preline.co/assets/img/pro/coffee-shop/img1.png",
    tastingNotes: "Hazelnut, Grape, Milk Chocolate",
    origin: "Brazil",
    region: "San Paulo",
  },
  {
    id: 2,
    name: "El Mirador",
    price: 7.5,
    image: "https://preline.co/assets/img/pro/coffee-shop/img2.png",
    tastingNotes: "Red Apple, Caramel, Almond",
    origin: "Colombia",
    region: "Manizales",
  },
  {
    id: 3,
    name: "Pedra Branca",
    price: 2.1,
    image: "https://preline.co/assets/img/pro/coffee-shop/img5.png",
    tastingNotes: "Red Apple, Walnut, Milk Chocolate",
    origin: "Brazil",
    region: "San Paulo",
  },
  {
    id: 4,
    name: "Beija Flor",
    price: 12.5,
    image: "https://preline.co/assets/img/pro/coffee-shop/img7.png",
    tastingNotes: "Hazelnut, Grape, Milk Chocolate",
    origin: "Brazil",
    region: "San Paulo",
  },
  {
    id: 5,
    name: "Beija Flor",
    price: 7.5,
    image: "https://preline.co/assets/img/pro/coffee-shop/img3.png",
    tastingNotes: "Apricot, Cashew, Praline",
    origin: "Brazil",
    region: "San Paulo",
  },
  {
    id: 6,
    name: "El Mirador",
    price: 7.5,
    image: "https://preline.co/assets/img/pro/coffee-shop/img2.png",
    tastingNotes: "Red Apple, Caramel, Almond",
    origin: "Colombia",
    region: "Manizales",
  },
];

const categories = [
  {
    id: 1,
    name: "Cappuccino",
    active: true,
  },
  {
    id: 2,
    name: "Espresso",
    active: false,
  },
  {
    id: 3,
    name: "Latte",
    active: false,
  },
  {
    id: 4,
    name: "Flat White",
    active: false,
  },
  {
    id: 5,
    name: "Americano",
    active: false,
  },
];

export function ProductGrid() {
  return (
    <div
      className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto"
      id="menu"
    >
      <div className="mx-auto">
        <h1 className="font-medium text-black text-3xl sm:text-4xl dark:text-white">
          Our menu
        </h1>
      </div>

      <div className="flex gap-4 mt-4 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            className={cn(
              "text-sm text-gray-700",
              category.active && "text-amber-500"
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
