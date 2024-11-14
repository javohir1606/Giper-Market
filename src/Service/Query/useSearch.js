import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useSearch = (input = "") => {
  return useQuery({
    queryKey: ["Search", input],
    queryFn: () =>
      request
        .get("/all", { params: { title_like: input ? input : "00000" } })
        .then((res) => res.data),
  });
};
