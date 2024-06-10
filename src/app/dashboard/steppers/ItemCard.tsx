import React from "react";
import Image from "next/image";
import { formatCurrencySecond } from "@/helpers/formaters";
import { Divider } from "@mui/material";

const ItemCard = ({
  item,
  onEdit,
  onDelete,
  onToggle,
  onRegisterConditions,
}: any) => {
  return (
    <div className="card-rentals">
      <div className="card-content">
        <h3>{item.id ? `Aluguel: ${item.id}` : item.titulo}</h3>
        <div className="anuncio-imagem">
          <Image
            src={item.imagem || "/et_picture.png"}
            alt="Imagem do anúncio"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="data">
          <span className="material-symbols-outlined">calendar_today</span>{" "}
          {item.data || item.createdAt}
        </p>
        <p className="disponibilidade">Disponível para aluguel:</p>
        <p className="periodo">
          {item.disponivelInicio} - {item.disponivelFim || item.returnDate}
        </p>
        <p className="valor-categoria">
          <span>Valor diária:</span>{" "}
          {item.valorDiaria || formatCurrencySecond(item.dailyValue)}
        </p>
        <p className="valor-categoria">
          <span>Categoria:</span> {item.categoria || item.category}
        </p>
        <p className="local">
          <span className="material-symbols-outlined">location_on</span>{" "}
          {item.local || `${item.neighborhood} - ${item.city}`}
        </p>
        <p className="informacoes">
          <span>Informações sobre danos:</span>{" "}
          {item.informacoes || item.damageInformation}
        </p>
        {item.status && (
          <div className="">
            <Divider className="mt-6 mb-4" />
            <div className="h-4 flex items-center">
              <span
                className="font-[800] text-base"
                style={{ color: item.statusColor }}
              >
                {item.status}
              </span>
            </div>
            <Divider className="mt-4 mb-4" />
          </div>
        )}
      </div>
      <div className="card-actions">
        {item.status ? (
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2 items-center">
              <span className="material-symbols-outlined">add_a_photo</span>
              <span
                className="font-[300] text-base cursor-pointer hover:font-[400]"
                onClick={onRegisterConditions}
              >
                Registrar Condições
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="material-symbols-outlined">report</span>
              <span className="font-[300] text-base cursor-pointer hover:font-[400]">
                Reportar mau funcionamento
              </span>
            </div>
            <div className="w-full flex mt-4 justify-center items-center">
              <button className="bg-transparent hover:bg-[#606368] transition text-[#606368] hover:text-white border-[#606368] border-[1px] font-bold px-4 rounded w-full">
                CANCELAR ALUGUEL
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex gap-2 items-center">
              <button className="edit-button" onClick={onEdit}>
                Editar
              </button>
              <button className="delete-button" onClick={onDelete}>
                Excluir
              </button>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={item.publicado}
                onChange={onToggle}
              />
              <span
                className={`slider ${item.publicado ? "green" : "red"}`}
              ></span>
            </label>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
