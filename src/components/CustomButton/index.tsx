import { ButtonProps } from "@mui/material";
import { FC } from "react";
import { StyledButton } from "./CustomButton.style";

interface ICustomButtonProps extends ButtonProps {}

export const CustomButton: FC<ICustomButtonProps> = (props) => {
  return <StyledButton {...props} />;
};
