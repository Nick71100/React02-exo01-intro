import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { saveUserToStorage } from "../../utils/storage";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (userName.length < 3) {
      setError("3 caractères minimum");
      return;
    }

    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.userName === userName);

    if (userExists) {
      setError("Ce nom d'utilisateur est déjà pris.");
      return;
    }

    const newUser = { userName, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setError("");
    alert("Enregistrement réussi !");
    setUserName("");
    setPassword("");
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Entree un nom d'utilisateur"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Entrez un mot de passe"
        />
        <button type="submit">S'enregistrer</button>
        {error && <p>{error}</p>}
      </form>
      <p>
        Déjà enregistré? <NavLink to="/login">Log In</NavLink>
      </p>
    </main>
  );
}

export default Register;
