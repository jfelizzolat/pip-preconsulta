import { useForm, SubmitHandler } from "react-hook-form";
import { IDatosPersonales, IPaginaDatosPersonales } from "./Datos.types";
import {
  ContentInput,
  Input,
  Label,
  Select,
  TextError,
} from "@/styles/ComponentesDeFormulario";
import { useContext, useEffect } from "react";
import { DatosContext } from "@/context/DatosFormContext";
import { FooterForm, FormDatosPersonales } from "./Wizard.styled";
import { Button } from "../Button/Button.styled";
import { DatosPersonales as IProps } from "@/interfaces/ConstructorForm";

export const DatosPersonales = ({
  onSubmit,
  camposForm,
}: IPaginaDatosPersonales) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { datos } = useContext(DatosContext);

  const constructor = (campo: IProps) => {
    switch (campo.Tipo) {
      case "Select":
        return (
          <Select {...register(campo.Nombre, { required: campo.Obligatorio })}>
            {campo.Opciones?.map((opcion) => (
              <option key={opcion.Id} value={opcion.Valor}>
                {opcion.Valor}
              </option>
            ))}
          </Select>
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

      case "Email":
        return (
          <Input
            type="email"
            {...register(campo.Nombre, {
              required: campo.Obligatorio,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Correo electrónico inválido",
              },
            })}
          />
        );
        break;

      case "Date":
        return (
          <Input
            type="date"
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
      <FormDatosPersonales onSubmit={handleSubmit(onSubmit)}>
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

        <FooterForm>
          <Button variante="primario" type="submit">
            Siguiente
          </Button>
        </FooterForm>
      </FormDatosPersonales>
    </>
  );
};
