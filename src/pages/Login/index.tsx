import { memo } from "react";
import { BackgroundAnimated } from "./components/BackgroundAnimated";
import { CardLogin } from "./components/CardLogin";

interface ILogin {}

export const Login: React.FC<ILogin> = memo(() => {
  return (
    <>
      <BackgroundAnimated />
      <CardLogin />
    </>
  );
});
