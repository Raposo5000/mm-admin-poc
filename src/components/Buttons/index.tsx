import styled from "styled-components";
import { Button } from "@material-ui/core";

export const ButtonStyled = styled(Button)`
  && {
    color: white;
    background-color: #0088FE;
    transition: 300ms;
  }
  &&:hover {
    background-color: #1371c2;
  }
`;
