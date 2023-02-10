import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [ingredients, setIngredients] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/result?ingredients=${ingredients}`);
  };

  const handleChange = (event) => {
    setIngredients(event.target.value);
  };

  const addIngredient = (ingredient) => {
    setIngredients((prevIngredients) =>
      prevIngredients ? `${prevIngredients}, ${ingredient}` : ingredient
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      <div className="flex flex-col items-center lg:w-1/2 w-120 bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Recipe Generator
        </h1>
        <p className="text-lg text-center mb-8 text-gray-600">
          Enter your ingredients to get a recipe
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              className="appearance-none w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              value={ingredients}
              onChange={handleChange}
              placeholder="Enter ingredients"
            />
          </div>
          <button
            className="w-full bg-teal-800 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
            type="submit"
          >
            Generate Recipe
          </button>
        </form>
        <div className="flex flex-wrap justify-center mt-6">
          <button
            onClick={() => addIngredient("Milk")}
            className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
          >
            Milk
          </button>
          <button
            onClick={() => addIngredient("Eggs")}
            className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
          >
            Eggs
          </button>
          <button
            onClick={() => addIngredient("Bread")}
            className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
          >
            Bread
          </button>
          <button
            onClick={() => addIngredient("Chicken")}
            className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
          >
            Chicken
          </button>
          <button
            onClick={() => addIngredient("Beef")}
            className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
          >
            Beef
          </button>
          <button
            onClick={() => addIngredient("Mayonnaise")}
            className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
          >
            Mayonnaise
          </button>
          <button
            onClick={() => addIngredient("Cheese")}
            className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
          >
            Cheese
          </button>
          <button
            onClick={() => addIngredient("onions")}
            className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
          >
            Onions
          </button>
          <button
            onClick={() => addIngredient("garlic")}
            className="m-1 h-10 px-6 text-sm font-semibold rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300"
          >
            Garlic
          </button>
        </div>
      </div>
    </div>
  );
}
