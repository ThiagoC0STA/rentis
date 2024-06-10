/* eslint-disable @next/next/no-img-element */
"use client";

import { formatCurrencySecond } from "@/helpers/formaters";
import Image from "next/image";
import React, { useState } from "react";
import "./styles.scss";
import { Divider } from "@mui/material";
import { Accept, useDropzone } from "react-dropzone";
import ItemCard from "./ItemCard";

function Modal({ show, onClose, getRootProps, getInputProps, formData }: any) {
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
            <div className="upload-box" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Selecione uma foto ou arraste e solte aqui</p>
              {formData.fotos &&
                formData.fotos.map((file: any) => (
                  <Image key={file.name} src={file.preview} alt="Preview" width={80} height={80}/>
                ))}
            </div>
          </div>
          <button type="submit" className="modal-button-register-aluguel mt-2">
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
  const [formData, setFormData] = useState({ fotos: [] });

  const handleImageDrop = (acceptedFiles: any) => {
    setFormData({
      ...formData,
      fotos: acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    } as Accept,
    onDrop: handleImageDrop,
  });

  const valuesStatics = [
    {
      name: "Câmera Nikon D780 24.5 MP Full Frame DSLR NIKON 7557 Câmera Digital Coolpix P950",
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
      statusColor: "#1179b1",
    },
  ];

  return (
    <>
      <div className="resumo-content">
        <h1 className="welcome-message">Objetos que você pegou para aluguel</h1>
        <hr className="divider" />
      </div>
      <div className="w-full flex flex-wrap gap-4 anuncios-grid">
        {valuesStatics.map((item, index) => (
          <ItemCard
            key={index}
            item={item}
            onEdit={() => console.log("Edit", item)}
            onDelete={() => console.log("Delete", item)}
            onToggle={() => console.log("Toggle", item)}
            onRegisterConditions={() => setShowModal(true)}
          />
        ))}
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        formData={formData}
      />
    </>
  );
}
