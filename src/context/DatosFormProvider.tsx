import { ReactNode, useState } from "react";
import type { NextPage } from "next";
import { DatosContext } from "./DatosFormContext";
import {
  IDatosClinicos,
  IDatosPersonales,
} from "@/components/Wizard/Datos.types";

interface IProps {
  children: ReactNode;
}

export const DatosFormProvider: NextPage<IProps> = ({ children }) => {
  const [datos, setDatos] = useState<IDatosPersonales & IDatosClinicos>({});
  return (
    <DatosContext.Provider value={{ datos, setDatos }}>
      {children}
    </DatosContext.Provider>
  );
};
