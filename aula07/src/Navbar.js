import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import './Navbar.css'

export default  function Navbar(){
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(<div className={`app-${theme}`}>
                <h1>{theme}</h1>
                <button onClick={toggleTheme}>Troca o Tema</button>
            </div>)
}