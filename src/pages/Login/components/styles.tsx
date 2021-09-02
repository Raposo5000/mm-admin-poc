import styled, { keyframes } from "styled-components";
import wallpaper from "../../../assets/imgs/login_wallpaper.jpg";

const squareAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0) rotate(0deg);
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
    transform: translateY(-900px) rotate(360deg);
  }
`;

export const Background = styled.div`
  background-color: #418aeb;
  background-image: url("${wallpaper}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: -1;
`;

interface ISquaresProps {
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export const Squares = styled.div<ISquaresProps>`
  position: absolute;
  top: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 9%;

  background-color: white;
  opacity: 0;
  animation: ${squareAnimation} 20s linear infinite;
  left: ${(props) => props.left}%;
  animation-delay: ${(props) => props.delay}s;
  animation-duration: ${(props) => props.duration}s;
`;
