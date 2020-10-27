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
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
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
