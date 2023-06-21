import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import FilterState from "@/components/FilterState";

const TransitionStateTesting = ({ filter, setFilter }) => {
  const [step, setStep] = useState(0);
  const [inputs, setInputs] = useState([]);
  const [filterText, setFilterText] = useState("");

  const [history, setHistory] = useState([]);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (step <= 3) {
      let currentStep = step;
      let incStep = currentStep + 1;
      setStep(incStep);
      console.log(step);
    } else {
      console.log("Done");
      setStep(4);
    }
  };

  const transitionFormSubmit = (e) => {
    e.preventDefault();
    console.log(filterText);
    if (inputs.length === 0) {
      setInputs([filterText]);
    } else {
      setInputs([...inputs, filterText]);
    }
    setFilterText("");
    handleNext();
    console.log(inputs);
  };

  const fetchMovies = async () => {
    setResponse([]);
    console.log("Getting response from OpenAI");
    setLoading(true);
    const aiData = await fetch("/api/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `Create a valid JSON array and recommend me just the title of 3 movies that are similar to these 3 movies: ${inputs[0]}, ${inputs[1]}, ${inputs[2]} following this format:
        [movie title, movie title, movie title]
        The array should be trimmed of all white space
        `,
      }),
    }).then((aiData) => aiData.json());
    setLoading(false);
    const arrayData = JSON.parse(aiData.data.text);
    setResponse(arrayData);
    console.log(typeof arrayData);
    console.log(response);
  };

  const promptSubmit = () => {
    setStep(5);
    fetchMovies();
  };

  return (
    <div className="bg-zinc-600">
      {loading && (
        <div className="flex justify-center items-center text-3xl font-bold">
          loading...
        </div>
      )}
      {step === 0 && (
        <div className="flex flex-col items-center mb-6 h-56 justify-between pt-10">
          <h3 className="text-lg text-zinc-200">
            Get movie recommendations by:
          </h3>
          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            className="bg-zinc-500 bg-opacity-20 rounded-sm p-2 h-14 border-b-2 border-zinc-700 text-zinc-200 focus:border-purple-500 transition-colors"
          >
            <option value="Other Movies">Other Movies</option>
            <option value="Vibe">Vibe</option>
          </select>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className="w-[50px] h-[50px] bg-purple-700"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      )}
      {step === 1 && filter === "Vibe" && (
        <div>
          <form
            onSubmit={(e) => transitionFormSubmit(e)}
            onChange={(e) => setFilterText(e.target.value)}
          >
            <div className="group p-4">
              <label
                htmlFor="movie-input"
                className="ml-4 group-focus-within:text-purple-500 transition-all group-focus-within:text-xs group-focus-within:ml-0 "
              >
                Vibe
              </label>
              <input
                className="w-full focus:placeholder-opacity-0 placeholder-zinc-300 bg-transparent border-b-2 border-zinc-700 px-2 focus:outline-none focus:border-purple-500 transition-colors"
                id="movie-input"
                placeholder="Enter the vibe you'd like the movie to have"
              ></input>
            </div>
            <div className="flex justify-center items-center my-6">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className="w-[50px] h-[50px] bg-purple-700"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      )}{" "}
      {step === 1 && filter === "Other Movies" && (
        <div>
          <form
            onSubmit={(e) => transitionFormSubmit(e)}
            onChange={(e) => setFilterText(e.target.value)}
          >
            <div className="group p-4">
              <label
                htmlFor="movie-input"
                className="ml-4 group-focus-within:text-purple-500 transition-all group-focus-within:text-xs"
              >
                Movie 1
              </label>
              <input
                className="w-full placeholder-zinc-300 bg-transparent border-b-2 border-zinc-700 px-2 focus:outline-none focus:border-purple-500 transition-colors"
                id="movie-input"
                placeholder="Enter the name of a movie you like"
              ></input>
            </div>
            <div className="flex justify-center items-center my-4 mb-6">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className="w-[50px] h-[50px] bg-purple-700"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      )}
      {step === 2 && filter === "Other Movies" && (
        <div>
          <form
            onSubmit={(e) => transitionFormSubmit(e)}
            onChange={(e) => setFilterText(e.target.value)}
          >
            <div className="group p-4">
              <label
                htmlFor="movie-input"
                className="ml-4 group-focus-within:text-purple-500 transition-all group-focus-within:text-xs"
              >
                Movie 2
              </label>
              <input
                className="w-full placeholder-zinc-300 bg-transparent border-b-2 border-zinc-700 px-2 focus:outline-none focus:border-purple-500 transition-colors"
                id="movie-input"
                placeholder="Enter the name of a movie you like"
              ></input>
            </div>
            <div className="flex justify-center items-center my-4 mb-6">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className="w-[50px] h-[50px] bg-purple-700"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      )}{" "}
      {step === 2 && filter === "Vibe" && (
        <div>
          <form
            onSubmit={(e) => transitionFormSubmit(e)}
            onChange={(e) => setFilterText(e.target.value)}
          >
            <div className="group p-4">
              <label
                htmlFor="movie-input"
                className="ml-4 group-focus-within:text-purple-500 transition-all group-focus-within:text-xs group-focus-within:ml-0 "
              >
                Setting
              </label>
              <input
                className="w-full focus:placeholder-opacity-0 placeholder-zinc-300 bg-transparent border-b-2 border-zinc-700 px-2 focus:outline-none focus:border-purple-500 transition-colors"
                id="movie-input"
                placeholder="Enter where you'd like the movie to take place"
              ></input>
            </div>
            <div className="flex justify-center items-center my-6">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className="w-[50px] h-[50px] bg-purple-700"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      )}
      {step === 3 && filter === "Other Movies" && (
        <div>
          <form
            onSubmit={(e) => transitionFormSubmit(e)}
            onChange={(e) => setFilterText(e.target.value)}
          >
            <div className="group p-4">
              <label
                htmlFor="movie-input"
                className="ml-4 group-focus-within:text-purple-500 transition-all group-focus-within:text-xs"
              >
                Movie 3
              </label>
              <input
                className="w-full placeholder-zinc-300 bg-transparent border-b-2 border-zinc-700 px-2 focus:outline-none focus:border-purple-500 transition-colors"
                id="movie-input"
                placeholder="Enter the name of a movie you like"
              ></input>
            </div>
            <div className="flex justify-center items-center my-4 mb-6">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className="w-[50px] h-[50px] bg-purple-700"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      )}
      {step === 3 && filter === "Vibe" && (
        <div>
          <form
            onSubmit={(e) => transitionFormSubmit(e)}
            onChange={(e) => setFilterText(e.target.value)}
          >
            <div className="group p-4">
              <label
                htmlFor="movie-input"
                className="ml-4 group-focus-within:text-purple-500 transition-all group-focus-within:text-xs group-focus-within:ml-0 "
              >
                Setting
              </label>
              <input
                className="w-full placeholder:text-xs focus:placeholder-opacity-0 placeholder-zinc-300 bg-transparent border-b-2 border-zinc-700 px-2 focus:outline-none focus:border-purple-500 transition-colors"
                id="movie-input"
                placeholder="Enter any other key features you want your movie to have "
              ></input>
            </div>
            <div className="flex justify-center items-center my-6">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className="w-[50px] h-[50px] bg-purple-700"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      )}
      {step === 4 && filter === "Other Movies" && (
        <div className="w-full h-full">
          <div className="w-full flex flex-col items-center  justify-center p-2">
            <h1 className="text-xl font-bold">Your Favorite Movies:</h1>
            {inputs.map((ele, i) => {
              return (
                <ul className="p-1" key={i}>
                  {ele}
                </ul>
              );
            })}
          </div>
          <div className=" flex justify-center pt-6 mb-4">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className="w-[50px] h-[50px] bg-purple-700"
              onClick={promptSubmit}
            >
              {" "}
              Submit
            </Button>
          </div>
        </div>
      )}
      {step === 4 && filter === "Vibe" && (
        <div className="w-full h-full">
          <div className="w-full flex flex-col items-center  justify-center p-2">
            <h1 className="text-xl font-bold">Your Filters:</h1>
            {inputs.map((ele, i) => {
              return (
                <ul className="p-1" key={i}>
                  {ele}
                </ul>
              );
            })}
          </div>
          <div className=" flex justify-center pt-6 mb-4">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className="w-[50px] h-[50px] bg-purple-700"
              onClick={promptSubmit}
            >
              {" "}
              Submit
            </Button>
          </div>
        </div>
      )}
      {step === 5 && response.length > 0 && (
        <div className="flex flex-col justify-center items-center text-xl font-semibold mb-5">
          <h3 className="text-2xl font-bold text-purple-500 mb-5">
            Your Recommendations:
          </h3>
          {response.map((ele, i) => {
            return <div key={i}>{ele}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default TransitionStateTesting;
