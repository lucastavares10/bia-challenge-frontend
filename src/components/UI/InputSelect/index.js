import React from "react";
import InputHoc from "../InputHoc";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const InputSelect = (props) => {
  return (
    <InputHoc>
      <InputLabel>{props.label}</InputLabel>
      <Select label={props.label} {...props}>
        <MenuItem value="">Selecione...</MenuItem>
        {props.options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </InputHoc>
  );
};

export default InputSelect;
