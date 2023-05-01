import type { NextPage } from "next";
import { Props } from "./Contenedor.types";
import { ContenedorStyled } from "./Contenedor.styled";

export const Contenedor: NextPage<Props> = ({ children }) => {
  return <ContenedorStyled>{children}</ContenedorStyled>;
};
