import styled from "styled-components";
import { Be_Vietnam_Pro } from "next/font/google";

const tipografiaSemiFuerte = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "500",
  preload: true,
});

export const ContendorOTP = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.AreaDeTrabajo.Fondo};
  border-radius: 12px;
  box-shadow: 0px 4px 16px ${({ theme }) => theme.AreaDeTrabajo.Sombra};
  margin: 100px auto;
  max-width: 350px;
  padding: 32px;
`;

export const Titulo = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.OTP.Texto};
  margin-bottom: 32px;
`;
export const Parrafo = styled.p`
  color: ${({ theme }) => theme.OTP.Texto};
  font-size: 16px;
  margin: 0;
`;
export const ContentInputOTP = styled.div`
  box-sizing: content-box;
  margin: 32px 0;
`;
export const InputOTP = styled.input`
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.CampoDeTexto.Borde};
  color: ${({ theme }) => theme.CampoDeTexto.Texto};
  background-color: ${({ theme }) => theme.CampoDeTexto.Fondo};
  font-size: 16px;
  height: 60px;
  padding: 0px 12px;
  outline: 0;
  box-sizing: border-box;
  text-align: center;
  font-size: 32px;
  letter-spacing: 20px;
  width: 100%;
  ${tipografiaSemiFuerte.style}
`;
