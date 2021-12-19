import { useQuery } from "react-query";
import axios from "axios";

// peticion get
const getHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const SuperHerodata = (onSuccess, onError) => {
  return useQuery("super-hero", getHeroes, {
    onSuccess,
    onError,
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });
};
