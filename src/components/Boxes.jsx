import React from "react";
import { Box } from "grommet";
import styled from "styled-components";

const ColorBox1 = () => (
  <StyledBox background="linear-gradient(45deg, #FF5733, #FFBD33)">
    <h2>Box 1</h2>
  </StyledBox>
);

const ColorBox2 = () => (
  <StyledBox background="linear-gradient(45deg, #33FF57, #33FFBD)">
    <h2>Box 2</h2>
  </StyledBox>
);

const ColorBox3 = () => (
  <StyledBox background="linear-gradient(45deg, #3357FF, #BD33FF)">
    <h2>Box 3</h2>
  </StyledBox>
);

const StyledBox = styled(Box)`
  height: 800px;
  width: 800px;
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
`;

export { ColorBox1, ColorBox2, ColorBox3 };
