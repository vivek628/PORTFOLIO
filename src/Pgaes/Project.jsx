import React from "react";
import {Data} from "../Components/Data"
import "../Style/Project.css"
import ProjectItem from "../Components/ProjectItem.jsx";
function Project()
{
    return(
   <div className="projects">
    <h1>My Personal Project</h1>
    <div className="projectList">
        {Data.map((p)=>{
            return(<ProjectItem name={p.name} image={p.image}></ProjectItem>)
        })}
    </div>
   </div>
    )
}
export  default Project