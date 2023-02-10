import { useEffect, useState } from "react";
import { getAllRecipes } from "../services/recipeService";
import Link from "next/link";
import slugify from "slugify";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes().then(setRecipes);
  }, []);

  return (
    <div className="container mx-auto py-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="recipe-card p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-200"
        >
          <Link
            href={`/recipes/${recipe.id}/${slugify(
              recipe.recipe.split("\n")[0].replace("Title: ", "")
            )}`}
          >
            <h2 className="text-xl lg:text-2xl font-bold mb-4 cursor-pointer">
              {recipe.recipe.split("\n")[0].replace("Title: ", "")}
            </h2>
          </Link>
          <p className="text-gray-600">{recipe.ingredients.join(", ")}</p>
          <Link
            href={`/recipes/${recipe.id}/${slugify(
              recipe.recipe.split("\n")[0].replace("Title: ", "")
            )}`}
          >
            <button className="w-full bg-amber-600 text-white font-bold py-2 rounded-md hover:bg-amber-900 transition-colors duration-300 mt-4">
              Read Recipe
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
