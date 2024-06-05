import { formatCurrencySecond } from "@/helpers/formaters";
import Image from "next/image";
import React, { useState } from "react";
import "./styles.scss"; // Make sure to adjust the path as necessary
import { Divider } from "@mui/material";

// Modal Component
function Modal({ show, onClose }: any) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay-aluguel">
      <div className="modal-content-aluguel">
        <div className="modal-header-aluguel">
          <div className="flex gap-1 items-center">
            <span className="material-symbols-outlined">add_a_photo</span>
            <span>Registrar Condições de entrega</span>
          </div>
          <button onClick={onClose} className="close-button-aluguel">
            <span className="material-symbols-outlined">close</span>{" "}
          </button>
        </div>

        <Divider className="mt-2 mb-4 hidden md:block" />

        <p className="text-base mb-1">
          Este é o momento que você registra as condições do objeto que entregou
          para aluguel.
        </p>
        <p className="text-base mb-7">
          Acesse a câmera do seu telefone, para registrar, ou você pode anexar
          as fotos nas opções abaixo
        </p>

        <div className="flex gap-1 items-center mb-2">
          <span className="material-symbols-outlined text-[#FF9A62]">info</span>
          <p>Capture no mínimo 3 fotos de ângulos diferentes</p>
        </div>

        <div className="flex gap-1 items-center mb-4">
          <span className="material-symbols-outlined text-[#FF9A62]">info</span>
          <p>Recomendamos que faça isso na presença do locatário</p>
        </div>

        <div className="flex items-center gap-[2px] mt-4 mb-1">
          <span className="material-symbols-outlined text-[var(--dark-green)] !text-lg mr-1">
            package
          </span>
          <p className="text-sm font-extralight">PROPRIETÁRIO</p>
          <span className="material-symbols-outlined !text-lg mr-[2px]">
            arrow_right_alt
          </span>
          <p className="text-sm font-extralight">LOCÁRIO</p>
        </div>

        <form className="modal-form-aluguel">
          <textarea
            className="modal-textarea-aluguel"
            placeholder="Descrição"
          ></textarea>
          <div className="foto-upload">
            <p>Arquivos máximo de até 15MB</p>
            <div className="upload-box mb-2">
              <p>Selecione uma foto ou arraste e solte aqui</p>
            </div>
          </div>
          <button type="submit" className="modal-button-register-aluguel">
            REGISTRAR
          </button>
        </form>
      </div>
    </div>
  );
}

// Main Component
export default function AlugueisContent() {
  const [showModal, setShowModal] = useState(false);

  const valuesStatics = [
    {
      name: "Câmera Nikon D780 24.5 MP Full Frame DSLR NIKON 7557 Câmera Digital Coolpix P950",
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
    },
    // Add other items here...
  ];

  return (
    <>
      <div className="resumo-content">
        <h1 className="welcome-message">Objetos que você pegou para aluguel</h1>
        <hr className="divider" />
      </div>
      <div className="w-full flex flex-wrap gap-4">
        {valuesStatics.map((item, index) => (
          <div className="card-rentals" key={index}>
            <span className="text-[#2E343E] text-sm font-[400]">
              {item.name}
            </span>
            <div className="flex justify-center">
              <Image
                src="/et_picture.png"
                alt="off-picture"
                width={100}
                height={100}
              ></Image>
            </div>
            <span className="text-[#091E42] font-[600] text-xl">
              Aluguel: {item.id}
            </span>
            <div className="flex flex-wrap gap-y-4">
              <div className="flex flex-col gap-1 w-1/2">
                <span className="font-[700] text-xs text-[#091E42]">
                  Início:
                </span>
                <p className="text-[#6C6C6C] font-[400] text-sm">
                  {item.createdAt}
                </p>
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <span className="font-[700] text-xs text-[#091E42]">
                  Devolução:
                </span>
                <p className="text-[#6C6C6C] font-[400] text-sm">
                  {item.returnDate}
                </p>
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <span className="font-[700] text-xs text-[#091E42]">
                  Valor diária:
                </span>
                <p className="text-[#6C6C6C] font-[400] text-sm">
                  {formatCurrencySecond(item.dailyValue)}
                </p>
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <span className="font-[700] text-xs text-[#091E42]">
                  Categoria:
                </span>
                <p className="text-[#6C6C6C] font-[400] text-sm">
                  {item.category}
                </p>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <span className="font-[700] text-xs text-[#091E42]">
                  Local do objeto:
                </span>
                <div className="flex gap-2 items-center">
                  <span className="material-symbols-outlined">location_on</span>
                  <p className="text-[#6C6C6C] font-[400] text-sm">
                    {item.neighborhood} - {item.city}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1 w-1/2">
                <span className="font-[700] text-xs text-[#091E42]">
                  Proprietário:
                </span>
                <p className="text-[#6C6C6C] font-[400] text-sm">
                  {item.ownerName}
                </p>
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <span className="font-[700] text-xs text-[#091E42]">
                  Contato:
                </span>
                <p className="text-[#6C6C6C] font-[400] text-sm">
                  {item.contact}
                </p>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <span className="font-[500] text-xs text-[#091E42]">
                  Informações sobre danos:
                </span>
                <p className="text-[#6C6C6C] font-[400] text-xs">
                  {item.damageInformation}
                </p>
              </div>

              <hr className="divider" />

              <div className="h-4 flex items-center px-5">
                <span
                  className="font-[800] text-base"
                  style={{ color: item.statusColor }}
                >
                  {item.status}
                </span>
              </div>

              <hr className="divider" />
            </div>
            <div className="flex gap-2 mt-2 items-center">
              <span className="material-symbols-outlined">add_a_photo</span>
              <span
                className="font-[300] text-base cursor-pointer hover:font-[400]"
                onClick={() => setShowModal(true)}
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

            <div className="w-full flex mt-2 justify-center">
              <button className="bg-transparent hover:bg-[#606368] transition text-[#606368] hover:text-white border-[#606368] border-[1px] font-bold px-4 rounded">
                CANCELAR ALUGUEL
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
