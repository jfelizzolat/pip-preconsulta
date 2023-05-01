import { IPropsIndicadores } from "./IndicadorPagina.types";
import { Indicadores, Indicador } from "./Wizard.styled";

type IProps = {
  indicadores: IPropsIndicadores[];
};
export const IndidadorPagina = ({ indicadores }: IProps) => {
  return (
    <Indicadores>
      {indicadores.map((indicador, index) => (
        <Indicador
          key={indicador.titulo}
          variante={
            indicador.variante === "activo"
              ? "activo"
              : indicador.completo
              ? "completo"
              : indicador.variante
          }
        >
          <span>{index + 1}</span>
          {indicador.titulo}
        </Indicador>
      ))}
    </Indicadores>
  );
};
