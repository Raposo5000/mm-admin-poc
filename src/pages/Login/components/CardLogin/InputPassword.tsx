import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import React, { useState } from "react";

import {
  VisibilityIcon,
  VisibilityOffIcon,
} from "../../../../components/Icons/index";


interface InputPasswordProps {
  cbGetValue: Function;
}

export const InputPassword: React.FC<InputPasswordProps> = ({cbGetValue}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleChangeInput = (event: any) => {
    setPassword(event.target.value);
    cbGetValue(event.target.value);
  }

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChangeInput}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
        style={{width: "400px"}}
      />
    </FormControl>
  );
};
