import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useGetProducts } from "../../Service/Query/useGetProducts";
import { Link } from "react-router-dom";
import formatter from "../../utils/formatter";

export const HomeCards = ({ path, name }) => {
  const { data } = useGetProducts(path);
  return (
    <>
      <Box py={"24px"}>
        <Box>
          <Typography
            fontWeight={"400"}
            fontSize={"24px"}
            lineHeight={"150%"}
            color="#333"
            pb={"14px"}
            borderBottom={"2px solid #ededed"}
            mb={"24px"}
          >
            {name}
          </Typography>
        </Box>
        <Box width={"100%"}>
          {data?.slice(0, 3).map((item) => (
            <Link
              style={{ color: "black", textDecoration: "none" }}
              key={item.id}
              to={`home-detail/${item.id}`}
            >
              <Stack direction={"row"} alignItems={"center"} gap={"16px"}>
                <Box>
                  <img width={"140px"} src={item.img} alt="#" />
                </Box>
                <Box>
                  <Typography
                    fontWeight={"400"}
                    fontSize={"18px"}
                    lineHeight={"144%"}
                    color="#333"
                    mb={"12px"}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    fontWeight={"600"}
                    lineHeight={"156%"}
                    fontSize={"18px"}
                    color="black"
                  >
                    {formatter(item.price)} Сум
                  </Typography>
                </Box>
              </Stack>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};
