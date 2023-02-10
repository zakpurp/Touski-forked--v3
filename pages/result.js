import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { saveRecipe } from "../savefunction"; // Add this line

export default function Result() {
  const router = useRouter();
  const { ingredients } = router.query;

  const [recipe, setRecipe] = useState("");

  useEffect(() => {
    if (ingredients) {
      fetch(`/api/generateRecipe?ingredients=${ingredients}`)
        .then((response) => response.json())
        .then((data) => {
          setRecipe(data.data);
          saveRecipe({
            ingredients: ingredients.split(", "),
            recipe: data.data,
          }); // Add this line
        });
    }
  }, [ingredients]);

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full px-4 sm:w-1/2 flex-1 text-center">
          <h1 className="text-6xl font-bold">Generating recipe...</h1>
        </main>
      </div>
    );
  }

  // Parse the recipe
  const lines = recipe.split("\n");
  const title = lines[0].replace("Title: ", "");
  const ingredientsStart = lines.indexOf("Ingredients:") + 1;
  const instructionsStart = lines.indexOf("Instructions:");
  const ingredientsList = lines.slice(ingredientsStart, instructionsStart);
  const steps = lines.slice(instructionsStart + 1);
  const filteredSteps = steps.filter((step) => !/^\d+$/.test(step.trim()));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full px-4 sm:w-1/2 flex-1 text-center">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold">{title}</h1>

          <h2 className="mt-5 mb-5 text-2xl">
            <b>Ingredients</b>
          </h2>
          <ul>
            {ingredientsList.map((ingredient, index) => (
              <li key={index} className="mt-3 text-xl">
                {ingredient}
              </li>
            ))}
          </ul>

          <h2 className="mt-5 mb-5 text-2xl">
            <b>Instructions</b>
          </h2>
          {steps.length > 0 ? (
            steps
              .filter((step) => step.trim() !== "") // Filter out empty or whitespace-only lines
              .map((step, index) => (
                <p key={index} className="mt-3 text-xl">
                  {index + 1}. {step.replace(/^\d+\. /, "")}
                </p>
              ))
          ) : (
            <p className="mt-3 text-xl">Generating recipe...</p>
          )}
        </div>
      </main>
    </div>
  );
}
