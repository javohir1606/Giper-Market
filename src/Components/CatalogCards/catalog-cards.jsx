import { Box, Typography, Stack, IconButton, Button } from "@mui/material";
import React from "react";
import { LikeIcon } from "../../assets/icons/like-icon";
import { CartIcon } from "../../assets/icons/cart-icon";
import formatter from "../../utils/formatter";

export const CatalogAllCards = ({ item }) => {
  const title = item.title;
  const MaxLength = 30;
  return (
    <>
      <Box mb={"64px"}>
        <Stack
          flexWrap={"wrap"}
          width={"265px"}
          height={"340px"}
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
              {title ? title.slice(0, MaxLength) + "..." : title}
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
      </Box>
    </>
  );
};
