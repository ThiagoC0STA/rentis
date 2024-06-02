import { formatCurrencySecond } from "@/helpers/formaters";
import Image from "next/image";
import React from "react";

export default function AlugueisContent() {
  const valuesStatics = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ];

  return (
    <>
      <div className="resumo-content">
        <h1 className="welcome-message">Objetos que você pegou para aluguel</h1>
        <hr className="divider" />
      </div>
      <div className="w-full flex flex-wrap gap-4">
        {valuesStatics.map((item) => (
          <div className="card-rentals">
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
            <div className="flex gap-2 items-center">
              <span className="material-symbols-outlined">add_a_photo</span>
              <span className="font-[300] text-base cursor-pointer hover:font-[400]">Registrar Condições</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="material-symbols-outlined">report</span>
              <span className="font-[300] text-base cursor-pointer hover:font-[400]">Reportar mau funcionamento</span>
            </div>

            <div className="w-full flex justify-center">
              <button className="bg-transparent hover:bg-[#606368] transition text-[#606368] hover:text-white border-[#606368] border-[1px] font-bold px-4 rounded">
                CANCELAR ALUGUEL
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
