import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const prompt = `Ingredients: ${req.query.ingredients}\n\nRecipe: `;
  const gpt3Response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a professional chef. Given the ingredients in the user's fridge, the type of cuisine and dietary Restrictions, create a detailed recipe. The recipe should start with the title (Do not include Title: before the actual title), followed by a list of ingredients with their quantities, and finally, the instructions to prepare the dish (please don't number the instruction steps). You don't have to include all the ingredients provided. Here are the ingredients : ",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  res.status(200).json({ data: gpt3Response.data.choices[0].message.content });
}
