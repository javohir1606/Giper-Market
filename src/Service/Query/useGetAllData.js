import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetAllData = (id) => {
  return useQuery({
    queryKey: ["AllData", id],
    queryFn: () => request.get(`all/${id}`).then((res) => res.data),
  });
};
