import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.find((user) => user.userName === userName);
  const newUser = { userName, password };

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

    if (userExists) {
      setError("Ce nom d'utilisateur est déjà pris.");
      return;
    }

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
        Déjà enregistré? <Link to="/login">Log In</Link>
      </p>
    </main>
  );
}

export default Register;
