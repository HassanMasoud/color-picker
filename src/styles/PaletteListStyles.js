import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 0.5s ease-in"
    }
  },
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    overflow: "scroll",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#1e8feb;",
    backgroundImage: `url(${bg})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  },

  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("md")]: {
      width: "75%",
    },
    [sizes.down("xs")]: {
      width: "70%",
    },
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

  title: {
    fontSize: "2rem",
  },

  palettes: {
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
      gridGap: "2rem",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.5rem",
    },
  },
};
