export default {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& h1": {
      margin: "0",
      padding: "1rem 0",
    },
    "& a": {
      color: "white",
    },
  },

  palettes: {
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};
