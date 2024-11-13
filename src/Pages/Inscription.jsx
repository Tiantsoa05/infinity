
import React, { useState } from 'react';

const InscriForm = () => {

  const [Nom, setNom] = useState('');
  const [Prenoms, setPrenoms] = useState('');
  const [email, setEmail] = useState('');
  const [mdp, setPassword] = useState('');
  const [comdp, setConfirmPassword] = useState('');
  const [erreur, setErreur] = useState('');
  const [number, setNumber] = useState('');
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (mdp !== comdp) {
        setErreur("Les mots de passe ne correspondent pas !");
      return;
    }

    
    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Nom, Prenoms, email, mdp })
    })
    .then((response) => {
      if (response.ok) {
        
        alert("Inscription réussie !");
      } else {
        setErreur("Une erreur s'est produite. Veuillez réessayer.");
      }
    })
    .catch((erreur) => {
      setErreur("Erreur de connexion. Veuillez réessayer.");
    });
  };

  return (
    <div className="InscriForm">
      <h2>BIENVENUE DANS L'INSCRIPTION </h2>
      {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          NOM:
          <input
            type="text"
            value={Nom}
            onChange={(e) =>  setNom(e.target.value)}
            required
          />
        </label><br />
        <label>
          PRENOM(S):
          <input
            type="text"
            value={Prenoms}
            onChange={(e) => setPrenoms(e.target.value)}
            required
          />
        </label><br />
        <label>Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />  
        </label><br />

        <label>
          Mot de passe:
          <input
            type="password"
            value={mdp}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
        </label> <br />
        <label>
          Confirmer votre  mot de passe:
          <input
            type="password"
            value={comdp}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default InscriForm;
