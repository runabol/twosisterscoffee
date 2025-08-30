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

export function ProductGrid() {
  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
      <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
        <h1 className="font-medium text-black text-3xl sm:text-4xl dark:text-white">
          New this season
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 lg:mt-20 text-center">
        <a
          className="relative inline-block font-medium md:text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-yellow-400 hover:before:bg-black focus:outline-hidden focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
          href="#"
        >
          View all Products
        </a>
      </div>
    </div>
  );
}
