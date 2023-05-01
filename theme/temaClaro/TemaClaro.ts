import { ITemaClaro } from "./TemaClaro.types";
import { PaletaDeColores } from "../colores";

const { Neutro, Peligro, Acento, Primario } = PaletaDeColores.Colores;

const TemaClaro: ITemaClaro = {
  Documento: {
    Fondo: Neutro.ExtraClaro,
  },
  AreaDeTrabajo: {
    Fondo: Acento,
    Borde: Neutro.Claro,
    Sombra: Neutro.Claro,
  },
  CampoDeTexto: {
    Borde: Neutro.Claro,
    Texto: Neutro.SemiOscuro,
    TextoDeError: Peligro.Real,
    Fondo: Acento,
  },
  Combo: {
    Borde: Neutro.Claro,
    Texto: Neutro.SemiOscuro,
    TextoDeError: Peligro.Real,
    Fondo: Acento,
  },
  BotonPrimario: {
    Borde: Primario.Real,
    Fondo: Primario.Real,
    Texto: Primario.ExtraClaro,
    Hover: {
      Borde: Primario.SemiClaro,
      Fondo: Primario.SemiClaro,
      Texto: Primario.Real,
    },
  },
  BotonPrimarioOutline: {
    Borde: Primario.Real,
    Fondo: Acento,
    Texto: Primario.Real,
    Hover: {
      Borde: Primario.Real,
      Fondo: Acento,
      Texto: Primario.Real,
    },
  },
  Wizard: {
    Texto: Neutro.SemiClaro,
    Activo: Primario.Real,
    Indicador: {
      Inactivo: {
        Borde: Neutro.SemiClaro,
        Fondo: Acento,
        Texto: Neutro.SemiClaro,
      },
      Activo: {
        Borde: Primario.Real,
        Fondo: Acento,
        Texto: Primario.Real,
      },
      Completo: {
        Borde: Primario.Real,
        Fondo: Primario.Real,
        Texto: Primario.ExtraClaro,
      },
    },
  },
  OTP: {
    Texto: Neutro.SemiOscuro,
  },
  Checkbox: {
    Activo: {
      Fondo: Primario.ExtraClaro,
      Texto: Primario.Real,
      Icon: Primario.Real,
    },
    Inactivo: {
      Fondo: Neutro.ExtraClaro,
      Texto: Neutro.SemiOscuro,
      Icon: Acento,
    },
  },
};

export default TemaClaro;
