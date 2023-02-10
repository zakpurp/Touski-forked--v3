import Link from "next/link";

function Hero() {
  return (
    <div
      className="w-screen min-h-screen text-white"
      style={{
        background:
          "linear-gradient(120deg, rgba(148, 158, 135, 1) 20%, rgba(108, 129, 116, 1) 50%, rgba(69, 95, 88, 1) 100%)",
      }}
    >
      <div class="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
        <div class="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Turn Any Ingredients into Awesome Recipes
          </h1>
          <p className="text-xl mb-8">
            Not sure what to cook? Type in the ingredients you have and we will
            generate a recipe in seconds.
          </p>
          <div className="flex justify-center mx-auto">
            <Link href="/GenerateRecipe">
              <button className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
                Generate a Recipe
              </button>{" "}
            </Link>
            <Link href="/recipes">
              <button className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
                See all recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
