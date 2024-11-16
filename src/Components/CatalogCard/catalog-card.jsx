import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const CatalogCard = ({ item }) => {
  return (
    <>
      <Stack
        direction={"row"}
        gap={"16px"}
        alignItems={"center"}
        height={"192px"}
        py={"14px"}
        px={"16px"}
        bgcolor={"#F6F6F6"}
      >
        <img style={{ width: "96px" }} src={item.img} alt="#" />
        <Typography>{item.text}</Typography>
      </Stack>
    </>
  );
};
