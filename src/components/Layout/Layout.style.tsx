import { Container } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  @media (max-width: 1920px) {
    padding-top: 100px;
  }

  @media (max-width: 1200px) {
    padding-top: 70px;
  }

  @media (max-width: 768px) {
    padding-top: 50px;
  }

  @media (max-width: 450px) {
    padding-top: 30px;
  }

  padding-top: 180px;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  @media (max-width: 1200px) {
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 450px) {
    margin-top: 20px;
  }
  margin-top: 80px;
`;
