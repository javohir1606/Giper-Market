import { Box, Stack } from "@mui/material";
import React from "react";

export const BrandCard = ({ item }) => {
  return (
    <>
      <Stack
        // alignItems={"center"}
        bgcolor={"#f8f8f8"}
        height={"111px"}
        overflow={"hidden"}
        // padding={}
      >
        <img
          width={"140px"}
          style={{ textAlign: "center", margin: "  auto" }}
          src={item.img}
          alt="#"
        />
      </Stack>
    </>
  );
};
