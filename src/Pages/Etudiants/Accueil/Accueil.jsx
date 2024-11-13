import React, {useState} from "react";
import "./Accueil.css"
import { Header } from "./Header/Header.jsx";
import { Link } from "react-router-dom";
import { Profs } from "./Profs/Profs.jsx";
import { Menus } from "./Menus/Menus.jsx";

export const Accueil = ()=>{
    const data = [
        {
            nom: "Thierry",
            prenom: "John",
            image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
            langue: "Français",
            diplome: "Doctorat",
            numero: "123456789",
            niveau:"debutant",
            cout:"20$"
        },
        {
            nom: "Gérard",
            prenom: "Darmanin",
            image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
            langue: "Français",
            diplome: "Doctorat",
            numero: "123456789",
            niveau:"debutant",
            cout:"20$"
        },
        {
            nom: "César",
            prenom: "Gonzales",
            image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
            langue: "Francais",
            diplome: "Doctorat",
            numero: "123456789",
            niveau:"debutant",
            cout:"20$"
        },
        {
            nom: "Julien",
            prenom: "Roux",
            image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
            langue: "Anglais",
            diplome: "Licence",
            numero: "123456789",
            niveau:"debutant",
            cout:"20$"
        },
        {
            nom: "Marie",
            prenom: "Dubois",
            image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
            langue: "Anglais",
            diplome: "Licence",
            numero: "123456789",
            niveau:"debutant",
            cout:"20$"
        }
    ]
    const [profs,setProfs] = useState(data)
    const [valueSearch,setValueSearch] = useState('')

    return (
        <div className="accueil justify-content-center align-items-center w-100 h-100">
            <Header/>
            <div className="card-group align-items-center contents">
                <div className="liste-profs">
                    <div className="intro">
                        <div className="texte">Liste des professeurs</div>
                        <input 
                            type="text" 
                            className="form-control search-prof"
                            value={valueSearch}
                            onChange={(e)=>{

                                setValueSearch(e.target.value)

                                if(e.target.value.trim() !== ''){
                                    data.forEach(d=>{
                                        if(d.nom.includes(e.target.value)){
                                            setProfs([d])
                                        }
                                    })
                                }else{
                                    setProfs(data)
                                }

                            }}
                        />
                    </div>
                    <div className="list">
                        <Profs profs={profs}/>
                    </div>
                </div>
                <div className="details liste-profs"></div>
                <div className="menu liste-profs">
                    <Menus/>
                </div>
            </div>
        </div>
    );
}