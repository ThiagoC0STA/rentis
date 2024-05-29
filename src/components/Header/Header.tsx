import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Header() {
  return (
    <header className="h-[92px] bg-[var(--dark-green)] gap-6 border-b-[12px] border-[var(--primary-green)] justify-around flex items-center px-[50px] py-8">
      <Image src="/Brand-Rentis.svg" alt="My Image" quality={100} width={50} height={50} />

      <nav className="flex gap-12 flex-1 justify-start ml-4">
        <a className="white-text" href="/">
          Como Funciona Alugar
        </a>
        <a className="white-text" href="/">
          Entenda os Benefícios
        </a>
        <a className="white-text" href="/">
          Quem Somos
        </a>
      </nav>

      <div className="flex gap-2 items-center">
        <button className="button-pattern-1">Cadastre-se</button>
        <button className="button-pattern-2 flex items-center gap-[2px]">
          <span className="material-symbols-outlined white-text">person</span> ENTRAR
        </button>
      </div>
    </header>
  );
}
