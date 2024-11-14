import React, { useState } from "react";
import "../Accueil.css"
import { IoNotifications } from "react-icons/io5";
import Logo from "../../../../assets/logo.png"
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
    const [search, setSearch] = useState("")
  return (
    <div className="header align-items-center w-100 h-100 card-group"> 
      <div className="icone">
        <img src={Logo} alt="img" width={100} className='mt-4'/>
      </div>
      <div className="barre">
        <input 
            type="text" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Faites vos recherches"
            className="form-control formulaire" 
        />
      </div>
      <div className="profil card-group gap-4 align-items-center">
        <div className="profile">
            <Link to={'/home'}>
                <FaUser 
                    size={30} 
                    className="icon"
                    color="#000"
                />
            </Link>
        </div>
        <div className="notif">
            <IoNotifications 
                size={34}  
                className="icon"
                color="#000"
            />
          <span>3</span>
        </div>
        <Link to={"/"}>
          <div className="btn btn-primary btn-deconnect">Deconnexion</div>
        </Link>
      </div>
    </div>
  );
};