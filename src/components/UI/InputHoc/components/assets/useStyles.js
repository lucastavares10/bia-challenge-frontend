import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiButtonBase-root": {
      margin: theme.spacing(3),
    },
  },
  formControl: {
    marginTop: theme.spacing(2),
  },
}));
