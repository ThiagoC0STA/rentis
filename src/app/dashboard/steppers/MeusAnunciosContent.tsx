import React, { useState } from "react";
import "./styles.scss";
import TextFieldCustom from "@/components/TextFieldCustom/TextFieldCustom";
import DatePickerValue from "@/components/InputData/InputData";
import SelectBox from "@/components/SelectBox/SelectBox";

const MeusAnunciosContent = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    categoria: "",
    subcategoria: "",
    observacoes: "",
    valorDiaria: "",
    valorProduto: "",
    garantia: "",
    dataInicio: "",
    dataFim: "",
    objetoDisponivel: false,
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    cep: "",
    complemento: "",
    pontoReferencia: "",
    fotos: null,
    termosAceitos: false,
  });

  const [garantiaTipo, setGarantiaTipo] = useState("valor");
  const [isAdding, setIsAdding] = useState(false);

  const handleChange = (key: any, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  const anuncios = [
    { id: 1, title: "Anúncio 1", description: "Descrição do anúncio 1" },
    { id: 2, title: "Anúncio 2", description: "Descrição do anúncio 2" },
    { id: 3, title: "Anúncio 3", description: "Descrição do anúncio 3" },
  ];

  const handleAddNew = () => {
    setIsAdding(true);
  };

  const handleCancel = () => {
    setIsAdding(false);
  };

  if (!isAdding) {
    return (
      <div className="listagem-anuncios md:px-">
        <div className="anuncios-list">
          <div
            className="card new-anuncio-card"
            onClick={handleAddNew}
            style={{ backgroundColor: "rgba(0, 128, 0, 0.1)" }}
          >
            <span className="material-symbols-outlined">add_box</span>
            <h3>Adicionar Novo Anúncio</h3>
          </div>
          {anuncios.map((anuncio) => (
            <div key={anuncio.id} className="card anuncio-card">
              <h3>{anuncio.title}</h3>
              <p>{anuncio.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="meus-anuncios-content md:px-10">
      <form className="new-anuncio-form">
        <section className="section pt-2">
          <div className="section-title">
            <span className="material-symbols-outlined">description</span>
            <h2>Novo Anúncio</h2>
          </div>

          <div className="mb-5 mt-2">
            <TextFieldCustom
              label="Título do anúncio"
              value={formData.titulo}
              onChange={(val: any) => handleChange("titulo", val)}
              isRequired
            />
          </div>

          <div className="mb-5">
            <TextFieldCustom
              label="Descrição do objeto"
              multiline
              maxLength={250}
              value={formData.descricao}
              onChange={(val: any) => handleChange("descricao", val)}
              isRequired
            />
          </div>

          <div className="category-selects">
            <div className="w-full">
              <SelectBox
                label="Categoria"
                wFull
                value={formData.categoria}
                onSelect={(val: any) => handleChange("categoria", val)}
                options={[
                  { key: "categoria1", label: "Categoria 1" },
                  { key: "categoria2", label: "Categoria 2" },
                ]}
                isRequired
              />
            </div>

            <div className="w-full">
              <SelectBox
                wFull
                label="Subcategoria"
                value={formData.subcategoria}
                onSelect={(val: any) => handleChange("subcategoria", val)}
                options={[
                  { key: "subcategoria1", label: "Subcategoria 1" },
                  { key: "subcategoria2", label: "Subcategoria 2" },
                ]}
                isRequired
              />
            </div>
          </div>

          <div className="mb-10 mt-5">
            <TextFieldCustom
              label="Observações sobre danos, defeitos ou avarias"
              multiline
              value={formData.observacoes}
              onChange={(val: any) => handleChange("observacoes", val)}
              isRequired
            />
          </div>
        </section>

        <section className="section">
          <div className="section-title">
            <span className="material-symbols-outlined">attach_money</span>
            <h2>Aluguel</h2>
          </div>
          <div className="aluguel-inputs">
            <TextFieldCustom
              label="R$ Valor da diária"
              value={formData.valorDiaria}
              onChange={(val: any) => handleChange("valorDiaria", val)}
              isRequired
            />
            <TextFieldCustom
              label="Valor do produto"
              value={formData.valorProduto}
              onChange={(val: any) => handleChange("valorProduto", val)}
              isRequired
            />
          </div>
        </section>

        <section className="section">
          <div className="section-title mt-10">
            <span className="material-symbols-outlined">security</span>
            <h2>Garantia</h2>
          </div>
          <div className="garantia-options flex items-center mb-4">
            <label className="mr-4">
              <input
                type="radio"
                name="garantia"
                className="mr-2"
                value="valor"
                checked={garantiaTipo === "valor"}
                onChange={(e) => {
                  setFormData((val: any) => ({
                    ...val,
                    garantia: "",
                  }));
                  setGarantiaTipo(e.target.value);
                }}
              />
              R$
            </label>
            <label>
              <input
                type="radio"
                name="garantia"
                className="mr-2 ml-4"
                value="porcentagem"
                checked={garantiaTipo === "porcentagem"}
                onChange={(e) => {
                  setFormData((val: any) => ({
                    ...val,
                    garantia: "",
                  }));
                  setGarantiaTipo(e.target.value);
                }}
              />
              % do valor do produto
            </label>
          </div>
          <TextFieldCustom
            label={
              garantiaTipo === "valor"
                ? "Valor da garantia"
                : "Porcentagem da garantia"
            }
            value={formData.garantia}
            onChange={(val: any) => handleChange("garantia", val)}
            isRequired
            maskType={garantiaTipo === "valor" ? "money" : "percentage"}
          />
        </section>

        <section className="section">
          <div className="section-title mt-10">
            <span className="material-symbols-outlined">event_available</span>
            <h2>Disponibilidade do objeto</h2>
          </div>
          <div className="disponibilidade-inputs">
            <div className="w-full">
              <DatePickerValue
                setDate={(val: any) => handleChange("dataInicio", val)}
                text="Data início"
                value={formData.dataInicio}
                isRequired
              />
            </div>

            <div className="w-full">
              <DatePickerValue
                setDate={(val: any) => handleChange("dataFim", val)}
                text="Data fim"
                value={formData.dataFim}
                isRequired
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="checkbox-inline">
              <input
                type="checkbox"
                className="mr-2"
                checked={formData.objetoDisponivel}
                onChange={(e) =>
                  handleChange("objetoDisponivel", e.target.checked)
                }
              />
              Objeto sempre disponível
            </label>
          </div>
        </section>

        <section className="section">
          <div className="section-title mt-10">
            <span className="material-symbols-outlined">home</span>
            <h2>Endereço onde objeto está</h2>
          </div>
          <div className="endereco-inputs">
            <TextFieldCustom
              label="Rua"
              value={formData.rua}
              onChange={(val: any) => handleChange("rua", val)}
              isRequired
            />
            <TextFieldCustom
              label="Número"
              value={formData.numero}
              onChange={(val: any) => handleChange("numero", val)}
              isRequired
            />
            <TextFieldCustom
              label="Bairro"
              value={formData.bairro}
              onChange={(val: any) => handleChange("bairro", val)}
              isRequired
            />
            <TextFieldCustom
              label="Cidade"
              value={formData.cidade}
              onChange={(val: any) => handleChange("cidade", val)}
              isRequired
            />
            <TextFieldCustom
              label="CEP"
              value={formData.cep}
              onChange={(val: any) => handleChange("cep", val)}
              isRequired
            />
            <TextFieldCustom
              label="Complemento"
              value={formData.complemento}
              onChange={(val: any) => handleChange("complemento", val)}
            />
            <TextFieldCustom
              label="Ponto de referência"
              value={formData.pontoReferencia}
              onChange={(val: any) => handleChange("pontoReferencia", val)}
            />
          </div>
        </section>

        <section className="section">
          <div className="section-title mt-10">
            <span className="material-symbols-outlined">photo_camera</span>
            <h2>Fotos</h2>
          </div>
          <p>Fotos com boa qualidade e nítidas ajudam a alugar mais rápido</p>
          <div className="foto-upload">
            <p>Arquivos máximo de até 15MB</p>
            <div className="upload-box">
              <p>Selecione uma foto ou arraste e solte aqui</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="termos">
            <input
              type="checkbox"
              checked={formData.termosAceitos}
              onChange={(e) => handleChange("termosAceitos", e.target.checked)}
            />
            <label>
              Aceito todas as <a href="#">Políticas de Anúncios</a>
            </label>
          </div>
          <div className="actions">
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button type="submit" className="submit-button">
              ANUNCIAR
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default MeusAnunciosContent;
