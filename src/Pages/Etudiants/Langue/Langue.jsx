import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card/Card.jsx";

const Langue = () => {
  const [langues, setLangues] = useState([
    {
      langue: "Français",
      image:
        "https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png",
    },
    {
      langue: "Anglais",
      image:
        "https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png",
    },
    {
      langue: "Allemand",
      image:
        "https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png",
    },
    {
      langue: "Italien",
      image:
        "https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png",
    },
    {
      langue: "Russe",
      image:
        "https://www.countryflags.com/wp-content/uploads/russia-flag-png-large.png",
    },
  ]);
  return (
    <div className="langue justify-content-center align-items-center w-100 h-100">
      <h1 className="text-center titre">
        Choisissez une langue que vous voulez apprendre
      </h1>
      <div className="card-group langues">
        {langues.map((langue) => (
          <Card langue={langue} />
        ))}
      </div>
      <div className="deco">
        <img
          src={
            "https://static.vecteezy.com/system/resources/previews/046/158/673/non_2x/cartoon-man-shouting-into-a-megaphone-free-png.png"
          }
          alt="deco"
          className="img-fluid fond"
        />
      </div>
    </div>
  );
};

export default Langue;
