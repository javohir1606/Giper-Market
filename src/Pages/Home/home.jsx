import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import "swiper/css";
import React from "react";
import { Banner } from "../../Components/Banner/banner";
import { useGetCatalog } from "../../Service/Query/useGetCatalog";
import { CatalogCard } from "../../Components/CatalogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { ProductWrapper } from "../../Components/ProductWrapper/product-wrapper";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import { useGetBrands } from "../../Service/Query/useGetBrands";
import { BrandCard } from "../../Components/BrandCard";
import { HomeCards } from "../../Components/Home-card/home-cards";
import { Link } from "react-router-dom";
export const Home = () => {
  const { data } = useGetCatalog();
  const { data: brands } = useGetBrands();

  return (
    <>
      <Banner />

      <Stack direction={"row"} alignItems={"center"} mx={"43px"} py={"32px"}>
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          slidesPerView={5}
          spaceBetween={"20px"}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`catalog/${item.name}/${item.text}`}
              >
                <CatalogCard text={item.text} item={item} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      <Box mb={"32px"}>
        <ProductWrapper name={"Смартфоны и планшеты"} path={"phones"} />
      </Box>

      <Box bgcolor={"#00CBFE"} pt={"16px"} pb={"30px"} mb={"32px"}>
        <Container maxWidth="lg">
          <Box mb={"24px"}>
            <Typography
              fontWeight={"600"}
              fontSize={"24px"}
              lineHeight={"150%"}
              color="#281800"
            >
              Акции
            </Typography>
          </Box>
          <Stack direction={"row"} gap={"22px"} alignItems={"center"}>
            <Box>
              <img src={img1} alt="#" />
            </Box>
            <Box>
              <img src={img2} alt="#" />
            </Box>
            <Box>
              <img src={img3} alt="#" />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box py={"48px"}>
        <Container maxWidth="lg">
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <HomeCards path={"phones"} name={"Смартфоны и планшеты"} />
            <HomeCards
              path={"notebook"}
              name={"Ноутбуки, планшеты и компьютеры"}
            />
            <HomeCards path={"phones"} name={"Смартфоны и планшеты"} />
          </Stack>
        </Container>
      </Box>
      <Box mb={"32px"}>
        <ProductWrapper name={"Смартфоны и планшеты"} path={"phones"} />
      </Box>
      <Box mb={"40px"}>
        <ProductWrapper
          name={"Ноутбуки, планшеты и компьютеры"}
          path={"notebook"}
        />
      </Box>
      <Box mb={"105px"}>
        <Container maxWidth="lg">
          <Box mb={"24px"}>
            <Typography fontWeight={"600"} fontSize={"24px"} color="#333">
              Популярные бренды
            </Typography>
          </Box>
          <Grid2 container spacing={"16px"}>
            {brands?.map((item) => (
              <Grid2 width={"180px"} key={item.id} size={1.8}>
                <BrandCard item={item} />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </>
  );
};
