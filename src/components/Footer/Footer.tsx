import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-green)] text-white p-4">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-col justify-center items-center w-full md:w-24 mt-2 mb-6 md:mb-0 md:mr-20">
            <div className="h-24 w-24 relative md:mb-0">
              <Image
                className="rounded"
                src="/Logo-Rentis.png"
                alt="Logo Rentis"
                quality={100}
                fill
              />
            </div>
            {/* <p className="text-[11px] text-center mt-2 text-white text-nowrap">
              Rentis Negócios Online
            </p> */}
          </div>

          <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-between gap-6">
            <div className="text-center md:text-left">
              <h5 className="font-bold">Sobre nós</h5>
              <ul className="list-none">
                <li>
                  <a href="#">Como Funciona</a>
                </li>
                <li>
                  <a href="#">Entenda os Benefícios</a>
                </li>
                <li>
                  <a href="#">Quem Somos</a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h5 className="font-bold">Ajuda</h5>
              <ul className="list-none">
                <li>
                  <a href="#">Suporte</a>
                </li>
                <li>
                  <a href="#">Perguntas Frequentes</a>
                </li>
                <li>
                  <a href="mailto:suporte@rentis.com.br">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="1x"
                      color="#fff"
                      className="mr-1"
                    />
                    suporte@rentis.com.br
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h5 className="font-bold">Parceiros</h5>
              <ul className="list-none">
                <li>
                  <a href="#">Pagar.me</a>
                </li>
                <li>
                  <a href="#">AWS</a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h5 className="font-bold">Termos</h5>
              <ul className="list-none">
                <li>
                  <a href="#">Políticas de Privacidade</a>
                </li>
                <li>
                  <a href="#">Termos de Uso</a>
                </li>
                <li>
                  <a href="#">Políticas de Anúncio</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-200 mt-6 mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between w-full mt-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-2 mb-4 md:mb-0">
            <p className="text-xs text-gray-100 font-light">2024</p>
            <p className="text-xs text-gray-100 font-light">
              Rentis Negócios Online ©️
            </p>
            <p className="text-xs text-gray-100 font-light">
              CNPJ 53.526.248/0001-57
            </p>
            <p className="text-xs text-gray-100 font-light">
              Juiz de Fora - MG
            </p>
          </div>

          <div className="flex gap-2 justify-center md:justify-start">
            <a href="#" className="!text-white">
              <FontAwesomeIcon
                icon={faInstagram}
                color="#fff"
                className="!text-white text-xl"
              />
            </a>
            <a href="#" className="!text-white">
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#fff"
                className="!text-white text-xl"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
