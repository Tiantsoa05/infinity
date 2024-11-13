import React,{ useState } from "react";
import { CardProf } from "./CardProf/CardProf.jsx";
import "./Profs.css"

export const Profs = ({profs}) => {
    
    return (
        <div className="liste-prof gap-2 d-flex flex-column">
            {
                profs.map((prof)=>(
                    <CardProf prof={prof} key={prof.nom}/>
                ))
            }
                
        </div>   
    )
}