import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-emerald-700">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          {/* Website name */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:static">
            <span className="block h-8 w-auto text-white text-2xl pl-2 pr-5 sm:pl-0 ">
              Touski.ai
            </span>
          </div>
          {/* Desktop menu */}
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <Link href="/">
                <span className="text-gray-300 hover:bg-emerald-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </span>
              </Link>

              <Link href="/GenerateRecipe">
                <span className="text-gray-300 hover:bg-emerald-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Generate Recipe
                </span>
              </Link>

              <Link href="/recipes">
                <span className="text-gray-300 hover:bg-emerald-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  All Recipes
                </span>
              </Link>

              <Link href="/mealplan">
                <span className="text-gray-300 hover:bg-emerald-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Daily Meal Plan
                </span>
              </Link>

              <Link href="/calendar">
                <span className="text-gray-300 hover:bg-emerald-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Calendar
                </span>
              </Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden pr-2">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-emerald-900 focus:outline-none focus:bg-emerald-900 focus:text-white transition duration-150 ease-in-out"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open main menu"
            >
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/">
                <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </span>
              </Link>

              <Link href="/GenerateRecipe">
                <span className="text-gray-300 hover:bg-emerald-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Generate Recipe
                </span>
              </Link>

              <Link href="/mealplan">
                <span className="text-gray-300 hover:bg-emerald-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Daily Meal Plan
                </span>
              </Link>

              <Link href="/projects">
                <span className="text-gray-300 hover:bg-emerald-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Grocery List
                </span>
              </Link>

              <Link href="/calendar">
                <span className="text-gray-300 hover:bg-emerald-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Calendar
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
