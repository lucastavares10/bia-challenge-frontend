import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { useStyles } from "./components/assets/useStyles";

const InputHoc = (props) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} fullWidth variant="outlined">
      {props.children}
    </FormControl>
  );
};

export default InputHoc;
