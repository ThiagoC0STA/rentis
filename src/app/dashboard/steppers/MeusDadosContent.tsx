import DatePickerValue from "@/components/InputData/InputData";
import SelectBox from "@/components/SelectBox/SelectBox";
import TextFieldCustom from "@/components/TextFieldCustom/TextFieldCustom";
import { banks, sexType, typeBank } from "@/helpers/constants";
import { FormControl } from "@mui/material";
import React, { useState } from "react";

export default function MeusDadosContent() {
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

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordSecond, setShowPasswordSecond] = useState<boolean>(false);

  const [formDataMyAccount, setFormDataMyAccount] = useState({
    ultimosDigitos: "",
    bandeira: "",
  });

  const handleChange = (key: any, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleChangeMyAccount = (key: any, value: any) => {
    setFormDataMyAccount({ ...formDataMyAccount, [key]: value });
  };

  return (
    <>
      <div className="resumo-content">
        <h1 className="welcome-message">Meu perfil</h1>
        <hr className="divider" />
      </div>
      <div className="w-full h-full flex flex-col gap-10">
        <div className="card">
          <div className="flex flex-nowrap gap-2 items-center px-4">
            <span className="material-symbols-outlined">person</span>
            <h2 className="card-subtitle">Conta</h2>
          </div>

          <div className="flex flex-wrap gap-y-7 px-4 py-8">
            <FormControl className="w-full">
              <TextFieldCustom
                label="Nome Completo"
                value={formData.nomeCompleto}
                onChange={(val: any) => handleChange("nomeCompleto", val)}
                isRequired
              />
            </FormControl>
            <FormControl className="w-full">
              <TextFieldCustom
                label="Informe seu CPF"
                value={formData.cpf}
                onChange={(val: any) => handleChange("cpf", val)}
                isRequired
                maskType="cpf"
                max={14}
              />
            </FormControl>

            <div className="w-full flex flex-wrap md:flex-nowrap gap-7">
              <FormControl className="w-full md:w-1/2 -mt-2">
                <DatePickerValue
                  setDate={(val: any) => handleChange("dataNascimento", val)}
                  text="Data de Nascimento"
                  value={formData.dataNascimento}
                  isRequired
                  showError={false}
                />
              </FormControl>

              <FormControl className="w-full md:w-1/2">
                <SelectBox
                  label="Sexo"
                  options={sexType}
                  value={formData.sexo}
                  onSelect={(val: any) => handleChange("sexo", val)}
                  isRequired
                />
              </FormControl>
            </div>

            <div className="w-full flex flex-wrap md:flex-nowrap gap-7">
              <FormControl className="w-full md:w-1/2">
                <TextFieldCustom
                  label="WhatsApp"
                  value={formData.whatsapp}
                  onChange={(val: any) => handleChange("whatsapp", val)}
                  isRequired
                  maskType="phone"
                  max={15}
                />
              </FormControl>

              <FormControl className="w-full md:w-1/2">
                <TextFieldCustom
                  label="RG"
                  value={formData.rg}
                  onChange={(val: any) => handleChange("rg", val)}
                  isRequired
                />
              </FormControl>
            </div>

            <div className="w-full flex flex-wrap md:flex-nowrap gap-7">
              <FormControl className="w-full md:w-1/2">
                <TextFieldCustom
                  label="Profissão"
                  value={formData.profissao}
                  onChange={(val: any) => handleChange("profissao", val)}
                  isRequired
                />
              </FormControl>

              <FormControl className="w-full md:w-1/2">
                <TextFieldCustom
                  label="Renda Mensal"
                  value={formData.rendaMensal}
                  onChange={(val: any) => handleChange("rendaMensal", val)}
                  isRequired
                  maskType="money"
                />
              </FormControl>
            </div>

            <FormControl className="w-full">
              <TextFieldCustom
                label="Nome da Mãe"
                value={formData.nomeMae}
                onChange={(val: any) => handleChange("nomeMae", val)}
                isRequired
              />
            </FormControl>
          </div>

          <div className="flex flex-nowrap gap-2 items-center px-4">
            <span className="material-symbols-outlined">lock</span>
            <h2 className="card-subtitle">Senha</h2>
          </div>

          <div className="flex flex-wrap gap-y-7 px-4 py-8">
            <div className="w-full flex flex-wrap md:flex-nowrap gap-7">
              <FormControl className="w-full md:w-1/2">
                <TextFieldCustom
                  label="Senha"
                  value={formData.senha}
                  onChange={(val: any) => handleChange("senha", val)}
                  isRequired
                  isPassword
                  iconEvent={() => setShowPassword(!showPassword)}
                  type={showPassword ? "text" : "password"}
                  icon={showPassword ? "visibility_off" : "visibility"}
                />
              </FormControl>

              <FormControl className="w-full md:w-1/2">
                <TextFieldCustom
                  label="Confirme a Senha"
                  value={formData.confirmaSenha}
                  onChange={(val: any) => handleChange("confirmaSenha", val)}
                  isRequired
                  isPassword
                  iconEvent={() => setShowPasswordSecond(!showPasswordSecond)}
                  type={showPasswordSecond ? "text" : "password"}
                  icon={showPasswordSecond ? "visibility_off" : "visibility"}
                />
              </FormControl>
            </div>
          </div>

          <div className="flex flex-nowrap gap-2 items-center px-4">
            <span className="material-symbols-outlined">account_balance</span>
            <h2 className="card-subtitle">Dados Bancários</h2>
          </div>

          <div className="flex flex-wrap gap-y-7 px-4 py-8">
            <div className="w-full flex flex-wrap md:flex-nowrap gap-7">
              <FormControl className="w-full md:w-1/3">
                <TextFieldCustom
                  label="Conta"
                  value={formData.conta}
                  onChange={(val: any) => handleChange("conta", val)}
                  isRequired
                />
              </FormControl>

              <FormControl className="w-full md:w-1/6">
                <TextFieldCustom
                  label="Digito"
                  value={formData.digitoConta}
                  onChange={(val: any) => handleChange("digitoConta", val)}
                  isRequired
                  max={4}
                />
              </FormControl>

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
              <FormControl className="w-full md:w-1/3">
                <TextFieldCustom
                  label="Agência"
                  value={formData.agencia}
                  onChange={(val: any) => handleChange("agencia", val)}
                  isRequired
                />
              </FormControl>

              <FormControl className="w-full md:w-1/6">
                <TextFieldCustom
                  label="Código"
                  value={formData.digitoAgencia}
                  onChange={(val: any) => handleChange("digitoAgencia", val)}
                  isRequired
                  max={4}
                />
              </FormControl>

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

          <div className="w-full flex justify-between items-center px-4 mt-12">
            <a
              href=""
              className="font-nunito text-base font-semibold leading-tight tracking-wide text-center text-[#0D8CF3]"
            >
              Ativar perfil de proprietário
            </a>
            <button
              className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SALVAR
            </button>
          </div>
        </div>

        <div className="card">
          <div className="flex flex-nowrap gap-2 items-center px-4">
            <span className="material-symbols-outlined">account_balance</span>
            <h2 className="card-subtitle">Meu Cartão</h2>
          </div>

          <div className="flex justify-between w-full px-4 py-8 md:flex-row flex-col gap-y-7">
            <div className="w-full md:w-1/2 flex gap-7 flex-nowrap">
              <FormControl className="flex-1">
                <TextFieldCustom
                  label="Últimos Dígitos"
                  value={formDataMyAccount.ultimosDigitos}
                  onChange={(val: any) =>
                    handleChangeMyAccount("ultimosDigitos", val)
                  }
                  isRequired
                />
              </FormControl>
              <FormControl className="max-w-28">
                <TextFieldCustom
                  label="Bandeira"
                  value={formDataMyAccount.bandeira}
                  onChange={(val: any) =>
                    handleChangeMyAccount("bandeira", val)
                  }
                  isRequired
                />
              </FormControl>
            </div>
            <button
              className="h-[40px] bg-transparent hover:bg-[var(--danger)] transition text-[var(--danger)] hover:text-white border-[var(--danger)] border-[1px] font-bold py-2 px-4 rounded"
              type="submit"
            >
              EXCLUIR
            </button>
          </div>
        </div>

        <span className="font-[400]">Zona de perigo, prossiga com cuidado</span>

        <div className="card">
          <div className="flex flex-nowrap gap-2 items-center px-4">
            <span className="material-symbols-outlined !text-[--danger]">
              warning
            </span>
            <h2 className="card-subtitle">Excluir Conta</h2>
          </div>

          <div className="px-9 py-8">
            <p className="text-base font-light leading-tight text-left">
              Seu perfil será excluído permanentemente, assim como histórico de
              transações e anúncios.
            </p>
            <p className="text-base font-light leading-tight text-left">
              Caso queira utilizara a plataforma novamente, você terá que
              realizar um novo cadastro
            </p>
          </div>

          <div className="flex justify-end w-full">
            <button
              className="h-[40px] bg-transparent hover:bg-[var(--danger)] transition text-[var(--danger)] hover:text-white border-[var(--danger)] border-[1px] font-bold py-2 px-4 rounded"
              type="submit"
            >
              EXCLUIR CONTA
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
