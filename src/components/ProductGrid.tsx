"use client";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { categories, Category } from "@/content/products";
import { useQueryState } from "nuqs";

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useQueryState("category");

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
            key={category.slug}
            onClick={() => setSelectedCategory(category.slug)}
            className={cn(
              "text-sm text-gray-800 cursor-pointer outline-none hover:text-amber-600",
              category.slug === (selectedCategory || categories[0].slug) &&
                "text-amber-600"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {categories
          .find(
            (category) =>
              category.slug === (selectedCategory || categories[0].slug)
          )
          ?.products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
      </div>
    </div>
  );
}
