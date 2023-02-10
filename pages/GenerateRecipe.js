import { useState } from "react";
import { useRouter } from "next/router";
import Hero from "../components/Hero";

export default function GenerateRecipe() {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(
      `/result?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestrictions}`
    );
  };

  const handleChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleCuisineChange = (event) => {
    setCuisine(event.target.value);
  };

  const handleDietaryRestrictionsChange = (event) => {
    setDietaryRestrictions(event.target.value);
  };

  const addIngredient = (ingredient) => {
    setIngredients((prevIngredients) =>
      prevIngredients ? `${prevIngredients}, ${ingredient}` : ingredient
    );
  };

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      <div className="flex flex-col items-center lg:w-3/4 w-160 bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Recipe Generator
        </h1>

        <p className="text-lg text-center mb-8 text-gray-600">
          Enter your ingredients to get a recipe
        </p>

        <button
          onClick={toggleAdvanced}
          className="mb-6 text-teal-600 hover:underline"
        >
          {showAdvanced ? "Hide Advanced Settings" : "Show Advanced Settings"}
        </button>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="appearance-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              value={ingredients}
              onChange={handleChange}
              placeholder="Enter ingredients"
            />
          </div>

          <div className="flex flex-wrap justify-center mt-4 mb-6">
            <button
              type="button" // set the type to button
              onClick={() => addIngredient("Milk")}
              className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
            >
              Milk
            </button>
            <button
              type="button" // set the type to button
              onClick={() => addIngredient("Eggs")}
              className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
            >
              Eggs
            </button>
            <button
              type="button" // set the type to button
              onClick={() => addIngredient("Bread")}
              className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
            >
              Bread
            </button>
            <button
              type="button" // set the type to button
              onClick={() => addIngredient("Chicken")}
              className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
            >
              Chicken
            </button>
            <button
              type="button" // set the type to button
              onClick={() => addIngredient("Beef")}
              className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
            >
              Beef
            </button>
            <button
              type="button" // set the type to button
              onClick={() => addIngredient("Mayonnaise")}
              className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
            >
              Mayonnaise
            </button>
            <button
              type="button" // set the type to button
              onClick={() => addIngredient("Cheese")}
              className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
            >
              Cheese
            </button>
            <button
              type="button" // set the type to button
              onClick={() => addIngredient("onions")}
              className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
            >
              Onions
            </button>
            <button
              type="button" // set the type to button
              onClick={() => addIngredient("garlic")}
              className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
            >
              Garlic
            </button>
          </div>

          {showAdvanced && (
            <>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cuisine"
                >
                  Cuisine
                </label>
                <select
                  className="appearance-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={cuisine}
                  onChange={handleCuisineChange}
                  id="cuisine"
                >
                  <option value="">Select cuisine type</option>
                  <option value="asian">Asian</option>
                  <option value="italian">Italian</option>
                  <option value="american">American</option>
                  <option value="quick">Quick Recipe</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="dietary"
                >
                  Dietary Restrictions
                </label>
                <input
                  className="appearance-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="text"
                  value={dietaryRestrictions}
                  onChange={handleDietaryRestrictionsChange}
                  placeholder="Enter dietary restrictions"
                  id="dietary"
                />
              </div>
            </>
          )}

          <button
            className="w-full bg-teal-800 text-white font-bold py-2 rounded-md hover:bg-emerald-950 transition-colors duration-300"
            type="submit"
          >
            Generate Recipe
          </button>
        </form>
      </div>
    </div>
  );
}
