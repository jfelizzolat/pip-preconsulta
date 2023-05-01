import {
  ConstructorForm,
  DatosClinicos,
  DatosPersonales,
} from "@/interfaces/ConstructorForm";

export interface IDatosPersonales {
  TipoIdentificacion?: string;
  NumeroIdentificacion?: string;
  Eps?: string;
  Afp?: string;
  Arl?: string;
  EstadoCivil?: string;
  PrimerApellido?: string;
  SegundoApellido?: string;
  PrimerNombre?: string;
  OtrosNombres?: string;
  Genero?: string;
  NivelEducativo?: string;
  CorreoElectronico?: string;
  Zona?: string;
  Direccion?: string;
  Barrio?: string;
  Municipio?: string;
}

export interface IDatosPersonalesOcupacional {
  RH?: string;
  NumeroHijos?: string;
  IngresosPromedio?: string;
  JornadaLaboral?: string;
  AreaCargo?: string;
}

export interface IDatosClinicos {
  MotivoConsulta?: string;
  AntecedentesFamiliares?: string;
}

export interface IPaginaDatosPersonales {
  onSubmit: (data: IDatosPersonales) => void;
  camposForm: DatosPersonales[] | undefined;
}
export interface IPaginaDatosClinicos {
  onSubmit: (data: IDatosClinicos) => void;
  onPrevious: () => void;
  camposForm: DatosClinicos[] | undefined;
}
export interface IWizard {
  onSubmit: (data: IDatosPersonales & IDatosClinicos) => void;
  camposForm: ConstructorForm | undefined;
}
