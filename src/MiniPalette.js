import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    backgroundColor: "white",
    "& h1": {
      margin: "0",
    },
  },
};

function MiniPalette(props) {
  const { classes } = props;

  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
