import React from "react";
import {
  Card,
  ContainerMain,
  Header,
  ContainerInputs,
  LabemRembemberPassword,
} from "./styles";
import { InputPassword } from "./InputPassword";
import { InputText } from "./InputText";
import { ButtonStyled } from "../../../../components/Buttons";
import { LoginIcon } from "../../../../components/Icons";
import { useHistory } from "react-router-dom";

interface CardLoginProps {
  history?: any;
}

export const CardLogin: React.FC<CardLoginProps> = () => {
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  const handleChangePassword = (pass: string) => {
    setPassword(pass);
  };

  const tryLogin = () => {
    console.log(password)
    history.push("/dashboard");
  };

  return (
    <ContainerMain>
      <Card>
        <Header>MoneyMaker - Admin</Header>
        <ContainerInputs>
        
            <InputText cbGetValue={handleChangePassword} />
            <InputPassword cbGetValue={handleChangePassword} />
            <LabemRembemberPassword>
              <input type="checkbox" />
              Lembrar senha
            </LabemRembemberPassword>
            <ButtonStyled
              startIcon={<LoginIcon />}
              onClick={tryLogin}
              type="submit"
            >
              Entrar
            </ButtonStyled>
        </ContainerInputs>
      </Card>
    </ContainerMain>
  );
};
