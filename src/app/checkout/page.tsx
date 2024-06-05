"use client";

import TextFieldCustom from "@/components/TextFieldCustom/TextFieldCustom";
import { FormControl, InputLabel } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import "./styles.scss";
import axios from "axios";

function Checkout() {
  const [formData, setFormData] = useState({
    nomePortador: "",
    cpfPortador: "",
    numeroCartao: "",
    mesValidade: "",
    anoValidade: "",
    codigoSeguranca: "",
  });

  const [formDataAddress, setFormDataAddress] = useState({
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    complemento: "",
    pontoReferencia: "",
  });

  const product = {
    name:
      "Câmera Nikon D780 24.5 MP Full Frame DSLR NIKON 7557 Câmera Digital Coolpix P950",
    photo: "",
    id: "#0000",
    createdAt: "17/04/2024 09:00",
    returnDate: "20/04/2024 09:00",
    dailyValue: 10.0,
    category: "Fotografia",
    neighborhood: "São mateus",
    city: "Juiz de Fora",
    ownerName: "Rafael Brasil",
    contact: 41992889735,
    damageInformation:
      "Não foca no zoom a partir de 20x. Precisa de uma lente angular",
    status: "Em Aluguel",
    statusColor: "#285DE5",
  };

  const handleChange = (key: any, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleChangeAddress = (key: any, value: any) => {
    setFormDataAddress({ ...formDataAddress, [key]: value });
  };

  const handlePostalCodeBlur = () => {
    const { cep } = formDataAddress;
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        const { logradouro, bairro, localidade, uf } = response.data;
        setFormDataAddress({
          ...formDataAddress,
          rua: logradouro,
          bairro: bairro,
          cidade: localidade,
          estado: uf,
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar o endereço:", error);
      });
  };
  return (
    <div className="w-full flex flex-wrap px-10 gap-10 md:px-20 lg:px-52 py-20 bg-white">
      <div className="flex-container">
        <div className="flex-wrapper-content bg-[#F9FAFA]">
          <div>
            <div className="flex gap-2 items-center pb-5">
              <span className="material-symbols-outlined">credit_card</span>
              <h2 className="text-[#2E3A59] font-[800] text-xl">PAGAMENTO</h2>
            </div>
            <hr className="divider" />
          </div>

          <div>
            <span className="text-[var(--dark-green)] font-[500] text-xl">
              Cartão de crédito
            </span>
            <p className="text-[#6E7785] font-[400] text-xs">
              Até o momento aceitamos somente Cartão de Crédito
            </p>
          </div>

          <FormControl className="w-full">
            <TextFieldCustom
              label="Nome do portador como está impresso no cartão"
              value={formData.nomePortador}
              onChange={(val: any) => handleChange("nomePortador", val)}
              isRequired
              placeholder="Nome portador"
            />
          </FormControl>

          <FormControl className="w-full">
            <TextFieldCustom
              label="CPF do portador do cartão"
              value={formData.nomePortador}
              onChange={(val: any) => handleChange("nomePortador", val)}
              isRequired
              placeholder="CPF"
            />
          </FormControl>

          <FormControl className="w-full">
            <TextFieldCustom
              label="Número do Cartão"
              value={formData.nomePortador}
              onChange={(val: any) => handleChange("nomePortador", val)}
              isRequired
              placeholder="1234  5678  9101  1121"
            />
          </FormControl>

          <div className="w-full flex md:flex-nowrap flex-wrap gap-7">
            <FormControl className="w-full md:w-1/2">
              <TextFieldCustom
                label="Mês de validade do cartão"
                value={formData.nomePortador}
                onChange={(val: any) => handleChange("nomePortador", val)}
                placeholder="MM/AA"
              />
            </FormControl>
            <FormControl className="w-full md:w-1/2">
              <TextFieldCustom
                label="Ano de validade do cartão"
                value={formData.nomePortador}
                onChange={(val: any) => handleChange("nomePortador", val)}
                placeholder="MM/AA"
              />
            </FormControl>
          </div>

          <FormControl className="w-full md:w-1/2">
            <TextFieldCustom
              label="Código de segurança do cartão"
              value={formData.nomePortador}
              onChange={(val: any) => handleChange("nomePortador", val)}
              isRequired
              placeholder="CVV"
            />
          </FormControl>
        </div>
        <div className="w-full border border-[#30B566] p-2 flex gap-1 bg-[#CEF5E3] items-center">
          <span className="material-symbols-outlined !text-4xl !text-[#068F8F]">
            assignment_turned_in
          </span>
          <span className="text-[#091E42] font-[400] text-base">
            As informações do seu cartão de crédito são protegidas por token.
            Estabelecemos parcerias com a processadora de pagamento para
            garantir que os detalhes do seu cartão de crédito sejam bem
            protegidos. A Rentis não terá acesso às informações do seu cartão de
            crédito.
          </span>
        </div>
      </div>
      <div className="flex-wrapper bg-[#F3F3F3]">
        <div>
          <div className="flex gap-2 items-center pb-5">
            <span className="material-symbols-outlined">contract</span>
            <h2 className="text-[#2E3A59] font-[800] text-xl">
              Resumo do Pedido
            </h2>
          </div>
          <hr className="divider" />
        </div>
        <div className="w-full flex gap-4">
          <Image
            src="/et_picture.png"
            alt="off-picture"
            width={100}
            height={100}
          ></Image>
          <span>{product.name}</span>
        </div>
        <hr className="divider" />
        <div>
          <span>Período do Aluguel</span>
          <div className="flex w-full flex-nowrap gap-7 ">
            <FormControl className="w-full md:w-1/2">
              <TextFieldCustom
                label=""
                onChange={(val: any) => handleChange("profissao", val)}
                isRequired
              />
            </FormControl>

            <FormControl className="w-full md:w-1/2">
              <TextFieldCustom
                label=""
                onChange={(val: any) => handleChange("rendaMensal", val)}
                isRequired
                maskType="money"
              />
            </FormControl>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="material-symbols-outlined">location_on</span>
          <p className="text-[#6C6C6C] font-[400] text-sm">
            {product.neighborhood} - {product.city}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <span className="material-symbols-outlined">account_box</span>
          <p className="text-[#6C6C6C] font-[400] text-sm">
            {product.ownerName}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <span className="material-symbols-outlined">new_releases</span>
          <p className="text-[#6C6C6C] font-[400] text-sm">
            Proprietário verificado
          </p>
        </div>

        <hr className="divider" />

        <div className="flex justify-between flex-nowrap">
          <span>Deposito Reembolsável</span>
          <span>R$ 70,00</span>
        </div>

        <div className="flex justify-between flex-nowrap">
          <div className="flex gap-2 items-center">
            <span className="border">3</span>
            <span>dias de aluguel:</span>
          </div>
          <span>R$ 70,00</span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between flex-nowrap">
            <span className="font-[800] text-base">Total:</span>
            <span className="font-[800] text-base">R$ 150,00</span>
          </div>
          <span className="font-[400] text-[8px] text-[#F23106]">
            Não cobramos taxa para você alugar
          </span>
        </div>

        <button
          className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          FINALIZAR
        </button>

        <span className="font-[400] text-[#606368]">
          O Depósito Reembolsável é um valor pré-determinado que será
          temporariamente retido no seu cartão de crédito até a devolução do
          objeto
        </span>
      </div>
      <div className="flex-col-40 px-20 py-10 bg-[#F9FAFA] flex flex-col gap-7 rounded-[5px]">
        <h2 className="text-[#005866] font-[700] text-xl">Seu endereço</h2>
        <div className="flex flex-wrap gap-7">
          <FormControl className="w-full md:w-1/3">
            <TextFieldCustom
              label="CEP"
              value={formDataAddress.cep}
              onChange={(val: any) => handleChangeAddress("cep", val)}
              onBlur={handlePostalCodeBlur}
              maskType="cep"
              placeholder="CEP"
            />
          </FormControl>

          <FormControl className="w-full md:flex-1">
            <TextFieldCustom
              label="Rua"
              value={formDataAddress.rua}
              onChange={(val: any) => handleChangeAddress("rua", val)}
              placeholder="Rua"
            />
          </FormControl>

          <FormControl className="w-full md:w-1/4">
            <TextFieldCustom
              label="Número"
              value={formDataAddress.numero}
              onChange={(val: any) => handleChangeAddress("numero", val)}
              type="number"
              placeholder="Número"
            />
          </FormControl>

          <FormControl className="w-full md:w-1/3">
            <TextFieldCustom
              label="Bairro"
              value={formDataAddress.bairro}
              onChange={(val: any) => handleChangeAddress("bairro", val)}
              isRequired
              placeholder="Bairro"
            />
          </FormControl>

          <FormControl className="w-full md:flex-1">
            <TextFieldCustom
              label="Cidade"
              value={formDataAddress.cidade}
              onChange={(val: any) => handleChangeAddress("cidade", val)}
              isRequired
              placeholder="Cidade"
            />
          </FormControl>

          <FormControl className="w-full md:w-1/4">
            <TextFieldCustom
              label="Estado"
              value={formDataAddress.estado}
              onChange={(val: any) => handleChangeAddress("estado", val)}
              isRequired
              placeholder="Estado"
            />
          </FormControl>

          <FormControl className="w-full md:w-1/3">
            <TextFieldCustom
              label="Complemento"
              value={formDataAddress.complemento}
              onChange={(val: any) => handleChangeAddress("complemento", val)}
              isRequired
              placeholder="Complemento"
            />
          </FormControl>

          <FormControl className="w-full md:flex-1">
            <TextFieldCustom
              label="Ponto de referência"
              value={formDataAddress.pontoReferencia}
              onChange={(val: any) =>
                handleChangeAddress("pontoReferencia", val)
              }
              isRequired
              placeholder="Ponto de referência"
            />
          </FormControl>
        </div>
      </div>

      <div className=" w-full flex gap-10 flex-wrap justify-center items-center">
        <Image
          src="/images/checkout/IMG-pagarme.png"
          alt="pagarme"
          width={100}
          height={100}
        ></Image>
        <Image
          src="/images/checkout/IMG-stone.png"
          alt="pagarme"
          width={100}
          height={100}
        ></Image>
        <Image
          src="/images/checkout/IC-encrypted-card.png"
          alt="pagarme"
          width={100}
          height={100}
        ></Image>
        <Image
          src="/images/checkout/IMG-site-seguro.png"
          alt="pagarme"
          width={100}
          height={100}
        ></Image>
      </div>
    </div>
  );
}

export default Checkout;
