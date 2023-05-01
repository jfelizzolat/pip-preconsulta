import styled, { css } from "styled-components";
import { Variantes } from "./Button.types";
import { Be_Vietnam_Pro } from "next/font/google";

const tipografiaRegular = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "300",
  preload: true,
});

const botonPrimario = css`
  background: ${({ theme }) => theme.BotonPrimario.Fondo};
  color: ${({ theme }) => theme.BotonPrimario.Texto};
  border-color: ${({ theme }) => theme.BotonPrimario.Borde};
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.BotonPrimario.Hover.Fondo};
    border-color: ${({ theme }) => theme.BotonPrimario.Hover.Borde};
  }
`;

const botonPrimarioOutline = css`
  background: ${({ theme }) => theme.BotonPrimarioOutline.Fondo};
  color: ${({ theme }) => theme.BotonPrimarioOutline.Texto};
  border-color: ${({ theme }) => theme.BotonPrimarioOutline.Borde};
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.BotonPrimarioOutline.Hover.Fondo};
    border-color: ${({ theme }) => theme.BotonPrimarioOutline.Hover.Borde};
  }
`;

const estilosVariantes = (variante: Variantes) =>
  ({
    primario: botonPrimario,
    secundario: botonPrimarioOutline,
    neutro: botonPrimario,
    correcto: botonPrimario,
    advertencia: botonPrimario,
    peligro: botonPrimario,
  }[variante]);

export const Button = styled.button<{ variante: Variantes }>`
  height: 40px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 8px;
  padding: 0px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: ease-in 0.1s;
  ${tipografiaRegular.style}

  ${({ variante }) => estilosVariantes(variante)}
`;
