import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // A HOOK - [current state, updater] = useState("what will be inside input")
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  // will run when changing sets of breeds (runs after SearchParams() runs)
  // useEffect declare dependencies (will run each time hook is rendered)
  useEffect(() => {
    // set all breeds
    setBreeds([]);
    // set breed from animal (cant have bloodhound cat)
    setBreed("");
    // retreives breed from api, pass in animal hook, then update breeds from api
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      // destructure breed name to just return breed in strings (API returns other data, just need breed name), return the breed
      const breedStrings = apiBreeds.map(({ name }) => name);
      // new breeds is this mapped out breed strings
      setBreeds(breedStrings);
      // in case of error, feed error into console
    }, console.error);
    // declare what it depends on for changes so useEffect doesnt keep rendering with useHooks
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
