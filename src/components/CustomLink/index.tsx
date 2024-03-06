import { FC } from "react";
import { LinkProps } from "react-router-dom";
import { StyledLink } from "./CustomLink.styled";

export const CustomLink: FC<LinkProps> = (props) => {
  return <StyledLink {...props} />;
};
