import React, { useContext } from "react";
import { ThemeContext } from "Context";
import cases from "data";
import DisplayProject from "components/DisplayProject";
import StudyCase from "components/StudyCase";
import { Routes, Route } from "react-router-dom";

/* PARENT of DisplayProject */

const Works =() => {
 
  const { theme } = useContext(ThemeContext);


    return (
        <>
        <h1 className={ theme ? 'text Dark' : 'text Light'}>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
        <p className={ theme ? 'Dark' : 'Light'}>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
        <br></br>  
        
      <div className="list">
        {cases.map(project => (
          <DisplayProject data={project} key={project.name}/>
        ))}
      </div>    
       
      <main>
        <Routes>
          <Route path='/:company' element={<StudyCase/>} />
        </Routes>
      </main>
        </>
    )
}

export default Works;