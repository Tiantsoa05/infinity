import React from "react";
import { Link } from "react-router-dom";
import "./Menus.css"

export const Menus = ({setLessons,setExercice}) => {
    return (
        <div className="menus">
            <div className="menu-card cursor-pointer menu-card" onClick={setLessons}>
                <div className="card-body">
                    <h5 className="card-title">Leçons</h5>
                    <p className="card-text">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoNpsu4s9DMHTtXkuuItwSp2ArmLW4YjdA&s" alt="icon" className="legend-image"/>
                    </p>
                </div>
            </div>
            
            <div className="menu-card cursor-pointer menu-card" onClick={setExercice}>
                <div className="card-body">
                    <h5 className="card-title">Exercice</h5>
                    <p className="card-text">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoNpsu4s9DMHTtXkuuItwSp2ArmLW4YjdA&s" alt="icon" className="legend-image"/>
                    </p>
                </div>
            </div>
        </div>
    )
}