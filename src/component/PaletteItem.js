import React, { Component } from "react";
import "../css/Palette.css";

class Palette extends Component {
  render() {
    const { id, color, checked, onClick, onToggle } = this.props;
    return (
      <div
        style={{ background: color }}
        key={id}
        onClick={() => onClick(id)}
        className={`colorBox ${checked && "checked"}`}
      ></div>
    );
  }
}
export default Palette;
