import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetBanners = () => {
  return useQuery({
    queryKey: ["Banner"],
    queryFn: () => request.get("/banners").then((res) => res.data),
  });
};
