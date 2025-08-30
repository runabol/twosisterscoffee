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
  sizes: {
    small: number;
    medium: number;
    large: number;
  };
  image: string;
}

const categories = [
  {
    name: "Classics",
    products: [
      {
        name: "Coffee",
        sizes: {
          small: 3.0,
          medium: 3.5,
          large: 4.0,
        },
        image:
          "https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg",
      },
      {
        name: "Americano",
        sizes: {
          small: 3.75,
          medium: 4.25,
          large: 4.75,
        },
        image:
          "https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg",
      },
      {
        name: "Latte",
        sizes: {
          small: 4.5,
          medium: 5.0,
          large: 5.25,
        },
        image:
          "https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg",
      },
      {
        name: "Macchiato",
        sizes: {
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
        sizes: {
          small: 4.5,
          medium: 5.25,
          large: 6.0,
        },
        image:
          "https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg",
      },
    ],
  },
  // {
  //   name: "Non-Coffees",
  //   active: false,
  // },
  // {
  //   name: "Baked Goods",
  //   active: false,
  // },
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
        <h1 className="font-medium text-black text-3xl sm:text-4xl dark:text-white border-b-1 border-amber-600/15 pb-2">
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
