import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

console.log(fetchFriends());
export const ParallelQueries = () => {
  const { data: dataSuperHeroes } = useQuery("super-heroes", fetchSuperHeroes);

  const { data: datafriends } = useQuery("friends", fetchFriends);

  return <div>Parallel Queries</div>;
};
