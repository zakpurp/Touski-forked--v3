import { useState } from "react";
import { useRouter } from "next/router";

export default function MealPlan() {
  const [diet, setDiet] = useState("");
  const [caloricGoal, setCaloricGoal] = useState("");
  const [includeFoods, setIncludeFoods] = useState("");
  const [excludeFoods, setExcludeFoods] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `/api/mealplanapi?diet=${diet}&caloricGoal=${caloricGoal}&includeFoods=${includeFoods}&excludeFoods=${excludeFoods}`
    );
    const data = await response.json();
    router.push(`/mealplanresult?mealplan=${JSON.stringify(data)}`);
  };

  return (
    <div className="p-10 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Generate Meal Plan</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          placeholder="Diet"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={caloricGoal}
          onChange={(e) => setCaloricGoal(e.target.value)}
          placeholder="Caloric Goal"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={includeFoods}
          onChange={(e) => setIncludeFoods(e.target.value)}
          placeholder="Include Foods"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={excludeFoods}
          onChange={(e) => setExcludeFoods(e.target.value)}
          placeholder="Exclude Foods"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generate
        </button>
      </form>
    </div>
  );
}
