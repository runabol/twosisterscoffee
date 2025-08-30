"use client";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";
import { useState } from "react";

interface Category {
  name: string;
  products: Product[];
}

export interface Product {
  name: string;
  prices: {
    small: number;
    medium?: number;
    large?: number;
  };
  image: string;
}

const categories = [
  {
    name: "Classics",
    products: [
      {
        name: "Coffee",
        prices: {
          small: 3.0,
          medium: 3.5,
          large: 4.0,
        },
        image:
          "https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg",
      },
      {
        name: "Americano",
        prices: {
          small: 3.75,
          medium: 4.25,
          large: 4.75,
        },
        image:
          "https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg",
      },
      {
        name: "Latte",
        prices: {
          small: 4.5,
          medium: 5.0,
          large: 5.25,
        },
        image:
          "https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg",
      },
      {
        name: "Macchiato",
        prices: {
          small: 5.0,
          medium: 5.5,
          large: 6.0,
        },
        image:
          "https://images.pexels.com/photos/18424335/pexels-photo-18424335.jpeg",
      },
    ],
  },
  {
    name: "Specialties",
    products: [
      {
        name: "Cafe con Leche",
        prices: {
          small: 4.5,
          medium: 5.25,
          large: 6.0,
        },
        image:
          "https://images.pexels.com/photos/15268786/pexels-photo-15268786.jpeg",
      },
      {
        name: "Cortado",
        prices: {
          small: 4.25,
          medium: 5.0,
          large: 5.75,
        },
        image:
          "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg",
      },
      {
        name: "Espresso Shot",
        prices: {
          small: 1.5,
        },
        image:
          "https://images.unsplash.com/photo-1705952285570-113e76f63fb0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
      {
        name: "Cappuccino",
        prices: {
          small: 4.25,
        },
        image:
          "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=635&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
      {
        name: "Colada (cuban coffee)",
        prices: {
          small: 3.0,
        },
        image:
          "https://images.unsplash.com/photo-1614227373539-d763a95a31a3?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
    ],
  },
  {
    name: "Non-Coffee",
    products: [
      {
        name: "Hot Tea",
        prices: {
          small: 3.5,
        },
        image:
          "https://images.pexels.com/photos/1629185/pexels-photo-1629185.jpeg",
      },
      {
        name: "Hot Chocolate",
        prices: {
          small: 4.5,
        },
        image:
          "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      },
      {
        name: "Smoothie",
        prices: {
          small: 6.0,
        },
        image:
          "https://images.pexels.com/photos/990439/pexels-photo-990439.jpeg",
      },
      {
        name: "Frappe",
        prices: {
          small: 6.0,
        },
        image:
          "https://images.pexels.com/photos/214333/pexels-photo-214333.jpeg",
      },
    ],
  },
  {
    name: "Baked Goods",
    products: [
      {
        name: "Cinammon Roll",
        prices: {
          small: 4.0,
        },
        image:
          "https://images.unsplash.com/photo-1593872571314-4a735d4b27b0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
      {
        name: "Muffin",
        prices: {
          small: 4.0,
        },
        image:
          "https://images.pexels.com/photos/1657343/pexels-photo-1657343.jpeg",
      },
      {
        name: "Bagel",
        prices: {
          small: 3.0,
        },
        image:
          "https://images.unsplash.com/photo-1585841393012-e4ded4a6e2d0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
      {
        name: "Pastelito",
        prices: {
          small: 3.0,
        },
        image:
          "https://images.unsplash.com/photo-1622941367239-8acd68fa946d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
      {
        name: "Empanada",
        prices: {
          small: 4.0,
        },
        image:
          "https://images.unsplash.com/photo-1608039783021-6116a558f0c5?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
      {
        name: "Croqueta",
        prices: {
          small: 2.0,
        },
        image:
          "https://images.unsplash.com/photo-1683694062041-cc62c5390b13?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
    ],
  },
];

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );

  return (
    <div
      className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 mx-auto"
      id="menu"
    >
      <div className="mx-auto">
        <h1 className="font-medium text-black text-3xl sm:text-4xl">
          Our menu
        </h1>
      </div>

      <div className="flex gap-4 mt-5 mb-10">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "text-sm text-gray-800 cursor-pointer outline-none",
              category === selectedCategory && "text-amber-600"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {selectedCategory.products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
