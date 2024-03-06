import { FC } from "react";
import { TextFieldProps } from "@mui/material";
import { StyledInput } from "./CustomInput.style";

type ICustomInputProps = TextFieldProps & {};

export const CustomInput: FC<ICustomInputProps> = (props) => {
  return <StyledInput {...props} />;
};
