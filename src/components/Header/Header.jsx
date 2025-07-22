import ToggleTheme from "../ToggleTheme/ToggleTheme";
import './header.css'

const Header = ({ handleTheme, dark }) => {
  return (
    <header>
      <h1>World</h1>
      <ToggleTheme handleTheme={handleTheme} dark={dark}/>
    </header>
  );
};

export default Header;
