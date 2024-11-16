import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const SwiperCards = ({ item }) => {
  return (
    <Box>
      <img src={item.img} alt="#" />
    </Box>
  );
};
