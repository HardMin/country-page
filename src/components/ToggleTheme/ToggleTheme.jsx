import { Sun } from "lucide-react";
import "./toggletheme.css";
import { Moon } from "lucide-react";

export default function ToggleTheme({ handleTheme, dark }) {
  return (
    <div className={`toggle-theme `} onClick={handleTheme}>
      <div className={`toggle-theme-icon ${dark ? "theme-dark" : ""}`}>
        <Moon />
        <Sun />
      </div>
    </div>
  );
}
