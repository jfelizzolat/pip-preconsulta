import React from "react";
import {
  ContendorOTP,
  Titulo,
  InputOTP,
  Parrafo,
  ContentInputOTP,
} from "./AutenticacionOTP.styled";
import { Button } from "../Button/Button.styled";
import { TextError } from "@/styles/ComponentesDeFormulario";

type IProps = {
  onClick: () => void;
  onChange: (e: string) => void;
  error: boolean;
};

export const AutenticacionOTP = ({ onClick, onChange, error }: IProps) => {
  return (
    <ContendorOTP>
      <Titulo>Ingresar código de autenticación</Titulo>
      <Parrafo>
        Por favor ingresa el código de verificación que hemos enviado vía SMS al
        número de teléfono terminado en 1234.
      </Parrafo>
      <ContentInputOTP>
        <InputOTP type="text" onChange={(e) => onChange(e.target.value)} />
        {error && (
          <TextError>
            El código ingresado no es correcto. Por favor verifica el código o
            solicita uno nuevo.
          </TextError>
        )}
      </ContentInputOTP>
      <Button variante="primario" onClick={onClick}>
        Validar
      </Button>
      <Parrafo style={{ textAlign: "center", padding: "12px 0" }}>
        ¿No te llegó el código?
      </Parrafo>
      <Button variante="secundario" onClick={onClick}>
        Solicitar código
      </Button>
    </ContendorOTP>
  );
};
