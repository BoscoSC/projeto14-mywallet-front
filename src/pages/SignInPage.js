import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MyWalletLogo from "../components/MyWalletLogo";

import { useEffect, useState } from "react";
import { login } from "../services/backend.js";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);

  async function signin(event) {
    event.preventDefault();

    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data);
      console.log(res.data);
      navigate("/home");
    } catch (err) {
      alert(err.response.data);
    }
  }
  return (
    <SingInContainer>
      <form onSubmit={signin}>
        <MyWalletLogo />
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          placeholder="Senha"
          type="password"
          autocomplete="new-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Entrar</button>
      </form>

      <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
    </SingInContainer>
  );
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
