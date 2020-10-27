export default {
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
