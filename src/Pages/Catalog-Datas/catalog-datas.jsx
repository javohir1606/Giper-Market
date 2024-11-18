import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCatalog } from "../../Service/Query/useGetSingleCatalog";
import { CatalogAllCards } from "../../Components/CatalogCards";

export const CatalogDatas = () => {
  const { name, text } = useParams();

  const { data } = useGetSingleCatalog(name);

  return (
    <>
      <Container maxWidth="lg">
        <Box mb={"24px"}>
          <Typography
            fontSize={"24px"}
            fontWeight={"600"}
            lineHeight={"150%"}
            color="#333"
          >
            {text}
          </Typography>
        </Box>
        <Grid2 container spacing={"48px"}>
          {data?.map((item) => (
            <Grid2
              key={item.id}
              size={3}
              display={"flex"}
              justifyContent={"center"}
            >
              <CatalogAllCards item={item} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </>
  );
};
