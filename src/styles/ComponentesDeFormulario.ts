import styled, { css } from "styled-components";
import { Be_Vietnam_Pro } from "next/font/google";

const tipografiaSemiFuerte = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "500",
  preload: true,
});
const tipografiaRegular = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "300",
  preload: true,
});

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 16px; */
`;

const inputStyle = css`
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.CampoDeTexto.Borde};
  color: ${({ theme }) => theme.CampoDeTexto.Texto};
  background-color: ${({ theme }) => theme.CampoDeTexto.Fondo};
  font-size: 16px;
  height: 40px;
  padding: 0px 12px;
  outline: 0;
  box-sizing: border-box;
  ${tipografiaRegular.style}
`;

export const Input = styled.input`
  ${inputStyle}
`;

export const Select = styled.select`
  ${inputStyle}
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.CampoDeTexto.Texto};
  font-size: 16px;
  margin-bottom: 4px;
  ${tipografiaSemiFuerte.style}
`;

export const TextError = styled.span`
  color: ${({ theme }) => theme.CampoDeTexto.TextoDeError};
  font-size: 14px;
  margin-top: 4px;
  ${tipografiaRegular.style}
`;
