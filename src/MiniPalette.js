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
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    overflow: "hidden",
    borderRadius: "5px",
  },

  miniColor: {
    display: "inline-block",
    width: "20%",
    height: "25%",
    margin: "0",
    marginBottom: "-3px",
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
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <div className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
