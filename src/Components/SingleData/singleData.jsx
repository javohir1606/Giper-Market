import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllData } from "../../Service/Query/useGetAllData";

export const SingleData = () => {
  const { id } = useParams();
  const { data } = useGetAllData(id);
  return (
    <>
      {data.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </>
  );
};
