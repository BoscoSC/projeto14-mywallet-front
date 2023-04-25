import styled from "styled-components";

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { postTransaction } from "../services/backend.js";

export default function TransactionsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const param = location.pathname.split("/nova-transacao/")[1];
  const [description, setDescription] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  async function newTransaction(event) {
    event.preventDefault();
    try {
      const newValue = Number(value);
      await postTransaction({ description, value: newValue }, param);
      navigate("/home");
    } catch (err) {
      alert(err.response.data);
    }
  }

  return (
    <TransactionsContainer>
      <h1>Nova {param}</h1>
      <form onSubmit={newTransaction}>
        <input
          placeholder="Valor"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <input
          placeholder="Descrição"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button>Salvar {param}</button>
      </form>
    </TransactionsContainer>
  );
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`;
