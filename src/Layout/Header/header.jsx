import { Box, colors, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { TopHeader } from "./top-header";
import { LogoIcon } from "../../assets/icons/logo-icon";
import { BarIcon } from "../../assets/icons/bar-icon";
import { Colors } from "../../mui-config/colors";
import { Search } from "../../Components/Search";
import { ProfileIcon } from "../../assets/icons/profile-icon";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Box>
        <TopHeader />
        <Container maxWidth="lg">
          <Stack direction={"row"} py={"19px"} justifyContent={"space-between"}>
            <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
              <Link to={"/"}>
                <LogoIcon />
              </Link>

              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"12px"}
                bgcolor={`${Colors.gipermart}`}
                width={"160px"}
                justifyContent={"center"}
                py={"10px"}
                pl={"12px"}
                pr={"45px"}
                height={"50px"}
                sx={{ cursor: "pointer" }}
              >
                <BarIcon />

                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    color: "#281800",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Каталог
                </a>
              </Stack>
              <Box>
                <Search />
              </Box>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
              <Stack textAlign={"center"} alignItems={"center"}>
                <ProfileIcon />
                <Typography mt={"4px"}>Войти</Typography>
              </Stack>
              <Stack textAlign={"center"} alignItems={"center"}>
                <ProfileIcon />
                <Typography mt={"4px"}>Избранное</Typography>
              </Stack>
              <Stack textAlign={"center"} alignItems={"center"}>
                <ProfileIcon />
                <Typography mt={"4px"}>Корзина</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
