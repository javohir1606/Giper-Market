import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetProducts = (path) => {
  return useQuery({
    queryKey: ["Products", path],
    queryFn: () => request.get(`/${path}`).then((res) => res.data),
  });
};
