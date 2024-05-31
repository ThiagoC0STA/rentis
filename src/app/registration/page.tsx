"use client";

import React, { useState } from "react";
import TextFieldCustom from "@/components/TextFieldCustom/TextFieldCustom";
import SelectBox from "@/components/SelectBox/SelectBox";
import axios from "axios";
import Modal from "react-modal";
import DatePickerValue from "@/components/InputData/InputData";
import { useRouter } from "next/navigation";

export default function RegistrationPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordSecond, setShowPasswordSecond] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState<boolean>(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState<boolean>(false);
  const [verificationCode, setVerificationCode] = useState<string>("");
  const { push } = useRouter();

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
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleResendCode = () => {
    console.log("Código reenviado");
  };

  const handleVerifyCode = () => {
    console.log("Código verificado:", verificationCode);
    setIsModalOpen(false);
    setIsSecondModalOpen(true);
  };

  const handleSecondModalClose = () => {
    setIsSecondModalOpen(false);
    setIsThirdModalOpen(true);
  };

  const handleThirdModalClose = () => {
    setIsThirdModalOpen(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-10">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-[30px] text-[var(--primary-green)] font-bold mb-4 text-left">
          Vamos começar
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-2">
            <span className="material-symbols-outlined text-[var(--primary-green)] mr-1">
              person
            </span>
            <h3 className="text-base">Seus dados pessoais</h3>
          </div>
          <p className="text-xs text-gray-600 font-light mb-6 text-[var(--danger)]">
            Todos os dados são obrigatórios
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <TextFieldCustom
                label="Nome Completo"
                value={formData.fullName}
                onChange={(val: any) => handleChange("fullName", val)}
                isRequired
              />
            </div>
            <div>
              <TextFieldCustom
                label="Informe seu CPF"
                value={formData.cpf}
                onChange={(val: any) => handleChange("cpf", val)}
                isRequired
                max="12"
                maskType="cpf"
              />
            </div>
            <div className="w-full -mt-2">
              <DatePickerValue
                setDate={(val: any) => handleChange("dateOfBirth", val)}
                text="Data de Nascimento"
                value={formData.dateOfBirth}
                isRequired
                showError={false}
              />
            </div>
            <div>
              <SelectBox
                label="Sexo"
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
                label="WhatsApp"
                value={formData.whatsapp}
                onChange={(val: any) => handleChange("whatsapp", val)}
                isRequired
                maskType="phone"
                max="15"
              />
            </div>
            <div>
              <TextFieldCustom
                label="Documento Identidade - RG/CNH/OUTROS"
                value={formData.identityDocument}
                onChange={(val: any) => handleChange("identityDocument", val)}
                isRequired
              />
            </div>
          </div>
          <div className="flex items-center mb-2 mt-8">
            <span className="material-symbols-outlined text-[var(--primary-green)] mr-1">
              home
            </span>
            <h3 className="text-base">Endereço</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
            <div>
              <TextFieldCustom
                label="CEP"
                value={formData.postalCode}
                onChange={(val: any) => handleChange("postalCode", val)}
                onBlur={handlePostalCodeBlur}
                isRequired
                maskType="cep"
              />
            </div>
            <div>
              <TextFieldCustom
                label="Rua"
                value={formData.street}
                onChange={(val: any) => handleChange("street", val)}
                disabled
              />
            </div>
            <div>
              <TextFieldCustom
                label="Número"
                value={formData.number}
                onChange={(val: any) => handleChange("number", val)}
                isRequired
                max="4"
              />
            </div>
            <div>
              <TextFieldCustom
                label="Bairro"
                value={formData.neighborhood}
                onChange={(val: any) => handleChange("neighborhood", val)}
                disabled
              />
            </div>
            <div>
              <TextFieldCustom
                label="Cidade"
                value={formData.city}
                onChange={(val: any) => handleChange("city", val)}
                disabled
              />
            </div>
            <div>
              <TextFieldCustom
                label="Estado"
                value={formData.state}
                onChange={(val: any) => handleChange("state", val)}
                disabled
              />
            </div>
            <div>
              <TextFieldCustom
                label="Complemento"
                value={formData.complement}
                onChange={(val: any) => handleChange("complement", val)}
              />
            </div>
            <div>
              <TextFieldCustom
                label="Ponto de Referência"
                value={formData.referencePoint}
                onChange={(val: any) => handleChange("referencePoint", val)}
              />
            </div>
          </div>
          <div className="mb-10 mt-6">
            <label className="block mb-2">Tipo de Endereço</label>
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
          <div className="flex items-center mb-2 mt-8">
            <span className="material-symbols-outlined text-[var(--primary-green)] mr-1">
              lock
            </span>
            <h3 className="text-base">Senha</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
            <div>
              <TextFieldCustom
                label="Seu melhor e-mail"
                value={formData.email}
                onChange={(val: any) => handleChange("email", val)}
                isRequired
                type="email"
              />
            </div>
            <div>
              <TextFieldCustom
                label="Confirme o E-mail"
                value={formData.emailConfirmation}
                onChange={(val: any) => handleChange("emailConfirmation", val)}
                isRequired
                type="email"
              />
            </div>
            <div>
              <TextFieldCustom
                label="Crie uma senha"
                value={formData.password}
                onChange={(val: any) => handleChange("password", val)}
                isRequired
                isPassword
                iconEvent={() => setShowPassword(!showPassword)}
                type={showPassword ? "text" : "password"}
                icon={showPassword ? "visibility_off" : "visibility"}
              />
            </div>
            <div>
              <TextFieldCustom
                label="Confirme a senha"
                value={formData.passwordConfirmation}
                onChange={(val: any) =>
                  handleChange("passwordConfirmation", val)
                }
                isRequired
                isPassword
                iconEvent={() => setShowPasswordSecond(!showPasswordSecond)}
                type={showPasswordSecond ? "text" : "password"}
                icon={showPasswordSecond ? "visibility_off" : "visibility"}
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
            <label className="text-xs">
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "650px",
            minHeight: "300px",
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "white",
          },
        }}
      >
        <div className="flex items-center mb-4 mt-2">
          <span className="material-symbols-outlined text-[var(--primary-green)] mr-1">
            open_in_phone
          </span>
          <h2 className="text-xl text-left">Valide seu WhatsApp</h2>
        </div>

        <p className="text-left mb-8">
          Enviamos um código ao seu WhatsApp para validação.
        </p>

        <div className="mb-1">
          <TextFieldCustom
            label="Código de verificação"
            value={verificationCode}
            onChange={(val: any) => setVerificationCode(val)}
            isRequired
          />
        </div>

        <p className="text-left text-xs mb-4">
          Insira o código de 6 dígitos enviado ao seu WhatsApp.
        </p>
        <div className="flex items-center justify-between mb-4">
          <button
            className="text-[var(--primary-green)] hover:text-[var(--dark-green)] text-sm"
            onClick={handleResendCode}
          >
            REENVIAR CÓDIGO
          </button>
          <button
            className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleVerifyCode}
          >
            CONTINUAR
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={isSecondModalOpen}
        onRequestClose={handleSecondModalClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "700px",
            minHeight: "300px",
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "white",
          },
        }}
      >
        <div className="flex items-center mb-4 mt-2">
          <span className="material-symbols-outlined text-[var(--primary-green)] mr-1">
            mail
          </span>
          <h2 className="text-xl text-left">Quase lá!</h2>
        </div>

        <p className="text-left font-semibold mb-6">
          Precisamos verificar seu endereço de e-mail!
        </p>

        <p className="text-left mb-1">
          Enviamos um e-mail para você fazer a verificação do seu usuário.
        </p>

        <p className="text-left mb-8">
          Se não encontrar na sua caixa de entrada, procure também na sua caixa
          de Spam.
        </p>

        <div className="flex items-center justify-end mb-4">
          <button
            className="bg-[var(--dark-green)] hover:bg-[var(--dark-green)] transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSecondModalClose}
          >
            FINALIZAR
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={isThirdModalOpen}
        onRequestClose={handleThirdModalClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "500px",
            minHeight: "200px",
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "white",
          },
        }}
      >
        <div className="flex items-center justify-center mb-8 mt-2">
          <span className="material-symbols-outlined text-[var(--primary-green)] !text-6xl">
            check_circle
          </span>
        </div>
        <h2 className="text-xl text-center mb-8">
          Seu e-mail foi validado com sucesso
        </h2>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              handleThirdModalClose();
              push("/login");
            }}
          >
            ENTRAR
          </button>
        </div>
      </Modal>
    </div>
  );
}
