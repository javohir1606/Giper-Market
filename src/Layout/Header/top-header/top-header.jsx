import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { PhoneIcon } from "../../../assets/icons/phone-icon";

export const TopHeader = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Stack
          py={"8px"}
          justifyContent={"end"}
          direction={"row"}
          gap={"24px"}
          alignItems={"center"}
        >
          <Box>
            <a
              style={{
                textDecoration: "none",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "143%",
                color: "#211A1A",
              }}
              href="#"
            >
              Доставка и оплата
            </a>
          </Box>
          <Box>
            <a
              style={{
                textDecoration: "none",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "143%",
                color: "#211A1A",
              }}
              href="#"
            >
              Пункты выдачи
            </a>
          </Box>
          <Box>
            <a
              style={{
                textDecoration: "none",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "143%",
                color: "#211A1A",
              }}
              href="#"
            >
              Поддержка
            </a>
          </Box>
          <Box
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            gap={"16px"}
          >
            <PhoneIcon />
            <a
              style={{
                textDecoration: "none",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "143%",
                color: "#211A1A",
              }}
              href="tel:+998 90 253 77 53"
            >
              +998 90 253 77 53
            </a>
          </Box>
        </Stack>
      </Container>
    </>
  );
};
