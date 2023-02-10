import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

export const saveRecipe = async (recipe) => {
  try {
    const docRef = await addDoc(collection(db, "recipes"), recipe);
    return docRef.id; // Return the ID of the document
  } catch (error) {
    console.error("Error saving recipe:", error);
  }
};
