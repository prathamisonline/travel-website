import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn-primary", "btn-outline"];
const SIZES = ["btn--medium", "btn--large"];

export default function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) {
  const checkButtonStyel = STYLES.includes("buttonSize")
    ? buttonStyle
    : STYLES[0];
}
