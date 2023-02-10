import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getRecipeById } from "../../../services/recipeService"; // Update the import path if needed

export default function RecipeDetail() {
  const router = useRouter();
  const { recipeId, slug } = router.query;
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    if (recipeId) {
      getRecipeById(recipeId).then(setRecipeData);
    }
  }, [recipeId]);

  if (!recipeData) {
    return <div>Loading...</div>;
  }
// Parse the recipe
const lines = recipeData.recipe.split("\n");
const title = lines[0].replace("Title: ", "");
const ingredientsStart = lines.indexOf("Ingredients:") + 1;
const instructionsStart = lines.indexOf("Instructions:");
const ingredientsList = lines.slice(ingredientsStart, instructionsStart);
const steps = lines.slice(instructionsStart + 1);
const currentURL = process.env.NEXT_PUBLIC_BASE_URL + router.asPath; // Assuming you have the base URL defined in your environment variables

return (
  <div className="container mx-auto p-8">
<Head>
<title>{title} Recipe</title>
<meta name="description" content={`Easy and fast ${title} recipe with simple ingredients and steps.`} />
<meta name="keywords" content={`${title}, recipe, cooking, ingredients`} />
<meta property="og:title" content={`${title} Recipe`} />
<meta property="og:description" content={`Easy and fast ${title} recipe with simple ingredients and steps.`} />
<meta property="og:type" content="article" />
<meta property="og:url" content={currentURL} /> {/* Replace with the current URL */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={`${title} Recipe`} />
<meta name="twitter:description" content={`Easy and fast ${title} recipe with simple ingredients and steps.`} />
<link rel="canonical" href={currentURL} /> {/* Replace with the canonical URL */}
</Head>
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
    <ul className="list-disc pl-8 mb-4">
      {ingredientsList.map((ingredient, index) => (
        <li key={index} className="mb-1">{ingredient}</li>
      ))}
    </ul>
    <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
    {steps.map((step, index) => (
      <p key={index} className="mb-2">{step}</p>
    ))}
  </div>
);
}

