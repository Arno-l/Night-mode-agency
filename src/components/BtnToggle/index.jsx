import React, {useContext} from "react";
import { ThemeContext } from "Context";


const BtnToggle = () => {

    const {toggleTheme, theme} = useContext(ThemeContext)


    return (
        <div
        onClick={toggleTheme}
        className={theme ? 'btn-toggle goLight' : 'btn-toggle goDark'}
        >
       {theme ? "Dark" : "Light"}
        </div>
    )
}

export default BtnToggle; 