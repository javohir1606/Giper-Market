import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import formatter from "../../utils/formatter";
import {
  deleteProduct,
  toggleAmount,
} from "../../Redux/Reducers/products-reducer";
export const CartProduct = () => {
  const { product_list, totalPrice } = useSelector((state) => state.product);
  const { count } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  return (
    <>
      <Container maxWidth="lg" sx={{ mb: "153px" }}>
        <Stack direction={"row"} mt={"85px"} justifyContent={"space-between"}>
          <Box>
            {product_list?.map((item) => (
              <Stack key={item.id}>
                <Stack>
                  {product_list.map((item) => (
                    <Stack
                      mb={"51px"}
                      key={item.id}
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      width={"1000px"}
                    >
                      <Stack
                        direction={"row"}
                        gap={"16px"}
                        alignItems={"center"}
                      >
                        <Box>
                          <img
                            style={{ width: "200px" }}
                            src={item.img}
                            alt="img"
                          />
                        </Box>
                        <Box>
                          <Typography
                            mb={"4px"}
                            fontWeight={"500"}
                            fontSize={"24px"}
                            lineHeight={"150%"}
                            color="#333"
                          >
                            {item.title}
                          </Typography>
                          {item.rame && (
                            <Typography
                              fontWeight={"400"}
                              fontSize={"16px"}
                              lineHeight={"18-%"}
                              color="#333"
                              mb={"16px"}
                            >
                              {item.rame}
                            </Typography>
                          )}
                        </Box>
                      </Stack>
                      <Stack>
                        <Typography
                          fontWeight={"600"}
                          fontSize={"24px"}
                          lineHeight={"150%"}
                          color="#333"
                          mb={"40px"}
                        >
                          {formatter(item?.price)} Сум
                        </Typography>
                        <Stack
                          bgcolor={"#ededed"}
                          width={"124px"}
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <IconButton
                            sx={{
                              bgcolor: "white",
                              borderRadius: "0",
                              padding: "0",
                              width: "36px",
                              padding: "5px 5px",
                              ml: "3px",
                              my: "3px",
                              "&:hover": {
                                bgcolor: "white",
                              },
                            }}
                            onClick={() =>
                              dispatch(
                                toggleAmount({
                                  id: item.id,
                                  type: "increment",
                                })
                              )
                            }
                          >
                            +
                          </IconButton>
                          <span
                            style={{
                              fontWeight: "400",
                              fontSize: "24px",
                              color: "#333",
                              lineHeight: "120%",
                            }}
                          >
                            {item.user_count}
                          </span>
                          {item.user_count < 2 ? (
                            <IconButton
                              sx={{
                                bgcolor: "white",
                                borderRadius: "0",
                                padding: "0",
                                width: "36px",
                                padding: "5px 5px",
                                mr: "3px",
                                my: "3px",
                                "&:hover": {
                                  bgcolor: "white",
                                },
                              }}
                              onClick={() =>
                                dispatch(deleteProduct({ id: item.id }))
                              }
                            >
                              x
                            </IconButton>
                          ) : (
                            <IconButton
                              sx={{
                                bgcolor: "white",
                                borderRadius: "0",
                                padding: "0",
                                width: "36px",
                                padding: "5px 5px",
                                mr: "3px",
                                my: "3px",
                                textAlign: "center",
                                "&:hover": {
                                  bgcolor: "white",
                                },
                              }}
                              onClick={() =>
                                dispatch(
                                  toggleAmount({
                                    id: item.id,
                                    type: "decrement",
                                  })
                                )
                              }
                            >
                              -
                            </IconButton>
                          )}
                        </Stack>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Box>
          <Box>
            <Box bgcolor={"#f7f7f7"} padding={"24px"}>
              <Typography
                mb={"17px"}
                fontWeight={"400"}
                fontSize={"24px"}
                lineHeight={"150%"}
                color="#333"
              >
                В корзине
              </Typography>
              <Typography
                fontWeight={"600"}
                fontSize={"18px"}
                lineHeight={"150%"}
                color="#333"
                mb={"17px"}
              >
                {" "}
                Товаров: {count ? count : "0"}
              </Typography>
              <Typography
                mb={"12px"}
                fontWeight={"400"}
                fontSize={"16px"}
                lineHeight={"150%"}
                color="#E44542"
              >
                Введите промокод
              </Typography>
              <strong
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                {formatter(totalPrice)} Сум
              </strong>
            </Box>
            <Box>
              <Button variant="contained" sx={{ padding: "15px 89px" }}>
                Оформить заказ
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
};
