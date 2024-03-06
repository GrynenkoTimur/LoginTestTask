import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledInput = styled(TextField)`
  & .MuiInputBase {
    &-root {
      border-radius: 6px;
    }
    &-input {
      font-family: "Basis Grotesque Pro";
      padding: 14px 12px;
    }
  }

  & .Mui-focused {
    border-color: #316fea;
  }
`;
