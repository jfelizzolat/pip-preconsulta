import styled from "styled-components";

export const ContenedorStyled = styled.div`
  background-color: ${({ theme }) => theme.AreaDeTrabajo.Fondo};
  border-radius: 12px;
  box-shadow: 0px 4px 16px ${({ theme }) => theme.AreaDeTrabajo.Sombra};
  margin: 0 auto;
  max-width: 900px;
  padding: 20px;
`;
