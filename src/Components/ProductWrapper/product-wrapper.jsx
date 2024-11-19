import React from "react";
import { useGetProducts } from "../../Service/Query/useGetProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import { RightAngleIcon } from "../../assets/icons/right-angle-icon";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import {
  Box,
  Button,
  IconButton,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { LeftAngleIcon } from "../../assets/icons/left-angle-icon";
import { CartIcon } from "../../assets/icons/cart-icon";
import { LikeIcon } from "../../assets/icons/like-icon";
import { Link } from "react-router-dom";
import formatter from "../../utils/formatter";

export const ProductWrapper = ({ path, name }) => {
  SwiperCore.use([Navigation]);

  const { data } = useGetProducts(path);

  return (
    <>
      <Container maxWidth="lg">
        <Stack direction={"row"} justifyContent={"space-between"} mb={"24px"}>
          <Typography
            variant="h5"
            fontWeight={"600"}
            fontSize={"24px"}
            lineHeight={"150%"}
            color="#333"
          >
            {name}
          </Typography>
          <Stack direction={"row"} gap={"16px"}>
            <IconButton className="arrow-left arrow">
              <LeftAngleIcon />
            </IconButton>
            <IconButton className="arrow-right arrow">
              <RightAngleIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={5}
          spaceBetween={"20px"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
          }}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={`home-detail/${item.id}`}
              >
                <Stack
                  flexWrap={"wrap"}
                  width={"265px"}
                  height={"300px"}
                  textAlign={"center"}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    gap={"5px"}
                    mb={"18px"}
                  >
                    <img
                      style={{ width: "157px", marginBottom: "14px" }}
                      src={item.img}
                      alt="#"
                    />
                    <Box position={"relative"}>
                      <IconButton sx={{ position: "absolute", top: "10px" }}>
                        <LikeIcon />
                      </IconButton>
                    </Box>
                  </Stack>
                  <Stack>
                    <Typography
                      variant="body2"
                      fontWeight={"400"}
                      lineHeight={"150%"}
                      fontSize={"16px"}
                      width={"157px"}
                      textAlign={"center"}
                      mx={"auto"}
                      mb={"18px"}
                      minHeight={"50px"}
                    >
                      {item.title}
                    </Typography>
                    <Stack
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"end"}
                      gap={"11px"}
                    >
                      <Typography
                        variant="body2"
                        fontWeight={"600"}
                        fontSize={"18px"}
                        color="#333"
                      >
                        {formatter(item.price)} Сум
                      </Typography>
                      <Button
                        sx={{
                          bgcolor: "#FEEE00",
                          borderRadius: "0",
                          minWidth: "0",
                        }}
                      >
                        <CartIcon />
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};
