"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "react-modal";

const categorias = [
  "Armação de óculos",
  "Tênis",
  "Pista Hot Wheels",
  "Alarmes",
  "Lança dardo Nerf",
  "Brinco de ouro",
  "Boneco Luccas Neto",
  "Vestidos",
  "Boneca Baby Alive",
  "Pulseira de ouro",
  "Corrente de ouro",
  "Carregador de bateria",
];

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  const handleFilterClick = (categoria: any) => {
    setSelectedFilter(categoria);
    setIsModalOpen(false); // Fechar modal após selecionar
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-12 sm:px-24">
      <div className="w-full flex items-center mb-6">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full p-3 pl-10 bg-white shadow rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-green"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full h-[200px] sm:h-[350px] relative mb-6">
        <Image
          src="/caroussel.png"
          alt="Banner"
          fill
          quality={100}
          className="rounded"
        />
      </div>

      <div className="flex flex-col lg:flex-row w-full mt-4">
        <div className="w-full flex lg:hidden justify-end mb-4">
          <button
            onClick={toggleModal}
            className="p-2 bg-primary-green text-white rounded"
          >
            Filtrar
          </button>
        </div>

        <div className="hidden lg:block w-full lg:w-1/4 pr-4 mb-6 lg:mb-0">
          <h2 className="text-xl font-bold mb-4">Categoria</h2>
          <div className="space-y-2">
            {categorias.map((categoria) => (
              <div
                key={categoria}
                onClick={() => handleFilterClick(categoria)}
                className={`cursor-pointer p-2 rounded ${
                  selectedFilter === categoria
                    ? "font-bold text-primary-green bg-light-green"
                    : "hover:bg-gray-100"
                }`}
              >
                {categoria}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <h2 className="col-span-full text-2xl font-bold mb-4">
            Anúncios Recentes
          </h2>
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center h-[200px] w-full relative justify-center">
                <Image
                  src={`/photo-item.png`}
                  alt={`Produto ${index + 1}`}
                  fill
                  className="mb-2"
                />
              </div>

              <div className="w-full border-t border-gray-200 my-2"></div>
              <div className="text-left">
                <h3 className="font-light">
                  Câmera Nikon D780 24.5 MP Full Frame DSLR NIKON 7557 Câmera
                  Digital Coolpix
                </h3>

                <p className="text-[22px] font-bold my-2">R$ 80,00/dia</p>
                <p className="flex items-center mb-1 mt-3">
                  <span className="material-symbols-outlined mr-1 ml-[1px]">
                    calendar_month
                  </span>
                  Monte Castelo - Juiz de Fora
                </p>
                <p className="flex items-center mb-1">
                  <span className="material-symbols-outlined mr-1">
                    location_on
                  </span>
                  Datas Flexíveis
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-1 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                  Disponível
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxHeight: "80%",
            overflow: "auto",
            padding: "20px",
            borderRadius: "8px",
          },
        }}
      >
        <h2 className="text-xl font-bold mb-4">Categoria</h2>
        <div className="space-y-2">
          {categorias.map((categoria) => (
            <div
              key={categoria}
              onClick={() => handleFilterClick(categoria)}
              className={`cursor-pointer p-2 rounded ${
                selectedFilter === categoria
                  ? "font-bold text-primary-green bg-light-green"
                  : "hover:bg-gray-100"
              }`}
            >
              {categoria}
            </div>
          ))}
        </div>
      </Modal>
    </main>
  );
}
