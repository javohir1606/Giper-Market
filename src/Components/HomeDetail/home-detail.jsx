import React from "react";
import { useGetAllData } from "../../Service/Query/useGetAllData";
import { useParams } from "react-router-dom";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { addCart } from "../../Redux/Reducers/products-reducer";
import { useDispatch } from "react-redux";
import formatter from "../../utils/formatter";

export const HomeDetail = () => {
  const { id } = useParams();
  const { data } = useGetAllData(id);
  const disptach = useDispatch();
  console.log(data);

  return (
    <>
      <Container sx={{ mb: "50px" }} maxWidth="lg">
        {data && (
          <Box>
            <Typography
              fontWeight={"600"}
              fontSize={"24px"}
              lineHeight={"150%"}
              color="#333"
              mb={"50px"}
              mt={"24px"}
            >
              {data.title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction={"row"} alignItems={"center"} gap={"32px"}>
                <Box width={"435px"}>
                  <img width={"100%"} src={data.img} alt="#" />
                </Box>
                <Box>
                  {data.memory && (
                    <Box mb={"24px"}>
                      <Typography
                        mb={"8px"}
                        fontWeight={"600"}
                        fontSize={"16px"}
                        lineHeight={"125%"}
                        color="#333"
                      >
                        Объем памяти
                      </Typography>
                      <Typography
                        fontWeight={"500"}
                        fontSize={"15px"}
                        lineHeight={"100%"}
                        color="#333"
                      >
                        {data.memory}
                      </Typography>
                    </Box>
                  )}{" "}
                  <Box>
                    <Typography
                      mb={"16px"}
                      fontWeight={"500"}
                      fontSize={"18px"}
                      lineHeight={"111%"}
                      color="#333"
                    >
                      Характеристики
                    </Typography>
                    {data.color && (
                      <Box mb={"12px"}>
                        <Typography
                          fontWeight={"400"}
                          fontSize={"16px"}
                          lineHeight={"125%"}
                          color="#333"
                        >
                          <span
                            style={{
                              color: "#999",
                              lineHeight: "125%",
                              fontSize: "16PX",
                              fontWeight: "400",
                            }}
                          >
                            Цвет:
                          </span>{" "}
                          {data.color}
                        </Typography>
                      </Box>
                    )}
                    {data.display && (
                      <Box mb={"12px"}>
                        <Typography
                          fontWeight={"400"}
                          fontSize={"16px"}
                          lineHeight={"125%"}
                          color="#333"
                        >
                          <span
                            style={{
                              color: "#999",
                              lineHeight: "125%",
                              fontSize: "16PX",
                              fontWeight: "400",
                            }}
                          >
                            экран:
                          </span>{" "}
                          {data.display}
                        </Typography>
                      </Box>
                    )}
                    {data.rame && (
                      <Box mb={"24px"}>
                        <Typography mb={"8px"}>Объем памяти</Typography>
                        <Typography
                          fontWeight={"400"}
                          fontSize={"16px"}
                          lineHeight={"125%"}
                          color="#333"
                        >
                          {data.rame}
                        </Typography>
                      </Box>
                    )}
                    {data.ram && (
                      <Box mb={"24px"}>
                        <Typography
                          fontWeight={"400"}
                          fontSize={"16px"}
                          lineHeight={"125%"}
                          color="#333"
                        >
                          <span
                            style={{
                              color: "#999",
                              lineHeight: "125%",
                              fontSize: "16PX",
                              fontWeight: "400",
                            }}
                          >
                            оперативная память:
                          </span>{" "}
                          {data.ram}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Stack>
              <Box
                pt={"45px"}
                px={"18px"}
                pb={"17px"}
                border={"2px solid #ededed "}
              >
                <Typography
                  fontWeight={"600"}
                  fontSize={"36px"}
                  lineHeight={"122%"}
                  color="#333"
                  mb={"21px"}
                >
                  {formatter(data.price)} Сум
                </Typography>
                <Button
                  onClick={() => disptach(addCart(data))}
                  variant="contained"
                  sx={{ padding: "12px 118px" }}
                >
                  В корзину
                </Button>
              </Box>
            </Stack>
          </Box>
        )}
      </Container>
    </>
  );
};
