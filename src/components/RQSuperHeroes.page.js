import { SuperHerodata } from "../hooks/useSuperHeroData";

const onSuccess = (data) => {
  console.log("desde onSuccess", data);
};

const onError = (error) => {
  console.log("desde onError", error);
};

export const RQSuperHeroesPage = () => {
  
  const { isLoading, data, isError, error, isFetching, refetch } = SuperHerodata(onSuccess, onError)

  // componente de carga de elementos
  if (isLoading || isFetching) {
    return <h1>Loading-...</h1>;
  }
    // componente de mensaje de error
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
