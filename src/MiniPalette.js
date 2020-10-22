import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    padding: "0.5rem",
    borderRadius: "5px",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },

  colors: {
    backgroundColor: "grey",
  },

  title: {
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1rem",
    paddingTop: "0.5rem",
    margin: "0",
  },

  emoji: {
    fontSize: "1.5rem",
    marginLeft: "0.5rem",
  },
};

function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;

  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <div className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
