import React from "react";
import { Link } from "react-router-dom";
import "./Menus.css"

export const Menus = () => {
    return (
        <div className="menus card-group flex-column gap-5 justify-content-center align-items-center">
            <Link to="/langue" className="menu-item btn btn-primary">
                Pratiquer
            </Link>
            <Link to="/langue" className="menu-item btn btn-primary">
                Pratiquer
            </Link>
            <Link to="/langue" className="menu-item btn btn-primary">
                Pratiquer
            </Link>
            <Link to="/langue" className="menu-item btn btn-primary">
                Pratiquer
            </Link>
            <Link to="/langue" className="menu-item btn btn-primary">
                Pratiquer
            </Link>
        </div>
    )
}