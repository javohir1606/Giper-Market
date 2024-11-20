import {
  Badge,
  Box,
  colors,
  Container,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { TopHeader } from "./top-header";
import { LogoIcon } from "../../assets/icons/logo-icon";
import { BarIcon } from "../../assets/icons/bar-icon";
import { Colors } from "../../mui-config/colors";
import { Search } from "../../Components/Search";
import { ProfileIcon } from "../../assets/icons/profile-icon";
import { Link, NavLink } from "react-router-dom";
import { Login } from "../../Components/Login";
import { Register } from "../../Components/Register";
import { loadState } from "../../config/Storage";
import { useSelector } from "react-redux";
import { DrowerContext } from "../../Context/open-context";
import { useContext } from "react";

export const Header = () => {
  // const [open, setOpen] = React.useState(false);
  const { open, setOpen } = useContext(DrowerContext);
  const token = loadState("token");
  const { count } = useSelector((state) => state.product);
  const [view, setView] = React.useState(false);

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
                {!token ? (
                  <Box>
                    <button
                      onClick={() => setOpen(true)}
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "165%",
                        cursor: "pointer",
                        marginTop: "4px",
                      }}
                      mt={"4px"}
                    >
                      Войти
                    </button>
                  </Box>
                ) : (
                  <Box>
                    <button
                      onClick={() => setOpen(true)}
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        fontWeight: "400",
                        fontSize: "18px",
                        lineHeight: "165%",
                        cursor: "pointer",
                        marginTop: "4px",
                      }}
                      mt={"4px"}
                    >
                      {token.user.name}
                    </button>
                  </Box>
                )}
                <Drawer
                  PaperProps={{
                    sx: {
                      height: "782px",
                    },
                  }}
                  open={open}
                  anchor="right"
                  onClose={() => setOpen(false)}
                >
                  {view === "signIn" ? (
                    <Login
                      onClose={() => setOpen(false)}
                      onClick={() => setView("register")}
                    />
                  ) : (
                    <Register
                      onClose={() => setOpen(false)}
                      onClick={() => setView("signIn")}
                    />
                  )}
                </Drawer>
              </Stack>
              <Stack textAlign={"center"} alignItems={"center"}>
                <ProfileIcon />
                <Typography mt={"4px"}>Избранное</Typography>
              </Stack>
              <Stack textAlign={"center"} alignItems={"center"}>
                <NavLink
                  to={"/cart-product"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Badge badgeContent={count ? count : "0"} color="error">
                    <ProfileIcon />
                  </Badge>
                  <Typography mt={"4px"}>Корзина</Typography>
                </NavLink>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
