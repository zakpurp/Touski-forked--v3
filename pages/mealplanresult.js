import { useRouter } from "next/router";

export default function MealPlanResult() {
  const router = useRouter();
  const mealPlanResponse = router.query.mealplan;

  if (!mealPlanResponse) {
    return <div>Loading...</div>;
  }

  // Parse the JSON object
  const parsedResponse = JSON.parse(mealPlanResponse);

  // Extract the meal plan from the data property
  const mealPlan = parsedResponse.data;

  // Split the meal plan into individual days
  const trimmedMealPlan = mealPlan.split("\n\n").slice(0, -3);
  const days = trimmedMealPlan.map((day) => {
    const [dayTitle, ...meals] = day.split("\n- ");
    return {
      dayTitle,
      meals: meals.map((meal) => `- ${meal}`),
    };
  });

  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl mb-8">Meal Plan</h1>
      {days.map(({ dayTitle, meals }) => (
        <div key={dayTitle} className="mb-8">
          <h2 className="font-bold text-xl mb-4">{dayTitle}</h2>
          <ul className="list-disc ml-5">
            {meals.map((meal) => (
              <li key={meal}>{meal}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
