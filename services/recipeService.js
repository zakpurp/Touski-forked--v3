// recipeService.js

import { db } from "../firebase";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";

export const getAllRecipes = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "recipes"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

export const getRecipeById = async (recipeId) => {
  try {
    const recipeRef = doc(db, "recipes", recipeId);
    const recipeDoc = await getDoc(recipeRef);
    return recipeDoc.exists() ? recipeDoc.data() : null;
  } catch (error) {
    console.error("Error fetching recipe:", error);
  }
};
