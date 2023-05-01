import styled, { css } from "styled-components";
import { Be_Vietnam_Pro } from "next/font/google";
import { Variantes } from "./IndicadorPagina.types";

const tipografiaSemiFuerte = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "500",
  preload: true,
});

const tipografiaFuerte = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "700",
  preload: true,
});

const indicadorActivo = css`
  color: ${({ theme }) => theme.Wizard.Activo};
  & span {
    background: ${({ theme }) => theme.Wizard.Indicador.Activo.Fondo};
    border-color: ${({ theme }) => theme.Wizard.Indicador.Activo.Borde};
    color: ${({ theme }) => theme.Wizard.Indicador.Activo.Texto};
  }
`;
const indicadorInactivo = css`
  color: ${({ theme }) => theme.Wizard.Texto};
  & span {
    background: ${({ theme }) => theme.Wizard.Indicador.Inactivo.Fondo};
    border-color: ${({ theme }) => theme.Wizard.Indicador.Inactivo.Borde};
    color: ${({ theme }) => theme.Wizard.Indicador.Inactivo.Texto};
  }
`;
const indicadorCompleto = css`
  color: ${({ theme }) => theme.Wizard.Activo};
  & span {
    background: ${({ theme }) => theme.Wizard.Indicador.Completo.Fondo};
    border-color: ${({ theme }) => theme.Wizard.Indicador.Completo.Borde};
    color: ${({ theme }) => theme.Wizard.Indicador.Completo.Texto};
  }
`;

const estilosVariantes = (variante: Variantes) =>
  ({
    activo: indicadorActivo,
    inactivo: indicadorInactivo,
    completo: indicadorCompleto,
  }[variante]);

export const Indicadores = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px 0px;
`;
export const Indicador = styled.div<{ variante: Variantes }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  justify-content: center;
  ${tipografiaSemiFuerte.style}

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border: 2px solid;
    border-radius: 50%;
    margin-bottom: 8px;
  }

  ${({ variante }) => estilosVariantes(variante)}
`;

export const TituloFormulario = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.CampoDeTexto.Texto};
  text-align: center;
  ${tipografiaSemiFuerte.style}
`;

export const FormDatosPersonales = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const FormDatosClinicos = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
`;

export const FooterForm = styled.div`
  display: grid;
  grid-column: 1/-1;
  & button {
    grid-row: 1/-1;
    &:first-child {
      justify-self: flex-start;
    }
    &:last-child {
      justify-self: flex-end;
    }
  }
`;
