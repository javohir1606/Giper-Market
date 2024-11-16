import React from "react";
import { useGetBanners } from "../../Service/Query/useGetBanners";
import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

export const Banner = () => {
  const { data } = useGetBanners();
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <img style={{ width: "100%" }} src={item.img} alt="#" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
