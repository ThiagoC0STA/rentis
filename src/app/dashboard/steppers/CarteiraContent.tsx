import React, { useState } from "react";
import Image from "next/image";
import "./styles.scss";
import { FormControl } from "@mui/material";
import SelectBox from "@/components/SelectBox/SelectBox";
import { banks, typeBank } from "@/helpers/constants";
import TextFieldCustom from "@/components/TextFieldCustom/TextFieldCustom";

const CarteiraContent = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    dataNascimento: "",
    sexo: "",
    whatsapp: "",
    rg: "",
    profissao: "",
    rendaMensal: "",
    nomeMae: "",
    senha: "",
    confirmaSenha: "",
    conta: "",
    digitoConta: "",
    tipoContaBancaria: "",
    cpfTitularConta: "",
    agencia: "",
    digitoAgencia: "",
    banco: "",
    nomeTitularConta: "",
  });

  const transactions = [
    {
      status: "SUCESSO",
      value: "- R$ 255,49",
      date: "21/03/2024",
      time: "15:54:08",
      account: "29370-4",
      operation: "SAQUE",
      statusColor: "bg-green-500",
    },
    {
      status: "SUCESSO",
      value: "+ R$ 255,49",
      date: "15/02/2024",
      time: "15:54:08",
      account: "29370-4",
      operation: "ALUGUEL",
      statusColor: "bg-green-500",
    },
    {
      status: "FALHA",
      value: "- R$ 255,49",
      date: "15/02/2024",
      time: "15:54:08",
      account: "29370-4",
      operation: "SAQUE",
      statusColor: "bg-red-500",
    },
  ];

  const handleChange = (key: any, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <>
      <div className="resumo-content">
        <h1 className="welcome-message">Minha carteira</h1>
        <hr className="divider" />
      </div>

      <div className="flex flex-wrap gap-7 items-center">
        <div className="card flex flex-col gap-4 flex-1 min-w-[210px] shadow-sm !border-none !bg-[#F9FAFA]">
          <div className="flex flex-col">
            <h2 className="text-2xl">Saldo</h2>
            <span className="text-[8px] text-gray-400">
              Disponível para saque
            </span>
          </div>
          <span className="text-lg font-[300]">R$ 100,00</span>
        </div>
        <div className="card flex flex-col gap-4 flex-1 min-w-[210px] shadow-sm !border-none !bg-[#F9FAFA]">
          <div className="flex flex-col">
            <h2 className="text-2xl">Previsto</h2>
            <span className="text-[8px] text-gray-400">
              Alugueis em andamento
            </span>
          </div>
          <span className="text-lg font-[300]">R$ 100,00</span>
        </div>

        <div className="card w-full shadow-sm !border-none !bg-[#F9FAFA]">
          <h2 className="text-2xl">Dados bancários</h2>

          <div className="flex flex-wrap gap-y-7 pl-4 pr-4 md:pr-20 lg:pr-36 py-8">
            <div className="w-full flex flex-wrap md:flex-nowrap gap-7">
            <div className="flex w-full gap-7 flex-nowrap">
              <FormControl className="w-full md:flex-1">
                <TextFieldCustom
                  label="Conta"
                  value={formData.conta}
                  onChange={(val: any) => handleChange("conta", val)}
                  max="4"
                  maskType="onlyNumber"
                />
              </FormControl>

              <FormControl className="w-full md:w-1/6 max-w-[100px]">
                <TextFieldCustom
                  label="Digito"
                  value={formData.digitoConta}
                  onChange={(val: any) => handleChange("digitoConta", val)}
                  maskType="onlyNumber"
                  max="1"
                />
              </FormControl>
            </div>

              <FormControl className="w-full md:w-1/4">
                <SelectBox
                  label="Tipo de conta bancaria"
                  options={typeBank}
                  value={formData.tipoContaBancaria}
                  onSelect={(val: any) =>
                    handleChange("tipoContaBancaria", val)
                  }
                  isRequired
                />
              </FormControl>

              <FormControl className="w-full md:w-1/4">
                <TextFieldCustom
                  label="CPF Titular conta"
                  value={formData.cpfTitularConta}
                  onChange={(val: any) => handleChange("cpfTitularConta", val)}
                  isRequired
                  maskType="cpf"
                  max={14}
                />
              </FormControl>
            </div>

            <div className="w-full flex flex-wrap md:flex-nowrap gap-7">
              <div className="flex w-full gap-7 flex-nowrap">
                <FormControl className="w-full md:flex-1">
                  <TextFieldCustom
                    label="Agência"
                    value={formData.agencia}
                    onChange={(val: any) => handleChange("agencia", val)}
                    max="12"
                    maskType="onlyNumber"
                  />
                </FormControl>

                <FormControl className="w-full md:w-1/6 max-w-[100px]">
                  <TextFieldCustom
                    label="Código"
                    value={formData.digitoAgencia}
                    onChange={(val: any) => handleChange("digitoAgencia", val)}
                    isRequired
                    maskType="onlyNumber"
                    max="1"
                  />
                </FormControl>
              </div>

              <FormControl className="w-full md:w-1/4">
                <SelectBox
                  label="Banco"
                  options={banks}
                  value={formData.banco}
                  onSelect={(val: any) => handleChange("banco", val)}
                  isRequired
                />
              </FormControl>

              <FormControl className="w-full md:w-1/4">
                <TextFieldCustom
                  label="Nome completo titular conta"
                  value={formData.nomeTitularConta}
                  onChange={(val: any) => handleChange("nomeTitularConta", val)}
                  isRequired
                />
              </FormControl>
            </div>
          </div>
        </div>

        <div className="card w-full shadow-md !border-none !bg-[#0080001a]">
          <h2 className="text-2xl">Retirada</h2>
          <div className="flex flex-col w-full gap-7 items-center">
            <span className="font-[300] text-sm">
              Digite o valor que deseja transferir
            </span>
            <input
              type="text"
              value="R$ 0,00"
              className="border-0 border-b-2 h-[30px] bg-white border-teal-600 text-xl text-gray-800 bg-transparent text-center px-4 py-2 w-36 focus:outline-none"
            ></input>
            <span className="text-[8px] text-gray-400">
              Até o momento para realizar saques, é cobrado uma taxa de R$ 3,67
              por saque
            </span>
            <div className="flex w-full justify-end">
              <button
                className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                SACAR
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="resumo-content mt-7">
        <h1 className="welcome-message">Histórico de saques</h1>
        <hr className="divider" />
      </div>

      <div className="container mx-auto">
        <table
          className="min-w-full border-separate rounded-xl"
          style={{ borderSpacing: "0 1.3rem" }}
        >
          <thead>
            <tr className="grid grid-cols-6">
              <th className="py-2 text-center font-[400]">Status</th>
              <th className="py-2 text-center font-[400]">Valor</th>
              <th className="py-2 text-center font-[400]">Data</th>
              <th className="py-2 text-center font-[400]">Horário</th>
              <th className="py-2 text-center font-[400]">Conta</th>
              <th className="py-2 text-center font-[400]">Operação</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="grid grid-cols-6">
                <td className="p-0 col-span-6">
                  <div className="bg-gray-100 h-[40px] rounded-lg mb-4 overflow-hidden">
                    <div className="flex h-full items-center">
                      <div className="flex-1 flex justify-center">
                        <span
                          className={`text-white text-[8px] px-2 py-1 rounded text-xs md:text-sm ${transaction.statusColor}`}
                        >
                          {transaction.status}
                        </span>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <span className="text-center text-xs md:text-base">
                          {transaction.value}
                        </span>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <span className="text-center text-xs md:text-base">
                          {transaction.date}
                        </span>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <span className="text-center text-xs md:text-base">
                          {transaction.time}
                        </span>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <span className="text-center text-xs md:text-base">
                          {transaction.account}
                        </span>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <span className="text-center text-xs md:text-base">
                          {transaction.operation}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CarteiraContent;
