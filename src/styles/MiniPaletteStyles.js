export default {
  root: {
    position: "relative",
    backgroundColor: "white",
    border: "1px solid black",
    padding: "0.5rem",
    borderRadius: "5px",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1,
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

  deleteIcon: {
    position: "absolute",
    top: "0px",
    right: "0px",
    height: "20px",
    width: "20px",
    color: "white",
    backgroundColor: "#eb3d30",
    padding: "10px",
    zIndex: 10,
    opacity: 0,
  },
};
