import React, { Component } from "react";
import "../css/Palette.css";
import PaletteItem from "./PaletteItem";

class Palette extends Component {
  render() {
    console.log(this.props);
    const { colors, onClick, onToggle } = this.props;
    const colorBox = colors.map(({ id, color, checked }) => (
      <PaletteItem
        color={color}
        id={id}
        onClick={onClick}
        checked={checked}
        onToggle={onToggle}
      />
    ));
    return <div className="palette-position">{colorBox}</div>;
  }
}
export default Palette;
