import React, { useState } from "react";
import Image from "next/image";
import "./styles.scss";

const CarteiraContent = () => {
  const [anuncios, setAnuncios] = useState([
    {
      id: 1,
      titulo:
        "Câmera Nikon D780 24.5 MP Full Frame DSLR NIKON 7557 Câmera Digital Coolpix P950",
      imagem: "/photo-item.png",
      data: "19/04/2024",
      disponivelInicio: "17/04/2024",
      disponivelFim: "17/04/2024",
      valorDiaria: "R$ 50,00 /dia",
      categoria: "Fotografia",
      local: "São Matheus - Juiz de Fora",
      informacoes:
        "Não foca no zoom a partir de 20x. Precisa de uma lente angular",
      publicado: true,
    },
    {
      id: 2,
      titulo: "Câmera Canon EOS R5 45MP Full Frame Mirrorless",
      imagem: "/photo-item.png",
      data: "20/05/2024",
      disponivelInicio: "18/05/2024",
      disponivelFim: "19/05/2024",
      valorDiaria: "R$ 60,00 /dia",
      categoria: "Fotografia",
      local: "Centro - São Paulo",
      informacoes:
        "Pequeno arranhão na lente, mas não afeta a qualidade da imagem.",
      publicado: false,
    },
    {
      id: 3,
      titulo: "GoPro Hero 9 Black 20MP",
      imagem: "/photo-item.png",
      data: "25/06/2024",
      disponivelInicio: "24/06/2024",
      disponivelFim: "26/06/2024",
      valorDiaria: "R$ 30,00 /dia",
      categoria: "Ação",
      local: "Barra - Rio de Janeiro",
      informacoes:
        "Alguns arranhões no corpo da câmera, mas funciona perfeitamente.",
      publicado: true,
    },
    {
      id: 4,
      titulo: "Sony Alpha a7 III 24MP Full Frame Mirrorless",
      imagem: "/photo-item.png",
      data: "30/07/2024",
      disponivelInicio: "29/07/2024",
      disponivelFim: "31/07/2024",
      valorDiaria: "R$ 70,00 /dia",
      categoria: "Fotografia",
      local: "Copacabana - Rio de Janeiro",
      informacoes: "A lente precisa de limpeza frequente devido a poeira.",
      publicado: false,
    },
  ]);

  const togglePublicado = (id: any) => {
    setAnuncios(
      anuncios.map((anuncio) =>
        anuncio.id === id
          ? { ...anuncio, publicado: !anuncio.publicado }
          : anuncio
      )
    );
  };

  return (
    <div className="carteira-content">
      <div className="anuncios-grid">
        {anuncios.map((anuncio) => (
          <div key={anuncio.id} className="card">
            <div className="card-content">
              <h3>{anuncio.titulo}</h3>
              <div className="anuncio-imagem">
                <Image
                  src={anuncio.imagem}
                  alt="Imagem do anúncio"
                  fill
                />
              </div>
              <p className="data">
                <span className="material-symbols-outlined">
                  calendar_today
                </span>{" "}
                {anuncio.data}
              </p>
              <p className="disponibilidade">Disponível para aluguel:</p>
              <p className="periodo">
                {anuncio.disponivelInicio} - {anuncio.disponivelFim}
              </p>
              <p className="valor-categoria">
                <span>Valor diária:</span> {anuncio.valorDiaria}
              </p>
              <p className="valor-categoria">
                <span>Categoria:</span> {anuncio.categoria}
              </p>
              <p className="local">
                <span className="material-symbols-outlined">location_on</span>{" "}
                {anuncio.local}
              </p>
              <p className="informacoes">
                <span>Informações sobre danos:</span> {anuncio.informacoes}
              </p>
              <div className="card-actions">
                <button className="edit-button">Editar</button>
                <button className="delete-button">Excluir</button>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={anuncio.publicado}
                    onChange={() => togglePublicado(anuncio.id)}
                  />
                  <span
                    className={`slider ${anuncio.publicado ? "green" : "red"}`}
                  ></span>
                  {anuncio.publicado ? "Publicado" : "Despublicado"}
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarteiraContent;
