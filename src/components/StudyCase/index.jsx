import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "Context";
import cases from "data";

/* CHILD */

const StudyCase = () => {
const { company } = useParams();
const { theme } = useContext(ThemeContext);
const [currentProject, setCurrentProject] = useState(undefined)

useEffect(
  ()=>{
    const selectProject = cases.find((project) => project.name === company.split('-')[0]);
    setCurrentProject(selectProject);
  }, [company]
)



    return (
        <>
        <div className={theme ? " result Dark" : "result Light"}>
         {currentProject !== undefined ? 
        <h2>{currentProject.title}</h2>
        : null
        }
        {currentProject !== undefined ? 
        <h4>{currentProject.description}</h4>
        : null
        }
        </div>
        </>
    )
}

export default StudyCase;