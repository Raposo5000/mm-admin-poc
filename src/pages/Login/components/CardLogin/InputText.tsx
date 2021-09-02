import {
  FormControl,
  InputLabel,
  OutlinedInput
} from "@material-ui/core";
import React, { useState } from "react";

interface InputTextProps {
  cbGetValue: Function;
}

export const InputText: React.FC<InputTextProps> = ({cbGetValue}) => {
  const [text, setText] = useState("");

  const handleChangeInput = (event: any) => {
    setText(event.target.value);
    cbGetValue(event.target.value);
  }

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-text">Usuário</InputLabel>
      <OutlinedInput
        id="outlined-adornment-text"
        value={text}
        onChange={handleChangeInput}
        label="Usuário"
        labelWidth={70}
        style={{width: "400px"}}
      />
    </FormControl>
  );
};
