import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import FilterState from "@/components/FilterState";

const TransitionStateTesting = ({ filter, setFilter }) => {
  const [step, setStep] = useState(0);
  const [inputs, setInputs] = useState([]);
  const [filterText, setFilterText] = useState("");

  const [history, setHistory] = useState([]);

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

  return (
    <div className="bg-zinc-600">
      {step === 0 && (
        <div className="flex justify-between items-center mb-6">
          <p>Get movie recommendations by:</p>
          <FilterState setFilter={setFilter} filter={filter} />
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className="w-[50px] h-[50px]"
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
            <TextField
              id="vibe-input"
              sx={{ input: { color: "white" } }}
              fullWidth
              InputLabelProps={{ className: "text-white" }}
              FormHelperTextProps={{ className: "text-white" }}
              label="Vibe"
              variant="filled"
              color="secondary"
              helperText="Enter the vibe of the movie you want"
              className="text-white"
            />
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className="w-[50px] h-[50px]"
              onClick={handleNext}
            >
              Next
            </Button>
          </form>
        </div>
      )}{" "}
      {step === 1 && filter === "Other Movies" && (
        <div>
          <form
            onSubmit={(e) => transitionFormSubmit(e)}
            onChange={(e) => setFilterText(e.target.value)}
          >
            <TextField
              id="other-movie-input"
              sx={{ input: { color: "white" } }}
              fullWidth
              InputLabelProps={{ className: "text-white" }}
              inputProps={{ className: "bg-zinc-600 rounded-sm" }}
              FormHelperTextProps={{ className: "text-white" }}
              label="Movie 1"
              variant="filled"
              color="secondary"
              helperText="Enter a name of another movie you like"
              className="text-white"
            />
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className="w-[50px] h-[50px]"
              onClick={handleNext}
            >
              Next
            </Button>
          </form>
        </div>
      )}
      {step === 2 && filter === "Other Movies" && (
        <div>
          <form
            onSubmit={(e) => transitionFormSubmit(e)}
            onChange={(e) => setFilterText(e.target.value)}
          >
            <TextField
              id="other-movie-input"
              sx={{ input: { color: "white" } }}
              fullWidth
              InputLabelProps={{ className: "text-white" }}
              inputProps={{ className: "bg-zinc-600 rounded-sm" }}
              FormHelperTextProps={{ className: "text-white" }}
              label="Movie 2"
              variant="filled"
              color="secondary"
              helperText="Enter a name of another movie you like"
              className="text-white"
            />
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className="w-[50px] h-[50px]"
              onClick={handleNext}
            >
              Next
            </Button>
          </form>
        </div>
      )}{" "}
      {step === 2 && filter === "Vibe" && (
        <div>
          <form
            onSubmit={(e) => transitionFormSubmit(e)}
            onChange={(e) => setFilterText(e.target.value)}
          >
            <TextField
              id="other-movie-input"
              sx={{ input: { color: "white" } }}
              fullWidth
              InputLabelProps={{ className: "text-white" }}
              inputProps={{ className: "bg-zinc-600 rounded-sm" }}
              FormHelperTextProps={{ className: "text-white" }}
              label="Setting"
              variant="filled"
              color="secondary"
              helperText="Enter WHERE you'd like the movie to take place in"
              className="text-white"
            />
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className="w-[50px] h-[50px]"
              onClick={handleNext}
            >
              Next
            </Button>
          </form>
        </div>
      )}
      {step === 3 && filter === "Other Movies" && (
        <form
          onSubmit={(e) => transitionFormSubmit(e)}
          onChange={(e) => setFilterText(e.target.value)}
        >
          <div>
            <TextField
              id="other-movie-input"
              sx={{ input: { color: "white" } }}
              fullWidth
              InputLabelProps={{ className: "text-white" }}
              inputProps={{ className: "bg-zinc-600 rounded-sm" }}
              FormHelperTextProps={{ className: "text-white" }}
              label="Movie 3"
              variant="filled"
              color="secondary"
              helperText="Enter a name of another movie you like"
              className="text-white"
            />
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className="w-[50px] h-[50px]"
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </form>
      )}
      {step === 3 && filter === "Vibe" && (
        <div>
          <form
            onSubmit={(e) => transitionFormSubmit(e)}
            onChange={(e) => setFilterText(e.target.value)}
          >
            <TextField
              id="other-movie-input"
              sx={{ input: { color: "white" } }}
              fullWidth
              InputLabelProps={{ className: "text-white" }}
              inputProps={{ className: "bg-zinc-600 rounded-sm" }}
              FormHelperTextProps={{ className: "text-white" }}
              label="Setting"
              variant="filled"
              color="secondary"
              helperText="Enter ANY other key features you'd like your movie to have (e.g features a black main character)"
              className="text-white"
            />
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className="w-[50px] h-[50px]"
              onClick={handleNext}
            >
              Next
            </Button>
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
              onClick={handleNext}
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
              onClick={handleNext}
            >
              {" "}
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransitionStateTesting;
