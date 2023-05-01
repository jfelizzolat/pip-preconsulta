import { createContext } from "react";
import {
  IDatosPersonales,
  IDatosClinicos,
} from "@/components/Wizard/Datos.types";

type GlobalContent = {
  datos: IDatosPersonales & IDatosClinicos;
  setDatos: (e: IDatosPersonales & IDatosClinicos) => void;
};
export const DatosContext = createContext<GlobalContent>({
  datos: {},
  setDatos: () => {},
});
