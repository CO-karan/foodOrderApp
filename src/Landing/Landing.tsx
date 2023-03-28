import { FC } from "react";
import AppHeader from "./Layout/AppHeader";
import { Box, BoxProps } from "@mui/material";
import styled from "styled-components";

import backImage from "../assets/meals.jpg";
import Meals from "./Meals";
import Meal from "./Meals/Meal";

const Landing: FC = () => {
  return (
    <Box display="flex" flexDirection="column">
      <AppHeader></AppHeader>
      <Box
        sx={{ width: "100%", height: "25rem", zIndex: 0, overflow: "hidden" }}
      >
        <Box
          component="img"
          src={backImage}
          sx={{
            objectFit: "cover",
            width: "110%",
            height: "100%",
            transform: "rotateZ(-5deg) translateY(-4rem) translateX(-1rem)",
          }}
        />
      </Box>
      <Meals />
    </Box>
  );
};

export default Landing;