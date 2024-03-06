import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { Title } from "../Title";
import { FormContainer } from "./FormLayout.style";

interface IFormLayout {
  title: string;
  children: ReactNode;
}

export const FormLayout: FC<IFormLayout> = ({ title, children }) => {
  return (
    <FormContainer>
      <Title>{title}</Title>

      <Box mt="40px">{children}</Box>
    </FormContainer>
  );
};
