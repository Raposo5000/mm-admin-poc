import React from "react";
import { Background, Squares } from "./styles";

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const BackgroundAnimated: React.FC = () => {
  const numbersSquares = 10;

  return (
    <Background>
      {Array.from(Array(numbersSquares).keys()).map((_, index) => (
        <Squares
          key={index}
          left={getRandomInt(2, 98)}
          delay={getRandomInt(2, 9)}
          duration={getRandomInt(8, 50)}
          size={getRandomInt(50, 120)}
        />
      ))}
    </Background>
  );
};
