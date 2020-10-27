import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import chroma from "chroma-js";
import "./ColorBox.css";

const styles = {
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

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }

  render() {
    const {
      name,
      background,
      moreUrl,
      showingFullPalette,
      classes,
    } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background }}>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${
              copied && classes.showOverlay
            }`}
          />
          <div
            className={`${classes.copyMessage} ${
              copied && classes.showMessage
            }`}
          >
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
