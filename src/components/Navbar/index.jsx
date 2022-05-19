import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "Context";
import BtnToggle from "components/BtnToggle";

const Navbar = () => {

    const { theme } = useContext(ThemeContext);

    return(
        <>
        
        <div className={theme ? 'navbar Dark' : 'navbar Light'}>
        <div className="nav-links">    
        <Link to={'/'} className={theme ? 'nav-link Dark' : 'nav-link Light'}>Home</Link>
        <Link to={'/about'} className={theme ? 'nav-link Dark' : 'nav-link Light'}>About us</Link>
        <Link to={'/works'} className={theme ? 'nav-link Dark' : 'nav-link Light'}>Projects</Link>
        </div>
        <div className="ctn-toggle-btn"><BtnToggle /></div>
        </div>

        
        
        </>
    )
}

export default Navbar;