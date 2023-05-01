type Boton = {
  Borde: string;
  Fondo: string;
  Texto: string;
  Hover: {
    Borde: string;
    Fondo: string;
    Texto: string;
  };
};

type PropsIndicador = {
  Borde: string;
  Fondo: string;
  Texto: string;
};

export interface ITemaClaro {
  Documento: {
    Fondo: string;
  };
  AreaDeTrabajo: {
    Fondo: string;
    Borde: string;
    Sombra: string;
  };
  CampoDeTexto: {
    Borde: string;
    Texto: string;
    TextoDeError: string;
    Fondo: string;
  };
  Combo: {
    Borde: string;
    Texto: string;
    TextoDeError: string;
    Fondo: string;
  };
  BotonPrimario: Boton;
  BotonPrimarioOutline: Boton;
  Wizard: {
    Texto: string;
    Activo: string;
    Indicador: {
      Inactivo: PropsIndicador;
      Activo: PropsIndicador;
      Completo: PropsIndicador;
    };
  };
  OTP: {
    Texto: string;
  };
  Checkbox: {
    Activo: {
      Fondo: string;
      Texto: string;
      Icon: string;
    };
    Inactivo: {
      Fondo: string;
      Texto: string;
      Icon: string;
    };
  };
}
