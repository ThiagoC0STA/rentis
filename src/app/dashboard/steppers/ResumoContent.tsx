import React from "react";
import "./styles.scss";

const ResumoContent = () => {
  return (
    <div className="resumo-content">
      <h1 className="welcome-message">Bem vindo(a)!</h1>
      <hr className="divider" />
      <div className="cards-container">
        <div className="card">
          <h2>Anúncios Ativos</h2>
          <p>Você alugou para você</p>
          <h3>5</h3>
        </div>
        <div className="card">
          <h2>Itens Alugados</h2>
          <p>Você alugou para você</p>
          <h3>1</h3>
        </div>
        <div className="card">
          <h2>Itens em empréstimo</h2>
          <p>Você alugou para outras pessoas</p>
          <h3>2</h3>
        </div>
      </div>
    </div>
  );
};

export default ResumoContent;
