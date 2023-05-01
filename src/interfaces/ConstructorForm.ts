export interface ConstructorForm {
  datos: Datos;
}

export interface Datos {
  DatosPersonales: DatosPersonales[];
  DatosClinicos: DatosClinicos[];
}

export interface DatosPersonales {
  Nombre: string;
  Etiqueta: string;
  Obligatorio: boolean;
  Tipo: string;
  Opciones?: Opcione[];
}

export interface Opcione {
  Id: string;
  Valor: string;
  Adicional?: Adicional[];
}

export interface Adicional {
  Nombre: string;
  Etiqueta: string;
  Obligatorio: boolean;
  Tipo: string;
  Opciones?: Opcione2[];
}

export interface Opcione2 {
  Id: string;
  Valor: string;
}

export interface DatosClinicos {
  Nombre: string;
  Etiqueta: string;
  Obligatorio: boolean;
  Tipo: string;
  Opciones?: Opcione3[];
}

export interface Opcione3 {
  Id: string;
  Valor?: string;
}
