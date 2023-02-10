import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { diet, caloricGoal, includeFoods, excludeFoods } = req.query;

  const prompt = `Generate a meal plan for a ${diet} diet with a daily caloric goal of ${caloricGoal} calories. Include the following foods: ${includeFoods}. Exclude the following foods: ${excludeFoods}.`;

  const gpt3Response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a knowledgeable nutritionist. Please generate a detailed meal plan based on the user's dietary preferences.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  res.status(200).json({ data: gpt3Response.data.choices[0].message.content });
}
