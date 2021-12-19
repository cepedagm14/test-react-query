import { useQuery } from "react-query";
import axios from "axios";

const getHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const onSuccess = (data) => {
  console.log("desde onSuccess", data);
};

const onError = (error) => {
  console.log("desde onError", error);
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-hero",
    getHeroes,
    {
      onSuccess,
      onError,
      // staleTime: 3000,
      // refetchOnMount,
      // refetchOnWindowFocus,
      // refetchInterval,
      // refetchIntervalInBackground,
      // enabled: false,
      select: (data) => {
        const superHeroNames = data.data.map((hero) => hero.name);
        return superHeroNames;
      },
    }
  );

  if (isLoading || isFetching) {
    return <h1>Loading-...</h1>;
  }
  // console.log({ isLoading }, { isFetching });
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Refetch</button>
      {/* {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })} */}

      {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </>
  );
};
