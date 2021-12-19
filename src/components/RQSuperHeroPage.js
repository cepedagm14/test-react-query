import React from "react";
import { useSuperHerobyId } from "../hooks/usesuperHerobyId";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

export const RQSuperHeroPage = () => {
  const { heroId } = useParams();

  const { isLoading, data, error, isError } = useSuperHerobyId(heroId);

  if (isLoading) {
    <div>cargando....</div>;
  }

  if (isError) {
    <div>{error.message}</div>;
  }

  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};
