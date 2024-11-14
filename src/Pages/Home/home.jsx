import { Box, Container, Grid2, Stack } from "@mui/material";
import React from "react";
import { Banner } from "../../Components/Banner/banner";
import { useGetCatalog } from "../../Service/Query/useGetCatalog";
import { CatalogCard } from "../../Components/CatalogCard";
//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
export const Home = () => {
  const { data } = useGetCatalog();
  return (
    <>
      <Banner />
      {/* <Container maxWidth="lg"> */}
      <Stack direction={"row"} alignItems={"center"} mx={"43px"} py={"32px"}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={5}
          spaceBetween={"20px"}
          navigation={true}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <CatalogCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      {/* </Container> */}
    </>
  );
};
