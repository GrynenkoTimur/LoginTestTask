import { FC } from "react";
import { Logo } from "../Logo";
import { ContentWrapper, StyledContainer } from "./Layout.style";

interface ILayoutProps {
  children: JSX.Element;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <StyledContainer>
      <Logo />
      <ContentWrapper>{children}</ContentWrapper>
    </StyledContainer>
  );
};
