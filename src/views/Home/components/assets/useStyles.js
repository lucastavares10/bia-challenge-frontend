import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  button: {
    color: "white",
    backgroundColor: "#545454",
    width: "100px",
    "&:hover": {
      background: "#9dacb4",
    },
  },
  forgotButton: {
    color: "#545454",
    marginLeft: "-15px",
  },
  title: { color: "#545454", margin: "-10px 0 25px 0" },
  input: {
    margin: "5px",
  },
  toast: {
    width: "60%",
  },
}));
