import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    text-transform: none;
    padding: 14px;
    border-radius: 8px;
  }

  &.MuiButton-outlinedSecondary {
    border-color: #d3d8dc;
    color: unset;

    &:hover {
      border-color: #d3d8dc;
      background-color: #f1f1f1;
    }
  }

  &.MuiButton-containedPrimary {
    background-color: #316fea;
    border-color: #316fea;
  }
`;
