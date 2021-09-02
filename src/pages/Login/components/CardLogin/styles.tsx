import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-150px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Exo';
`;

export const Card = styled.div`
  width: 480px;
  height: auto;
  padding: 0 0 40px 0;
  background-color: white;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1.5s;
  box-shadow: 2px 2px 6px darkslategrey;
`;

export const Header = styled.h1``;

export const ContainerInputs = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 260px;
`

export const LabemRembemberPassword = styled.label`
  width: fit-content;
  cursor: pointer;
`