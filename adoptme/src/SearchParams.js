import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // A HOOK - [current state, updater] = useState("what will be inside input")
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  // empty array because when you first request from API, there will be no pets listed
  const [pets, setPets] = useState([]);

  async function requestPets() {
    // pet.animals returns promise, wait here until it finishes and give me back the data
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
