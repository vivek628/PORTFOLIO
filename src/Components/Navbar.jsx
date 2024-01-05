import React, { useEffect, useState } from "react";
import { Link , useLocation } from "react-router-dom";
import "../Style/Navbar.css"
import Reodericon from "@material-ui/icons/Reorder";

function Navbar()
{  let uselocation=useLocation()
    useEffect(()=>{
      setExpand(false)
    },[uselocation])
    let [expand ,setExpand]=useState(false)
    return(
        <div className="navbar" id={expand ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={()=>{setExpand((prev)=>!prev)}}>
                    <Reodericon></Reodericon>
                </button>
            </div>
            <div className="links">
             <Link to="/">Home</Link>
             <Link to="/project">Project</Link>
             <Link to="/edu">Education</Link>
            </div>
        </div>
    )
}
export default Navbar