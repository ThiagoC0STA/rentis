"use client";

import TextFieldCustom from "@/components/TextFieldCustom/TextFieldCustom";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const { push } = useRouter();

  const handleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
  };

  const handleLogin = () => {
    // Lógica de login aqui
  };

  const handlePasswordRecovery = () => {
    // Lógica de recuperação de senha aqui
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-16 rounded-lg shadow-lg w-full max-w-xl relative">
        {!isForgotPassword ? (
          <>
            <h2 className="text-[28px] font-light mb-10 text-center">
              Digite os dados para entrar
            </h2>
            <form>
              <div className="mb-4 mt-8">
                <TextFieldCustom
                  label="Email"
                  value={email}
                  onChange={(val: any) => setEmail(val)}
                  isRequired
                  type="email"
                />
              </div>
              <div className="mt-6 mb-6">
                <TextFieldCustom
                  label="Senha"
                  value={password}
                  onChange={(val: any) => setPassword(val)}
                  isRequired
                  type="password"
                />
              </div>
              <div className="flex items-center justify-center mb-1">
                <button
                  className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                  onClick={handleLogin}
                >
                  Entrar
                </button>
              </div>
              <div className="text-left">
                <button
                  type="button"
                  className="text-[var(--primary-green)] text-xs"
                  onClick={handleForgotPassword}
                >
                  Esqueci a minha senha
                </button>
              </div>
              <div className="mt-2 text-center">
                <div className="flex items-center justify-center">
                  <hr className="border-gray-300 flex-grow" />
                  <span className="mx-2 text-gray-500">ou</span>
                  <hr className="border-gray-300 flex-grow" />
                </div>
                <button
                  className="bg-gray-500 hover:bg-gray-700 transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
                  type="button"
                  onClick={() => push("/registration")}
                >
                  Cadastre-se
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <button
              type="button"
              className="absolute top-4 left-4 text-[var(--primary-green)] hover:text-[var(--dark-green)] flex items-center"
              onClick={handleForgotPassword}
            >
              <span className="material-symbols-outlined">chevron_left</span>
              <p className="text-[var(--primary-green)] text-xs -ml-1">
                {" "}
                Voltar ao login
              </p>
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Recuperar Senha
            </h2>
            <p className="text-left text-gray-700 text-sm mb-1">
              Enviaremos um e-mail com instruções de como redefinir sua senha.
            </p>
            <p className="text-left text-gray-700 text-sm mb-8">
              Preencha os dados abaixo para solicitar a recuperação de senha
            </p>
            <form>
              <div className="mb-4">
                <TextFieldCustom
                  label="Email para recuperar senha"
                  value={forgotEmail}
                  onChange={(val: any) => setForgotEmail(val)}
                  isRequired
                  type="email"
                />
              </div>
              <div className="flex items-center justify-center mb-6">
                <button
                  className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                  onClick={handlePasswordRecovery}
                >
                  Enviar
                </button>
              </div>
              <div className="text-center text-sm text-gray-600 mb-4">
                <strong className="text-[var(--danger)]">Atenção:</strong> se
                você não receber nossa mensagem em alguns minutos, verifique a
                caixa de SPAM ou Lixo Eletrônico de seu e-mail, ou tente
                reenviar sua solicitação.
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
