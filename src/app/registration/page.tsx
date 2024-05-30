"use client";

import React, { useState } from "react";
import TextFieldCustom from "@/components/TextFieldCustom/TextFieldCustom";
import SelectBox from "@/components/SelectBox/SelectBox";
import axios from "axios";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    cpf: "",
    dateOfBirth: "",
    gender: "",
    whatsapp: "",
    identityDocument: "",
    postalCode: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    complement: "",
    referencePoint: "",
    addressType: "",
    email: "",
    emailConfirmation: "",
    password: "",
    passwordConfirmation: "",
    termsAccepted: false,
  });

  const handleChange = (key: any, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  const handlePostalCodeBlur = () => {
    const { postalCode } = formData;
    axios
      .get(`https://viacep.com.br/ws/${postalCode}/json/`)
      .then((response) => {
        const { logradouro, bairro, localidade, uf } = response.data;
        setFormData({
          ...formData,
          street: logradouro,
          neighborhood: bairro,
          city: localidade,
          state: uf,
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar o endereço:", error);
      });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios
      .post("/usuario", formData)
      .then((response) => {
        const userId = response.data.id;
        console.log("User ID:", userId);
      })
      .catch((error) => {
        console.error("Erro ao enviar dados:", error);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-10">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl text-[var(--primary-green)] font-bold mb-4 text-left">
          Vamos começar{" "}
        </h2>
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-semibold mb-1">Seus dados pessoais</h3>
          <p className="text-xs text-gray-600 font-light mb-6 text-[var(--danger)]">
            Todos os dados são obrigatórios*
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <TextFieldCustom
                label="Nome Completo*"
                value={formData.fullName}
                onChange={(val: any) => handleChange("fullName", val)}
                isRequired
              />
            </div>
            <div>
              <TextFieldCustom
                label="Informe seu CPF*"
                value={formData.cpf}
                onChange={(val: any) => handleChange("cpf", val)}
                isRequired
                maskType="cpf"
              />
            </div>
            <div>
              <TextFieldCustom
                label="Data de Nascimento*"
                value={formData.dateOfBirth}
                onChange={(val: any) => handleChange("dateOfBirth", val)}
                isRequired
                maskType="date"
              />
            </div>
            <div>
              <SelectBox
                label="Sexo*"
                options={[
                  { key: "male", label: "Masculino" },
                  { key: "female", label: "Feminino" },
                  { key: "other", label: "Outro" },
                ]}
                value={formData.gender}
                onSelect={(val: any) => handleChange("gender", val)}
                isRequired
              />
            </div>
            <div>
              <TextFieldCustom
                label="WhatsApp*"
                value={formData.whatsapp}
                onChange={(val: any) => handleChange("whatsapp", val)}
                isRequired
                maskType="phone"
              />
            </div>
            <div>
              <TextFieldCustom
                label="Documento Identidade - RG/CNH/OUTROS*"
                value={formData.identityDocument}
                onChange={(val: any) => handleChange("identityDocument", val)}
                isRequired
              />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-4 mt-6">Endereço</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <TextFieldCustom
                label="CEP*"
                value={formData.postalCode}
                onChange={(val: any) => handleChange("postalCode", val)}
                onBlur={handlePostalCodeBlur}
                isRequired
                maskType="cep"
              />
            </div>
            <div>
              <TextFieldCustom
                label="Rua*"
                value={formData.street}
                onChange={(val: any) => handleChange("street", val)}
                disabled
              />
            </div>
            <div>
              <TextFieldCustom
                label="Número*"
                value={formData.number}
                onChange={(val: any) => handleChange("number", val)}
                isRequired
              />
            </div>
            <div>
              <TextFieldCustom
                label="Bairro*"
                value={formData.neighborhood}
                onChange={(val: any) => handleChange("neighborhood", val)}
                disabled
              />
            </div>
            <div>
              <TextFieldCustom
                label="Cidade*"
                value={formData.city}
                onChange={(val: any) => handleChange("city", val)}
                disabled
              />
            </div>
            <div>
              <TextFieldCustom
                label="Estado*"
                value={formData.state}
                onChange={(val: any) => handleChange("state", val)}
                disabled
              />
            </div>
            <div>
              <TextFieldCustom
                label="Complemento*"
                value={formData.complement}
                onChange={(val: any) => handleChange("complement", val)}
              />
            </div>
            <div>
              <TextFieldCustom
                label="Ponto de Referência*"
                value={formData.referencePoint}
                onChange={(val: any) => handleChange("referencePoint", val)}
              />
            </div>
          </div>
          <div className="mb-10 mt-6">
            <label className="block text-gray-700 mb-1 mt-2">Tipo de Endereço*</label>
            <div className="flex items-center">
              <label className="mr-4 text-sm">
                <input
                  type="radio"
                  value="home"
                  checked={formData.addressType === "home"}
                  onChange={() => handleChange("addressType", "home")}
                  className="mr-1"
                />
                Casa
              </label>
              <label className="text-sm">
                <input
                  type="radio"
                  value="work"
                  checked={formData.addressType === "work"}
                  onChange={() => handleChange("addressType", "work")}
                  className="mr-1"
                />
                Trabalho
              </label>
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-4 mt-4">Senha</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <TextFieldCustom
                label="Seu melhor e-mail*"
                value={formData.email}
                onChange={(val: any) => handleChange("email", val)}
                isRequired
                type="email"
              />
            </div>
            <div>
              <TextFieldCustom
                label="Confirme o E-mail*"
                value={formData.emailConfirmation}
                onChange={(val: any) => handleChange("emailConfirmation", val)}
                isRequired
                type="email"
              />
            </div>
            <div>
              <TextFieldCustom
                label="Crie uma senha*"
                value={formData.password}
                onChange={(val: any) => handleChange("password", val)}
                isRequired
                type="password"
              />
            </div>
            <div>
              <TextFieldCustom
                label="Confirme a senha*"
                value={formData.passwordConfirmation}
                onChange={(val: any) =>
                  handleChange("passwordConfirmation", val)
                }
                isRequired
                type="password"
              />
            </div>
          </div>
          <div className="mb-4 mt-8 flex items-center">
            <input
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={(e) => handleChange("termsAccepted", e.target.checked)}
              className="mr-2"
            />
            <label className="text-gray-700 text-xs">
              Ao prosseguir você concorda com os{" "}
              <a href="#" className="text-blue-500">
                Termos de uso
              </a>{" "}
              e a{" "}
              <a href="#" className="text-blue-500">
                Política de Privacidade e uso das informações
              </a>
              .
            </label>
          </div>
          
          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
