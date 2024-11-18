import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetSingleCatalog = (name = "") => {
  return useQuery({
    queryKey: ["Get-Catalog", name],
    queryFn: () => request.get(`${name}`).then((res) => res.data),
  });
};
