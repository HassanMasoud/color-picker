import React from "react";
import { withStyles } from "@material-ui/styles";
import Delete from "@material-ui/icons/Delete";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    position: "relative",
    margin: "0 auto",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "12px",
    color: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};

function DraggableColorBox(props) {
  const { classes, color, name, handleClick } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <Delete className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
