import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { getUserFromStorage } from "../../utils/storage";

function Login() {
  const userRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const user = userRef.current.value;
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={userRef}
          placeholder="Entrez votre nom d'utilisateur"
        />
        <input type="text" placeholder="Entrez votre mot de passe" />
        <button type="submit">Se connecter</button>
      </form>
      <p>
        Pas encore de compte ? <NavLink to="/register">S'enregistrer</NavLink>
      </p>
    </main>
  );
}

export default Login;
