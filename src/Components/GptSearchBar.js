import React from "react";
import Lang from "../Utils/Lang";
import { useSelector } from "react-redux";
import { useRef } from "react";
import genAI from "../Utils/GeminiAi";
import { API_OPTIONS } from "../Utils/constant";

const GptSearchBar = () => {
  const searchText = useRef(null);
  {
    /*Search Function where I will search movie in TMDB*/
  }
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  };
  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);
    // make an API call to Gemini API to get the movie results
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResult = await model.generateContent(gptQuery);
    
    {/* With the help of split(",") we are able to get result data in the form of string of array */}

    const gptMovies = gptResult?.response?.candidates[0]?.content?.parts[0]?.text.split(",");
    console.log(gptMovies);

    {
      /*For each movie now I will search in TMDB API*/

      /* Here , searchMovieTMDB will be called 5 times and it will return promise not results , because async function returns promises immmediately and it will take time to return results
      Hence , it will return array of promises in the form : [promise , promise , promise , promise , promise] */


      /* Time, Tide and JavaScript waits for none */
    }

    const promiseArray = gptMovies.map((movie) =>searchMovieTMDB(movie));

    /*Promise.all() ==> this function basically takes array of promises and it is used to resolve all promises*/ 

    // Here I wrote await because now it will wait until all promises are resolved

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);


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
