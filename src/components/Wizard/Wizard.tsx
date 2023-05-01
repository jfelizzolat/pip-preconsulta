import { useContext, useState } from "react";
import type { NextPage } from "next";
import { IWizard, IDatosPersonales, IDatosClinicos } from "./Datos.types";
import { DatosPersonales } from "./DatosPersonales";
import { DatosClinicos } from "./DatosClinicos";
import { DatosContext } from "@/context/DatosFormContext";
import { IndidadorPagina } from "./IndidadorPagina";
import { FooterForm, TituloFormulario } from "./Wizard.styled";
import { IPropsIndicadores } from "./IndicadorPagina.types";
import { Button } from "../Button/Button.styled";

export const Wizard: NextPage<IWizard> = ({ onSubmit, camposForm }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { datos, setDatos } = useContext(DatosContext);
  const [indicadores, setIndicadores] = useState<IPropsIndicadores[]>([
    { titulo: "Datos personales", variante: "activo", completo: false },
    { titulo: "Datos clínicos", variante: "inactivo", completo: false },
  ]);

  const handleNextPage = (newData: IDatosPersonales | IDatosClinicos) => {
    setDatos({ ...datos, ...newData });
    const estado = indicadores.map((indicador, index) => {
      if (index === currentPage) {
        indicador.completo = true;
        return indicador;
      }
      if (index === currentPage + 1) {
        indicador.variante = "activo";
        return indicador;
      }
      return indicador;
    });
    setCurrentPage((prevPage) => prevPage + 1);
    setIndicadores(estado);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleFinalSubmit = () => {
    onSubmit(datos);
  };

  return (
    <>
      <TituloFormulario>
        PIP - Programa Inteligente de Preconsulta
      </TituloFormulario>
      {currentPage !== 2 ? (
        <>
          <IndidadorPagina indicadores={indicadores} />
          {currentPage === 0 && (
            <DatosPersonales
              onSubmit={handleNextPage}
              camposForm={camposForm?.datos?.DatosPersonales}
            />
          )}
          {currentPage === 1 && (
            <DatosClinicos
              onSubmit={handleNextPage}
              onPrevious={handlePreviousPage}
              camposForm={camposForm?.datos?.DatosClinicos}
            />
          )}
        </>
      ) : (
        <>
          <h2 style={{ textAlign: "center" }}>...</h2>
          <Button variante="secundario" onClick={() => setCurrentPage(0)}>
            Volver
          </Button>
        </>
      )}
    </>
  );
};
