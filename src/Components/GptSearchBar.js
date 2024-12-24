import React from "react";
import Lang from "../Utils/Lang";
import { useSelector } from "react-redux";
import { useRef } from "react";
import client from "../Utils/openai";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);
    // make an API call to GPT API to get the movie results
    const gptQuery =
      "Act as a movie recommendation system suggest some movies for the query : " +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated like the example result given ahead . Example : Gadar , Koi Mil Gaya , Dewana , Welcome , Housefull ";

    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };
  const preferredLanguage = useSelector((store) => store?.config?.lang);
  console.log(preferredLanguage);
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="px-2 py-2 m-2 col-span-9"
          placeholder={Lang[preferredLanguage]?.GptSearchPlaceholder}
        />
        <button
          className="px-2 py-2 m-2 bg-red-500 text-slate-200 col-span-3 rounded-lg hover:bg-red-700  font-semibold text-2xl"
          onClick={handleGPTSearchClick}
        >
          {Lang[preferredLanguage]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
