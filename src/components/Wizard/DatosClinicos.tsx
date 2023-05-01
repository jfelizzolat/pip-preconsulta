import { useForm, SubmitHandler } from "react-hook-form";
import { IDatosClinicos, IPaginaDatosClinicos } from "./Datos.types";
import {
  ContentInput,
  Input,
  Label,
  Select,
  TextError,
} from "@/styles/ComponentesDeFormulario";
import { useContext, useEffect } from "react";
import { DatosContext } from "@/context/DatosFormContext";

import { FooterForm, FormDatosClinicos } from "./Wizard.styled";
import { Button } from "../Button/Button.styled";
import { DatosClinicos as IProps } from "@/interfaces/ConstructorForm";
import Checkbox from "../Checkbox/Checkbox";
import { LayoutCheckbox } from "../Checkbox/Checkbox.styled";

export const DatosClinicos = ({
  onSubmit,
  onPrevious,
  camposForm,
}: IPaginaDatosClinicos) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { datos } = useContext(DatosContext);

  const constructor = (campo: IProps) => {
    switch (campo.Tipo) {
      case "checkbox":
        return (
          <LayoutCheckbox>
            {campo.Opciones?.map((opcion) => (
              <Checkbox key={opcion.Valor} etiqueta={opcion.Valor as string} />
            ))}
          </LayoutCheckbox>
        );
        break;

      case "InputText":
        return (
          <Input
            type="text"
            {...register(campo.Nombre, { required: campo.Obligatorio })}
          />
        );
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    reset(datos);
  }, []);

  return (
    <>
      <FormDatosClinicos onSubmit={handleSubmit(onSubmit)}>
        {camposForm &&
          camposForm.map((campo) => (
            <ContentInput key={campo.Nombre}>
              <Label>{campo.Etiqueta}</Label>
              {constructor(campo)}
              {errors[campo.Nombre] && (
                <TextError>Este campo es requerido</TextError>
              )}
            </ContentInput>
          ))}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px 0",
          }}
        >
          <label htmlFor="politica1">
            <input type="checkbox" id="politica1" /> Soy consciente que los
            datos suministrados en este test son reales y han sido
            cuidadosamente diligenciados y verificados para garantizar su
            precisión y confiabilidad.
          </label>
          <label htmlFor="politica2">
            <input type="checkbox" id="politica2" /> Acepto y Autorizo el uso de
            mi información de acuerdo con la Política de Datos Personales y
            Aviso de Privacidad.
          </label>
        </div>

        <FooterForm>
          <Button variante="secundario" type="button" onClick={onPrevious}>
            Regresar
          </Button>
          <Button variante="primario" type="submit">
            Siguiente
          </Button>
        </FooterForm>
      </FormDatosClinicos>
    </>
  );
};
