import chroma from "chroma-js";
import sizes from "./sizes";

export default {
  ColorBox: {
    width: "20%",
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    display: "inline-block",
    position: "relative",
    margin: "0 auto",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: (props) => (props.showingFullPalette ? "20%" : "33.3333%"),
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.showingFullPalette ? "10%" : "20%"),
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: (props) => (props.showingFullPalette ? "5%" : "10%"),
    },
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.16 ? "white" : "black",
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.65 ? "black" : "white",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.65 ? "black" : "white",
    position: "absolute",
    bottom: "0",
    right: "0",
    background: "rgba(255, 255, 255, 0.3)",
    width: "60px",
    height: "30px",
    lineHeight: "30px",
    textTransform: "uppercase",
    textAlign: "center",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.65 ? "black" : "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(255, 255, 255, 0.3)",
    textAlign: "center",
    outline: "none",
    border: "none",
    height: "30px",
    width: "100px",
    lineHeight: "30px",
    textTransform: "uppercase",
    fontSize: "1rem",
    cursor: "pointer",
    textDecoration: "none",
    opacity: "0",
  },
  boxContent: {
    position: "absolute",
    left: "0",
    bottom: "0",
    padding: "10px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "12px",
    color: "black",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMessage: {
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    opacity: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "0",
    transform: "scale(0.1)",
    "& h1": {
      textTransform: "uppercase",
      color: "white",
      fontSize: "4rem",
      width: "100%",
      background: "rgba(255, 255, 255, 0.2)",
      marginBottom: "0",
      textAlign: "center",
      padding: "1rem",
      fontWeight: "400",
      textShadow: "1px 1px black",
      [sizes.down("xs")]: {
        fontSize: "4rem",
      },
    },
    "& p": {
      fontWeight: "100",
      fontSize: "2rem",
    },
  },
  showMessage: {
    opacity: "1",
    zIndex: "15",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
    transform: "scale(1)",
  },
};
