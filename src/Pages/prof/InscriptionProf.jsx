import React, { useState } from 'react';
import './InscriptioProf.css';

const InscriptionProf = () => {
  const [formData, setFormData] = useState({
    Nom: '',
    Prenoms: '',
    email: '',
    langue : '',
    password: '',
    confirmPassword: '',
    paymentMethod: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    
  
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    setError('');

   
    console.log('Formulaire soumis avec les données :', formData);

     setFormData({
      fullName: '',
      email: '',
      language: 'francais',
      password: '',
      confirmPassword: '',
      paymentMethod: 'paypal',
    });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Inscription Professeur</h2>

        {/* Nom complet */}
        <label htmlFor="fullName">Nom complet</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="Ex. Jean Dupont"
        />

        {/* Adresse e-mail */}
        <label htmlFor="email">Adresse e-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Ex. jean@exemple.com"
        />

        {/* Langue enseignée */}
        <label htmlFor="language">Langue enseignée</label>
        <select
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          required
        >
          <option value="francais">Français</option>
          <option value="anglais">Anglais</option>
          <option value="espagnol">Espagnol</option>
          <option value="allemand">Allemand</option>
          {/* Ajoute d'autres langues si nécessaire */}
        </select>

        {/* Mot de passe */}
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Votre mot de passe"
        />

        {/* Confirmer le mot de passe */}
        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="Confirmez le mot de passe"
        />

        {/* Méthode de paiement */}
        <label htmlFor="paymentMethod">Agence de paiement</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="paypal">PayPal</option>
          <option value="stripe">Stripe</option>
          <option value="virement-bancaire">Virement bancaire</option>
        </select>

        {/* Message d'erreur */}
        {error && <div className="error-message">{error}</div>}

        {/* Bouton de soumission */}
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default ProfessorSignup;
