import React from "react";
import { useSearch } from "../../Service/Query/useSearch";
import useDebounce from "../../config/useDebounce";
import { Box, colors, Stack, Typography } from "@mui/material";
import { Colors } from "../../mui-config/colors";
import { SearchIcon } from "../../assets/icons/search-icon";
export const Search = () => {
  const [input, setInput] = React.useState("");
  const Debounce = useDebounce(input);
  const { data } = useSearch(Debounce);
  return (
    <>
      <Box>
        <Box position={"relative"}>
          <Box
            position={"absolute"}
            right={"12px"}
            top={"12px"}
            sx={{ cursor: "pointer" }}
          >
            <SearchIcon />
          </Box>
          <input
            placeholder="Поиск"
            style={{
              padding: "16px ",
              border: `1px solid #857372`,
              width: "673px",
            }}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Box>
        <Box
          position={"absolute"}
          mt={"50px"}
          zIndex={5}
          height={"300px"}
          overflow={"auto"}
          left={"50%"}
          sx={{ scrollbarColor: "red black", transform: "translateX(-45%)" }}
        >
          {data?.map((item) => (
            <Stack
              mt={"20px"}
              direction={"row"}
              bgcolor={"white"}
              width={"500px"}
              height={"180px"}
              borderRadius={"20px"}
              alignItems={"center"}
              zIndex={2}
              key={item.id}
            >
              <img style={{ height: "180px" }} src={item.img} alt="#" />
              <Typography>{item.title}</Typography>
            </Stack>
          ))}
        </Box>
      </Box>
    </>
  );
};
