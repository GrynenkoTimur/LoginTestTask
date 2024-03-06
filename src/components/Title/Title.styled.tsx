import { Typography } from "@mui/material";
import styled from "styled-components";

export const StyledTitle = styled(Typography)`
  &.MuiTypography-root {
    font-size: 30px;
    line-height: 39px;
    text-align: center;
    font-weight: 700;

    @media (max-width: 450px) {
      font-size: 26px;
      line-height: 34px;
    }

    &:first-letter {
      text-transform: uppercase;
    }
  }
`;
