"use client";

import React, { useState } from "react";
import "./styles.scss";
import Image from "next/image";
import { Divider } from "@mui/material";
import ResumoContent from "./steppers/ResumoContent";
import MeusAnunciosContent from "./steppers/MeusAnunciosContent";
import AlugueisContent from "./steppers/AlugueisContent";
import CarteiraContent from "./steppers/CarteiraContent";
import EnderecoContent from "./steppers/EnderecoContent";
import MeusDadosContent from "./steppers/MeusDadosContent";
import SuporteContent from "./steppers/SuporteContent";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Resumo");

  const renderContent = () => {
    switch (activeTab) {
      case "Resumo":
        return <ResumoContent />;
      case "Meus Anúncios":
        return <MeusAnunciosContent />;
      case "Aluguéis":
        return <AlugueisContent />;
      case "Carteira":
        return <CarteiraContent />;
      case "Endereço":
        return <EnderecoContent />;
      case "Meus Dados":
        return <MeusDadosContent />;
      case "Suporte":
        return <SuporteContent />;
      default:
        return <ResumoContent />;
    }
  };

  return (
    <div className="dashboard-container flex min-h-screen">
      <aside className="sidebar bg-white text-black p-6 border-r border-gray-200 md:w-64 w-16 flex-shrink-0">
        <div className="logo mb-4 mt-2 hidden md:block">
          <h2 className="text-2xl font-bold">Dash Rentis</h2>
        </div>
        <Divider className="hidden md:block" />
        <nav className="mt-4 flex md:block">
          <ul className="space-y-1 text-sm flex md:flex-col flex-row justify-around w-full">
            <li
              className={`cursor-pointer flex flex-col items-center md:flex-row md:items-start ${
                activeTab === "Resumo" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Resumo")}
            >
              <span className="material-symbols-outlined icon-size">
                dashboard
              </span>
              <span className="hidden md:inline">Resumo</span>
            </li>
            <li
              className={`cursor-pointer flex flex-col items-center md:flex-row md:items-start ${
                activeTab === "Meus Anúncios" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Meus Anúncios")}
            >
              <span className="material-symbols-outlined icon-size">
                announcement
              </span>
              <span className="hidden md:inline">Meus Anúncios</span>
            </li>
            <li
              className={`cursor-pointer flex flex-col items-center md:flex-row md:items-start ${
                activeTab === "Aluguéis" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Aluguéis")}
            >
              <span className="material-symbols-outlined icon-size">
                shopping_cart
              </span>
              <span className="hidden md:inline">Aluguéis</span>
            </li>
            <li
              className={`cursor-pointer flex flex-col items-center md:flex-row md:items-start ${
                activeTab === "Carteira" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Carteira")}
            >
              <span className="material-symbols-outlined icon-size">
                account_balance_wallet
              </span>
              <span className="hidden md:inline">Carteira</span>
            </li>
            <li
              className={`cursor-pointer flex flex-col items-center md:flex-row md:items-start ${
                activeTab === "Endereço" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Endereço")}
            >
              <span className="material-symbols-outlined icon-size">
                location_on
              </span>
              <span className="hidden md:inline">Endereço</span>
            </li>
            <li
              className={`cursor-pointer flex flex-col items-center md:flex-row md:items-start ${
                activeTab === "Meus Dados" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Meus Dados")}
            >
              <span className="material-symbols-outlined icon-size">
                person
              </span>
              <span className="hidden md:inline">Meus Dados</span>
            </li>
            <Divider className="hidden md:block" />
            <li
              className={`cursor-pointer flex flex-col items-center md:flex-row md:items-start ${
                activeTab === "Suporte" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Suporte")}
            >
              <span className="material-symbols-outlined icon-size">
                headset_mic
              </span>
              <span className="hidden md:inline">Suporte</span>
            </li>
          </ul>
        </nav>
        <Divider className="mt-2 mb-4 hidden md:block" />
        <div className="logo mt-4 -ml-1 hidden md:block">
          <Image
            src="/regislogodash.svg"
            width={150}
            height={40}
            alt="Logo Rentis"
            className="mx-auto mb-4"
          />
        </div>
      </aside>
      <main className={`flex-1 p-10 bg-white md:ml-0`}>{renderContent()}</main>
    </div>
  );
};

export default Dashboard;
