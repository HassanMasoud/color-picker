import sizes from "./sizes";

export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    height: "6vh",
  },
  logo: {
    backgroundColor: "#eceff1",
    height: "100%",
    padding: "0 13px",
    fontSize: "22px",
    marginRight: "15px",
    display: "flex",
    alignItems: "center",
    fontFamily: "Roboto",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    [sizes.down("xs")]: {
      display: "none",
    },
  },
  slider: {
    width: "340px",
    margin: "0 15px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },

    "& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px",
    },
    [sizes.down("md")]: {
      width: "150px",
    },
  },

  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};
