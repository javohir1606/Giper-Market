import React from "react";
import { useSearch } from "../../Service/Query/useSearch";
import useDebounce from "../../config/useDebounce";
import { Box, colors, Typography } from "@mui/material";
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
        {data?.map((item) => (
          <Box>
            <img src={item.img} alt="#" />
            <Typography>{item.title}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};
