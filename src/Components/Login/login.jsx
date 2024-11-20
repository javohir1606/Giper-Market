import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { CloseBtnIcon } from "../../assets/icons/close-btn-icon";
import { useLogin } from "../../Service/Mutation/UseLogin";
import { toast } from "react-toastify";
import { saveState } from "../../config/Storage";

export const Login = ({ onClose, onClick }) => {
  const { register, reset, handleSubmit } = useForm();
  const { mutate } = useLogin();
  const submit = (data) => {
    console.log(data);

    mutate(data, {
      onSuccess: (res) => {
        toast.success("welcome");
        saveState("token", res);
      },
      onError: (error) => {
        console.log(error);
      },
    });
    reset();
  };

  return (
    <>
      <Box height={"782px"} overflow={"hidden"}>
        <Container>
          <form onSubmit={handleSubmit(submit)}>
            <Box textAlign={"right"} mt={"12px"}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                onClick={onClose}
              >
                <CloseBtnIcon />
              </button>
            </Box>
            <Typography
              mt={"8px"}
              mb={"20px"}
              fontWeight={"500"}
              fontSize={"20px"}
              color="black"
            >
              Войти или создать профиль
            </Typography>
            <Box mb={"20px"}>
              <Typography
                fontWeight={"400"}
                fontSize={"16px"}
                color="#808080"
                mb={"12px"}
              >
                Номер телефона
              </Typography>
              <input
                style={{
                  padding: "16px 7px 16px 12px",
                  width: "100%",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "black",
                }}
                autoComplete="false"
                {...register("email")}
                type="email"
                placeholder="Email"
              />
            </Box>
            <Box mb={"20px"}>
              <Typography
                fontWeight={"400"}
                fontSize={"16px"}
                color="#808080"
                mb={"12px"}
              >
                Пароль
              </Typography>
              <input
                style={{
                  padding: "16px 7px 16px 12px",
                  width: "100%",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "black",
                }}
                autoComplete="false"
                {...register("password")}
                type="password"
                placeholder="Password"
              />
            </Box>
            <Box textAlign={"right"} mb={"20px"} sx={{ cursor: "pointer" }}>
              <Typography fontWeight={"400"} fontSize={"16px"} color="#808080">
                Забыли пароль?
              </Typography>
            </Box>
            <Box>
              <Box mb={"16px"}>
                <Button
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    padding: "12px 24px",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Войти
                </Button>
              </Box>
              <Box mb={"16px"}>
                <Button
                  onClick={onClick}
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    padding: "12px 24px",
                  }}
                  variant="outlined"
                >
                  Зарегистрироваться
                </Button>
              </Box>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};
