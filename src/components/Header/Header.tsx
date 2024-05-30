"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/navigation";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { push } = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <header className="h-[92px] bg-[var(--dark-green)] gap-6 border-b-[12px] border-[var(--primary-green)] flex justify-between items-center px-4 md:px-[50px] py-8">
        <Image
          src="/Brand-Rentis.svg"
          alt="My Image"
          quality={100}
          width={50}
          height={50}
        />

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        <nav className="hidden md:flex gap-8 flex-1 justify-start ml-4">
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

        <div className="hidden md:flex gap-2 items-center">
          <button
            onClick={() => push("/registration")}
            className="button-pattern-1"
          >
            Cadastre-se
          </button>
          <button
            onClick={() => push("/login")}
            className="button-pattern-2 flex items-center gap-[2px]"
          >
            <span className="material-symbols-outlined white-text">person</span>{" "}
            ENTRAR
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[var(--dark-green)] w-3/4 max-w-lg p-4 rounded-lg">
            <div className="flex justify-end mb-4">
              <button onClick={closeMenu} className="text-white">
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-4">
              <a className="white-text" href="/" onClick={closeMenu}>
                Como Funciona Alugar
              </a>
              <a className="white-text" href="/" onClick={closeMenu}>
                Entenda os Benefícios
              </a>
              <a className="white-text" href="/" onClick={closeMenu}>
                Quem Somos
              </a>
            </nav>
            <div className="flex flex-col gap-4 items-center mt-4">
              <button className="button-pattern-1 w-full">Cadastre-se</button>
              <button className="button-pattern-2 flex items-center gap-[2px] w-full justify-center">
                <span className="material-symbols-outlined white-text">
                  person
                </span>{" "}
                ENTRAR
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
